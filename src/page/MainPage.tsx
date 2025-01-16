import VideoGrid from '@/components/home/VideoGrid'
import MainPageNavbar from '@/components/shared/MainPageNavbar'
import { useEffect } from 'react'

export default function MainPage() {
	useEffect(() => {
		document.title = 'Watchly | Discover and Enjoy Videos'
	}, [])

	return (
		<>
			<MainPageNavbar />
			<VideoGrid/>
		</>
	)
}
