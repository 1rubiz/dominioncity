import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import useLoadingStore from '../../store/loading';

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      high: { url: string };
    };
  };
}

export default function Message() {
  const [videos, setVideos] = useState<Video[]>([]);
  const { start, stop } = useLoadingStore();
  const youtubeKey = import.meta.env.VITE_YOUTUBE_KEY;
  const channelId = import.meta.env.VITE_ID;

  useEffect(() => {
    const fetchVideos = async () => {
      start();
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              part: 'snippet',
              maxResults: '4',
              channelId,
              key: youtubeKey,
              order: 'date',
            },
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        toast.error('Failed to fetch messages');
        console.error(error);
      } finally {
        stop();
      }
    };
    fetchVideos();
  }, [channelId, youtubeKey, start, stop]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const openVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section className="bg-slate-600 text-white py-32 px-12 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-5xl tracking-tighter uppercase mb-16">
          Latest Messages
        </h2>
        
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Featured Video */}
            <div
              className="relative aspect-video bg-black overflow-hidden group cursor-pointer"
              onClick={() => openVideo(videos[0].id.videoId)}
            >
              <img
                alt={videos[0].snippet.title}
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                src={videos[0].snippet.thumbnails.high.url}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-12 bg-linear-to-t from-black/80 via-black/40 to-transparent">
                <span className="text-secondary font-sans text-xs uppercase tracking-[0.3em] font-bold mb-4">
                  Latest Message
                </span>
                <h3 className="font-headline text-4xl mb-6 line-clamp-2">
                  {videos[0].snippet.title}
                </h3>
                <div className="flex items-center gap-4">
                  <button className="bg-white/10 hover:bg-secondary p-4 backdrop-blur-md transition-all group/btn">
                    <span className="material-symbols-outlined text-white group-hover/btn:scale-110 transition-transform">
                      play_arrow
                    </span>
                  </button>
                  <span className="font-sans text-xs uppercase tracking-widest">
                    Watch Message
                  </span>
                </div>
              </div>
            </div>

            {/* Video List */}
            <div className="space-y-8">
              {videos.slice(1, 4).map((video, index) => (
                <div
                  key={index}
                  className="flex gap-8 group cursor-pointer border-b border-white/5 pb-8 hover:opacity-80 transition-opacity"
                  onClick={() => openVideo(video.id.videoId)}
                >
                  <div className="w-40 aspect-video overflow-hidden shrink-0">
                    <img
                      alt={video.snippet.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={video.snippet.thumbnails.high.url}
                    />
                  </div>
                  <div>
                    <span className="text-secondary font-sans text-[10px] uppercase tracking-widest font-bold mb-2 block">
                      {formatDate(video.snippet.publishedAt)}
                    </span>
                    <h4 className="font-headline text-xl mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                      {video.snippet.title}
                    </h4>
                    <p className="font-sans text-xs text-on-primary-container line-clamp-2">
                      {video.snippet.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-on-primary-container">Loading messages...</p>
          </div>
        )}
      </div>
    </section>
  );
}
