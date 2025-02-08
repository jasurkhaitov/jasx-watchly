import VideoGrid from '@/components/home/VideoGrid'
import MainPageNavbar from '@/components/shared/MainPageNavbar'
import { MyGlobalContext } from '@/hooks/useContext'
import { ApiService } from '@/service/ApiService'
import { useContext, useEffect } from 'react'

export default function MainPage() {
	const {selectedCategory, setVideo, setStatus} = useContext(MyGlobalContext)

	useEffect(() => {
		document.title = 'Watchly | Discover and Enjoy Videos'
	}, [])

	useEffect(() => {
    ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
      .then((db) => {
        setVideo(db.data);
        setStatus(db.status);
				console.log(db.data)
      });
  }, [selectedCategory, setStatus, setVideo]);

	return (
		<>
			<MainPageNavbar />
			<VideoGrid/>
		</>
	)
}
