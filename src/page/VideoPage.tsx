import Navbar from '@/components/shared/Navbar'
import SuggestedVideo from '@/components/video/SuggestedVideo'
import VideoDetails from '@/components/video/VideoDetails'
import { MyGlobalContext } from '@/hooks/useContext'
import { ApiService } from '@/service/ApiService'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function VideoPage() {
	const { id } = useParams()

	const { setVideoDetails, setStatus } = useContext(MyGlobalContext)

	useEffect(() => {
		const getData = async () => {
			try {
				const db = await ApiService.fetching(
					`videos?part=snippet,statistics&id=${id}`
				)
				setVideoDetails(db.data)
				setStatus(db.status)
			} catch (err) {
				console.error(err)
			}
		}

		getData()
	}, [id, setStatus, setVideoDetails])

	return (
		<>
			<Navbar />
			<div className='flex flex-col lg:flex-row gap-6 p-4 lg:p-8'>
				<div className='w-full lg:w-[75%]'>
					<VideoDetails />
				</div>

				<div className='w-full lg:w-[25%]'>
					<SuggestedVideo />
				</div>
			</div>
		</>
	)
}
