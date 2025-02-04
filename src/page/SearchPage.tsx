import SearchResult from '@/components/search/SearchResult'
import Navbar from '@/components/shared/Navbar'
import { ApiService } from '@/service/ApiService'
import { Video } from '@/typescript/type'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SearchPage() {
	const params = useParams()

	const [searchVideo, setSearchVideo] = useState<Video[]>([]);
	
		useEffect(() => {
			ApiService.fetching(`search?part=snippet&q=${params.searchQuery}`)
				.then((db) => {
					setSearchVideo(db.data);
					console.log(db.data);
				});
		}, [searchVideo]);

	return (
		<>
			<Navbar/>
			<SearchResult searchQuery={params.searchQuery}/>
		</>
	)
}