import { useState, useEffect } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast'
import useLoadingStore from '../store/loading';

const Youtube = () => {
	const { start, stop } = useLoadingStore()
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		start()
		axios({
			"method": "GET",
			"url": 'https://www.googleapis.com/youtube/v3/search',
			"params": {
				'part': 'snippet',
				'maxResults': '20',
				'channelId': import.meta.env.VITE_ID,
				'key': import.meta.env.VITE_YOUTUBE_KEY,
			}
		})
			.then((res) => {
				let data = res.data.items;
				data.shift();
				setVideos(data)
				stop()
			})
			.catch((error) => {
				setLoading(false)
				toast.error(error.message)
			})
	}, [])

	return (
		<div className='px-4'>
			<h1 className='text-white text-3xl font-bold'>Videos</h1>
			<div className='relative min-h-[12vh] w-full pb-9 flex flex-col gap-4 justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
				{(videos.length > 0) ? (videos.map(video => (
					<div key={video.id.videoId} className='p-1 m-1 h-80 w-80 md:w-64 md:h-80'>
						<iframe
							title={video.snippet.title}
							className="h-full w-full"
							src={`https://www.youtube.com/embed/${video.id.videoId}`}
							frameBorder="0"
							allowFullScreen
						></iframe>
						<p className='text-[2vh] text-white'>{video.snippet.title}</p>
					</div>
				))) : (
					<div className='text-center flex items-center justify-center lg:h-[12vh] w-[100%] bg-white opacity-80'><h3>Oops.....No videos</h3></div>
				)
				}
			</div>
		</div>
	)
};
export default Youtube;
