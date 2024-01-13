import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Loading from './loading'

export default function Youtube(){
	const [videos, setVideos] = useState([])
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		const apiKey = 'AIzaSyDkAd2LHSJ5glxKF5M8JD5ieeY_YgFJDBs'
		const channelId = 'UCJ5v_MCY6GNUBTO8-D3XoAG'


		// axios.get(`https//www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&key=${apiKey}`)
		// .then(response => {
		// 		//setVideos(response.data.items);
		// 		console.log(response.data);
		// })
		// .catch(error =>{
		// 	console.log(error)
		// })
		const getData = async ()=>{
			const options = {
			  method: 'GET',
			  url: 'https://youtube138.p.rapidapi.com/channel/videos/',
			  params: {
			    id: 'UC-GI_d8SJaY_Su0TU87k6Vw',
			    hl: 'en',
			    gl: 'US'
			  },
			  headers: {
			    'X-RapidAPI-Key': '3f6ee1d352mshee38e7172feff63p1b6256jsn10d4452c3b45',
			    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
			  }
			};

			try {
				const response = await axios.request(options);
				console.log(response.data);
				setVideos(response.data.contents)
			} catch (error) {
				console.error(error);
			}
			setLoading(false)
		}
		getData()
	}, []);


	return(
 <div>
 		{
 			loading && <Loading/>
 		}
      <h1 className='text-white text-center font-sans'>YouTube Channel Videos</h1>
      <ul className='w-[100%] pb-9 flex flex-col gap-2 justify-center items-center md:grid md:grid-cols-3 md:gap-2'>
        {(videos.length > 0) ? (videos.map(video => (
          <li key={video.video.videoId} className='p-1 m-1'>
            <iframe
              title={video.video.title}
              width="335"
              height="315"
              src={`https://www.youtube.com/embed/${video.video.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className='text-[2vh] text-white'>{video.video.title}</p>
          </li>
        ))) : (
        <div className='flex items-center justify-center h-[8vh] w-[60%] bg-white opacity-80'><h3>No vidoes</h3></div>
        )
      }
      </ul>
    </div>
	)
}