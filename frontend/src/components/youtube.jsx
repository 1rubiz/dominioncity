import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Loading from './loading';

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
	axios({
		"method": "GET",
		"url": 'https://www.googleapis.com/youtube/v3/search',
		"params":{
			'part':'snippet',
			'maxResults':'20',
			'channelId':import.meta.env.VITE_ID,
			'key':import.meta.env.VITE_YOUTUBE_KEY,
		}
	})
		.then((res) => {
			let data = res.data.items;
			data.shift();
			setVideos(data)        
		})
		.catch((error) => {
			console.log(error)
		})
		setLoading(false)
		// console.log(posts); 
},[])

return(
	<div>
			{
				loading && <Loading/>
			}
		 <h1 className='text-white text-center font-sans'>YouTube Videos</h1>
		 <ul className='w-[100%] pb-9 flex flex-col gap-2 justify-center items-center md:grid md:grid-cols-3 md:gap-2'>
		   {(videos.length > 0) ? (videos.map(video => (
			 <li key={video.id.videoId} className='p-1 m-1'>
			   <iframe
				 title={video.snippet.title}
				 width="335"
				 height="315"
				 src={`https://www.youtube.com/embed/${video.id.videoId}`}
				 frameBorder="0"
				 allowFullScreen
			   ></iframe>
			   <p className='text-[2vh] text-white'>{video.snippet.title}</p>
			 </li>
		   ))) : (
		   <div className='flex items-center justify-center h-[8vh] w-[60%] bg-white opacity-80'><h3>No vidoes</h3></div>
		   )
		 }
		 </ul>
	   </div>
	   )
};
// {video.id.videoId}`}>{video.snippet.title}
export default Youtube;