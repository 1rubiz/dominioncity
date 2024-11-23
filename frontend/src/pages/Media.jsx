import {useState, useEffect} from 'react'
import Youtube from '../components/youtube'
import Loading from '../components/loading'

export default function Media(){
	const [loading, setLoading] = useState(true);

  useEffect(()=>{
		setTimeout(()=>{
			setLoading(false);
		}, 2000)
	}, [])
	return(
		<div className='relative text-[6vh] pt-[17vh]'>
			{
			loading && <Loading/>
			}
			<Youtube/>
		</div>
	)
}