import { useState, useEffect } from 'react';
import axios from 'axios';
import useLoadingStore from '../store/loading';
import useViewStore from '../store/view';
import { toast } from 'sonner';

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: { url: string };
    };
  };
}

interface GalleryImage {
  imageUrl: string;
}

type TabType = 'videos' | 'gallery';

export default function Media() {
  const [activeTab, setActiveTab] = useState<TabType>('videos');
  const [videos, setVideos] = useState<Video[]>([]);
  const [collections, setCollections] = useState<string[]>([]);
  const [selectedCollection, setSelectedCollection] = useState('');
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const { start, stop } = useLoadingStore();
  const { setView } = useViewStore();

  const apiUrl = import.meta.env.VITE_API;
  const youtubeKey = import.meta.env.VITE_YOUTUBE_KEY;
  const channelId = import.meta.env.VITE_ID;

  // Fetch YouTube videos
  useEffect(() => {
    const fetchVideos = async () => {
      start();
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              part: 'snippet',
              maxResults: '12',
              channelId,
              key: youtubeKey,
              order: 'date',
            },
          }
        );
        const data = response.data.items;
        if (data.length > 0) data.shift();
        setVideos(data);
      } catch (error) {
        toast.error('Failed to fetch videos');
        console.error(error);
      } finally {
        stop();
      }
    };
    fetchVideos();
  }, []);

  const fetchCollections = async () => {
      start();
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios.get(`${apiUrl}/api/gallery/collections`, {
          headers: {
            Authorization: token,
          },
        });
        if (response.status === 200) {
          setCollections(response.data);
          if (response.data.length > 0) {
            setSelectedCollection(response.data[0]);
          }
        }
      } catch (error) {
        toast.error('Failed to fetch collections');
        console.error(error);
      } finally {
        stop();
      }
    };

  // Fetch gallery collections
  // useEffect(() => {
  //   const fetchCollections = async () => {
  //     start();
  //     try {
  //       const token = sessionStorage.getItem('token');
  //       const response = await axios.get(`${apiUrl}/api/gallery/collections`, {
  //         headers: {
  //           Authorization: token,
  //         },
  //       });
  //       if (response.status === 200) {
  //         setCollections(response.data);
  //         if (response.data.length > 0) {
  //           setSelectedCollection(response.data[0]);
  //         }
  //       }
  //     } catch (error) {
  //       toast.error('Failed to fetch collections');
  //       console.error(error);
  //     } finally {
  //       stop();
  //     }
  //   };
  //   fetchCollections();
  // }, []);

  // Fetch gallery images based on selected collection
  useEffect(() => {
    if (!selectedCollection) return;

    const fetchGalleryImages = async () => {
      start();
      try {
        const response = await axios.post(`${apiUrl}/api/gallery/filter`, {
          val: selectedCollection,
        });
        setGalleryImages(response.data.imageUrls || []);
        if (response.data.imageUrls && response.data.imageUrls.length > 0) {
          setSelectedImage(response.data.imageUrls[0].imageUrl);
          setView(response.data.imageUrls[0].imageUrl);
        }
      } catch (error) {
        toast.error('Failed to fetch gallery images');
        console.error(error);
      } finally {
        stop();
      }
    };
    fetchGalleryImages();
  }, [selectedCollection]);

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setView(imageUrl);
  };

  return (
    <div className="bg-on-surface text-on-surface font-body">
      {/* Hero Section */}
      {/* <section className="relative pb-20 w-full overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 bg-linear-to-br from-primary/80 to-background"></div>
        <div className="relative z-10 h-full max-w-screen-2xl mx-auto px-4 md:px-8 flex flex-col justify-end pb-12">
          <div className="max-w-2xl">
            <span className="block font-bold text-xs uppercase tracking-widest text-secondary mb-4">
              VISUAL TESTIMONY
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Media & Gallery
            </h1>
            <p className="text-lg text-white/70">
              Moments of worship, outreach, and community captured in time.
            </p>
          </div>
        </div>
      </section> */}

      {/* Tab Navigation */}
      <section className="sticky z-40 pt-28 bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-4 font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'videos'
                  ? 'text-secondary border-b-2 border-slate-600'
                  : 'text-on-surface/60 hover:text-on-surface'
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => {setActiveTab('gallery'); fetchCollections()}}
              className={`px-6 py-4 font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'gallery'
                  ? 'text-secondary border-b-2 border-slate-600'
                  : 'text-on-surface/60 hover:text-on-surface'
              }`}
            >
              Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      {activeTab === 'videos' && (
        <section className="py-20 md:py-20 px-4 md:px-8 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-on-surface">Latest Videos</h2>
            <p className="text-on-surface/60 mb-12">
              Discover the latest updates and messages from our ministry.
            </p>

            {videos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div
                    key={video.id.videoId}
                    className="group flex flex-col overflow-hidden border border-outline-variant/20 bg-surface-container hover:bg-surface-container-high transition-all"
                  >
                    <div className="relative w-full aspect-video overflow-hidden bg-black">
                      <img
                        src={video.snippet.thumbnails.high.url}
                        alt={video.snippet.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center justify-center w-16 h-16 bg-secondary">
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-on-surface hover:text-secondary transition-colors line-clamp-2"
                      >
                        {video.snippet.title}
                      </a>
                      <p className="text-xs text-on-surface/60 mt-2 line-clamp-2">
                        {video.snippet.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center py-20 bg-surface-container">
                <p className="text-on-surface/60">No videos found</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {activeTab === 'gallery' && (
        <section className="py-20 md:py-20 px-4 md:px-8 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-on-surface">Gallery</h2>
            <p className="text-on-surface/60 mb-8">
              Explore our collection of moments and memories.
            </p>

            {/* Collection Filter */}
            {collections.length > 0 && (
              <div className="mb-12">
                <div className="flex flex-wrap gap-2">
                  {collections.map((collection) => (
                    <button
                      key={collection}
                      onClick={() => setSelectedCollection(collection)}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                        selectedCollection === collection
                          ? 'bg-slate-600 text-white'
                          : 'bg-surface-container-high text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      {collection}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Timeline Gallery */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Image Display */}
              <div className="lg:col-span-2">
                <div className="flex flex-col gap-6">
                  <div className="relative w-full bg-surface-container-high border border-outline-variant/20 aspect-video overflow-hidden">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Selected gallery"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-on-surface/40">
                        No image selected
                      </div>
                    )}
                  </div>

                  {/* Timeline View */}
                  {/* <div className="border-l-2 border-secondary pl-6 space-y-8">
                    {galleryImages.length > 0 ? (
                      galleryImages.map((image, index) => (
                        <div
                          key={index}
                          onClick={() => handleImageSelect(image.imageUrl)}
                          className="group cursor-pointer relative"
                        >
                          Timeline dot
                          <div
                            className={`absolute -left-8 top-2 w-4 h-4 transition-all ${
                              selectedImage === image.imageUrl
                                ? 'bg-secondary w-5 h-5 -left-8.5'
                                : 'bg-outline-variant group-hover:bg-secondary'
                            }`}
                          ></div>

                          <div className="pt-2">
                            <p className="text-xs uppercase tracking-wider text-secondary font-bold mb-2">
                              Event {index + 1}
                            </p>
                            <h3 className="font-bold text-on-surface group-hover:text-secondary transition-colors mb-2">
                              {`Moment ${index + 1}`}
                            </h3>
                            <div className="text-xs text-on-surface/60 line-clamp-2 group-hover:text-on-surface/80 transition-colors">
                              A captured moment of worship and community
                            </div>
                          </div>

                          Thumbnail preview on hover
                          <div className="absolute right-0 top-0 w-20 h-20 bg-surface-container-high border border-outline-variant/20 opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden">
                            <img
                              src={image.imageUrl}
                              alt={`Moment ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-on-surface/60 py-8 text-center">
                        No images in this collection
                      </div>
                    )}
                  </div> */}
                </div>
              </div>

              {/* Sidebar - Thumbnail Grid */}
              <div className="lg:col-span-1">
                <h3 className="font-bold text-on-surface mb-4 text-sm uppercase tracking-wider">
                  Collection
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 max-h-96 overflow-y-auto">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => handleImageSelect(image.imageUrl)}
                      className={`relative aspect-square cursor-pointer border-2 transition-all hover:border-secondary ${
                        selectedImage === image.imageUrl
                          ? 'border-secondary'
                          : 'border-outline-variant/20'
                      }`}
                    >
                      <img
                        src={image.imageUrl}
                        alt={`Moment ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                      {selectedImage === image.imageUrl && (
                        <div className="absolute inset-0 bg-secondary/20"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

