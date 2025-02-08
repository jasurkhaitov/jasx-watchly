import { MyGlobalContext } from '@/hooks/useContext'
import { useContext } from 'react'
import VideoDetailSkeleton from './VideoDetailSkeleton'
import { Card, CardContent } from '../ui/card'
import { Badge } from 'lucide-react'

export default function VideoDetails() {
	const { videoDetails, status } = useContext(MyGlobalContext)
	const isLoading = status !== 200

	return (
		<div className='mt-24 mb-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8'>
			<div className='mx-auto p-4 mt-24'>
				{isLoading ? (
					<VideoDetailSkeleton />
				) : (
					videoDetails.map((item, idx) => {
						return (
							<div
								key={idx}
								className='group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col'
							>
								<iframe
									className='w-full aspect-video rounded-lg'
									src={`https://www.youtube.com/embed/${item.id}`}
									title={item.snippet.title}
									allowFullScreen
								/>
								<Card className='mt-4'>
									<CardContent className='p-4'>
										<h1 className='text-2xl font-bold'>{item.snippet.title}</h1>
										<p className='text-gray-600 text-sm'>
											{new Date(item.snippet.publishedAt).toDateString()}
										</p>
										<p className='mt-2 text-gray-700'>
											{item.snippet.description}
										</p>
										<div className='flex items-center gap-2 mt-4'>
											<Badge>{item.statistics.viewCount} views</Badge>
											<Badge>{item.statistics.likeCount} likes</Badge>
											<Badge>{item.statistics.commentCount} comments</Badge>
										</div>
									</CardContent>
								</Card>
							</div>
						)
					})
				)}
			</div>
		</div>
	)
}
