import Navbar from '@/components/shared/Navbar'
import SuggestedVideo from '@/components/video/SuggestedVideo'
import VideoDetails from '@/components/video/VideoDetails'
import { MyGlobalContext } from '@/hooks/useContext'
import { ApiService } from '@/service/ApiService'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function VideoPage() {
	const { id } = useParams()
	const [suggestedVideo, setSuggestedVideo] = useState([])
	const [suggestedVideoStatus, setSuggestedVideoStatus] = useState(0)

	const { setVideoDetails, setStatus } = useContext(MyGlobalContext)

	useEffect(() => {
		const getData = async () => {
			try {
				const db = await ApiService.fetching(
					`videos?part=snippet,statistics&id=${id}`
				)
				setVideoDetails(db.data)
				setStatus(db.status)

				const suggestedVideo = await ApiService.fetching(
					`search?part=snippet&relatedToVideoId=${id}&type=video`
				)

				console.log(suggestedVideo.data)
				setSuggestedVideo(suggestedVideo.data)
				setSuggestedVideoStatus(suggestedVideo.status)
			} catch (err) {
				console.error(err)
			}
		}

		getData()
	}, [id, setStatus, setVideoDetails])

	return (
		<>
			<Navbar />
			<div className='mt-24 flex flex-col lg:flex-row px-5 gap-5'>
				<div className='w-full lg:w-[75%]'>
					<VideoDetails />
				</div>

				<div className='w-full lg:w-[25%]'>
					<SuggestedVideo
						suggested={suggestedVideo}
						status={suggestedVideoStatus}
					/>
				</div>
			</div>
		</>
	)
}
