import SearchResult from '@/components/search/SearchResult'
import Navbar from '@/components/shared/Navbar'
import { MyGlobalContext } from '@/hooks/useContext'
import { ApiService } from '@/service/ApiService'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function SearchPage() {
	const { searchQuery } = useParams()
	const { setVideo, setStatus } = useContext(MyGlobalContext)

	useEffect(() => {
		const getData = async () => {
			try {
				const db = await ApiService.fetching(`search?part=snippet&q=${searchQuery}`)
				setVideo(db.data)
				setStatus(db.status)
				console.log(db.data);
				
			} catch (err) {
				console.error(err)
			}
		}

		getData()
	}, [searchQuery, setVideo, setStatus])

	return (
		<>
			<Navbar />
			<SearchResult searchQuery={searchQuery} />
		</>
	)
}