export default function SearchResult({searchQuery}: {searchQuery: string | undefined}) {
	return (
		<div className='pt-[100px]'>{searchQuery}</div>
	)
}