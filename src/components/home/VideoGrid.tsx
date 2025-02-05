import { useContext } from 'react'
import { MyGlobalContext } from '@/hooks/useContext'
import { Card } from '@/components/ui/card'
import { VideoSkeleton } from './VideoSkeleton'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import PlaylistCard from './PlaylistCard'

export default function VideoGrid() {
	const { video, selectedCategory, status } = useContext(MyGlobalContext)

	const isLoading = status !== 200

	return (
		<div className='mt-24 mb-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8'>
			<h2 className='text-4xl font-bold mb-6 ml-3 pt-[75px]'>
				{selectedCategory}{' '}
				<span className='text-blue-700 dark:text-blue-500'>Videos</span>
			</h2>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6'>
				{isLoading
					? Array.from({ length: 10 }).map((_, index) => (
							<VideoSkeleton key={index} />
					  ))
					: video.map((item, idx) => {
							const { snippet } = item

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
										/>
									)}

									{item.id.kind === 'youtube#channel' && (
										<ChannelCard
											imageUrl={snippet.thumbnails.high.url}
											channelTitle={snippet.channelTitle}
											desc={snippet.description}
											published={snippet.publishedAt}
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
