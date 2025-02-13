import { Video } from '@/typescript/type'
import VideoCard from '../card/VideoCard'
import { Card } from '../ui/card'
import { VideoSkeleton } from '../card/VideoSkeleton'
export default function SuggestedVideo({
	suggested,
	status,
}: {
	suggested: Video[]
	status: number
}) {
	const isLoading = status !== 200

	return (
		<div className='flex flex-col gap-2'>
			<h2 className='text-2xl font-bold'>Suggested Videos</h2>

			<div className='grid grid-cols-1 gap-6'>
				{isLoading
					? Array.from({ length: 10 }).map((_, index) => (
							<VideoSkeleton key={index} />
					  ))
					: suggested.map((item, idx) => {
							const { id, snippet } = item
							
							return (
								<Card
									key={idx}
									className='group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col'
								>
									{item.id.kind === 'youtube#video' && (
										<VideoCard
										imageUrl={snippet?.thumbnails?.high?.url || snippet?.thumbnails?.medium?.url || snippet?.thumbnails?.default?.url}
										title={snippet?.title || 'No title available'}
										channelTitle={snippet?.channelTitle || 'Unknown Channel'}
										desc={snippet?.description || 'No description available'}
										published={snippet?.publishedAt || new Date().toISOString()}
										id={id?.videoId}
									/>
									
									)}
								</Card>
							)
					  })}
			</div>
		</div>
	)
}
