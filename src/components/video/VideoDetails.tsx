import { MyGlobalContext } from '@/hooks/useContext'
import { useContext } from 'react'
import VideoDetailSkeleton from './VideoDetailSkeleton'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Eye, MessageCircle, ThumbsUp } from 'lucide-react'

export default function VideoDetails() {
	const { videoDetails, status } = useContext(MyGlobalContext)
	const isLoading = status !== 200

	const formatDescription = (description: string) => {
		return description.split(/\s+/).map((word, idx) => {
			if (word.startsWith('#')) {
				return (
					<span
						key={idx}
						className='text-blue-500 font-semibold hover:text-blue-700'
					>
						{word + ' '}
					</span>
				)
			} else if (word.startsWith('http')) {
				return (
					<a
						key={idx}
						href={word}
						target='_blank'
						rel='noopener noreferrer'
						className='text-green-700 underline hover:text-green-900'
					>
						{word + ' '}
					</a>
				)
			}
			return word + ' '
		})
	}

	return (
		<div className='mt-24 mb-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8'>
			<div className='mx-auto p-4 mt-24'>
				{isLoading ? (
					<VideoDetailSkeleton />
				) : (
					videoDetails.map((item, idx) => (
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
									<h1 className='text-2xl font-bold border-b pb-2'>{item.snippet.title}</h1>
									<div className='flex items-center justify-between my-4'>
										<p className='text-gray-600 dark:text-gray-400 text-sm'>
											Published on{' '}
											{new Date(item.snippet.publishedAt).toLocaleDateString(
												'en-US',
												{
													year: 'numeric',
													month: 'long',
													day: 'numeric',
												}
											)}
										</p>

										<div className='flex flex-wrap items-center gap-1 rounded-sm'>
											<Badge
												variant='green'
												className='flex items-center gap-1 px-3 py-1'
											>
												<Eye className='w-4 h-4' />
												<span>
													{parseInt(item.statistics.viewCount).toLocaleString()}
												</span>
											</Badge>
											<Badge
												variant='destructive'
												className='flex items-center gap-1 px-3 py-1'
											>
												<ThumbsUp className='w-4 h-4' />
												<span>
													{parseInt(item.statistics.likeCount).toLocaleString()}
												</span>
											</Badge>
											<Badge
												variant='blue'
												className='flex items-center gap-1 px-3 py-1'
											>
												<MessageCircle className='w-4 h-4' />
												<span>
													{parseInt(
														item.statistics.commentCount
													).toLocaleString()}
												</span>
											</Badge>
										</div>
									</div>
									<p className='mt-2 text-[13px] text-gray-700 leading-relaxed'>
										{formatDescription(item.snippet.description)}
									</p>
								</CardContent>
							</Card>
						</div>
					))
				)}
			</div>
		</div>
	)
}
