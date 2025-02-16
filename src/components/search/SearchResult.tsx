import { useContext } from 'react'
import { MyGlobalContext } from '@/hooks/useContext'
import { Card } from '@/components/ui/card'
import { VideoSkeleton } from '../card/VideoSkeleton'
import VideoCard from '../card/VideoCard'
import ChannelCard from '../card/ChannelCard'
import PlaylistCard from '../card/PlaylistCard'

export default function SearchResult({
	searchQuery,
}: {
	searchQuery: string | undefined
}) {
	const { video, status } = useContext(MyGlobalContext)

	const isLoading = status !== 200
	return (
		<div className='mt-5 mb-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8'>
			<h2 className='text-4xl font-bold mb-6 ml-3 pt-[75px]'>
				Search Result for{' '}
				<span className='text-blue-700 dark:text-blue-500'>{searchQuery}</span>
				{'	'} videos
			</h2>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6'>
				{isLoading
					? Array.from({ length: 10 }).map((_, index) => (
							<VideoSkeleton key={index} />
					  ))
					: video.map((item, idx) => {
							const {id, snippet } = item

							return (
								<Card
									key={idx}
									className='group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col'
								>
									{item.id.kind === 'youtube#video' && (
										<VideoCard
											imageUrl={snippet.thumbnails.high.url}
											title={snippet.title}
											channelTitle={snippet.channelTitle}
											desc={snippet.description}
											published={snippet.publishedAt}
											id={id.videoId}
										/>
									)}

									{item.id.kind === 'youtube#channel' && (
										<ChannelCard
											imageUrl={snippet.thumbnails.high.url}
											channelTitle={snippet.channelTitle}
											desc={snippet.description}
											published={snippet.publishedAt}
											channelId={id.channelId}
										/>
									)}

									{item.id.kind === 'youtube#playlist' && (
										<PlaylistCard
											imageUrl={snippet.thumbnails.high.url}
											channelTitle={snippet.channelTitle}
											desc={snippet.description}
											published={snippet.publishedAt}
											title={snippet.title}
										/>
									)}
								</Card>
							)
					  })}
			</div>
		</div>
	)
}
