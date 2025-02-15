import SearchResult from '@/components/search/SearchResult'
import Navbar from '@/components/shared/Navbar'
import { MyGlobalContext } from '@/hooks/useContext'
import { ApiService } from '@/service/ApiService'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function SearchPage() {
	const { searchQuery } = useParams()

	const searchResult = searchQuery?.toLowerCase().replace(/-/g, ' ') || ''

	const { setVideo, setStatus } = useContext(MyGlobalContext)

	useEffect(() => {
		document.title = `${searchResult.replace(/\b\w/g, char => char.toUpperCase())} - Search Result`
	}, [searchResult])

	useEffect(() => {
		const getData = async () => {
			if (!searchResult) return

			try {
				const db = await ApiService.fetching(
					`search?part=snippet&q=${searchResult}`
				)
				setVideo(db.data)
				setStatus(db.status)
				console.log(db.data)
			} catch (err) {
				console.error(err)
			}
		}

		getData()
	}, [searchResult, setVideo, setStatus])

	return (
		<>
			<Navbar />
			<SearchResult searchQuery={searchResult} />
		</>
	)
}
