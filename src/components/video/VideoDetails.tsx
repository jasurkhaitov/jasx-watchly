import { MyGlobalContext } from '@/hooks/useContext'
import { useContext } from 'react'
import VideoDetailSkeleton from './VideoDetailSkeleton'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { BadgeCheck, Eye, MessageSquareText, ThumbsUp } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

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
			} else if (word.startsWith('@')) {
				return (
					<a
						key={idx}
						href={word}
						target='_blank'
						rel='noopener noreferrer'
						className='text-red-700 hover:text-red-900'
					>
						{word + ' '}
					</a>
				)
			}
			return word + ' '
		})
	}

	return (
		<div className='mb-10 max-w-[1920px] mx-auto'>
			<div className='mx-auto'>
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
									<h1 className='text-2xl font-bold border-b pb-2'>
										{item.snippet.title}
									</h1>

									<div className='flex items-center justify-between my-4'>
										<div className='flex items-center space-x-2 mb-2'>
											<Avatar className='w-7 h-7'>
												<AvatarImage
													src={`https://ui-avatars.com/api/?name=${item.snippet.channelTitle}`}
													className='rounded-full'
												/>
												<AvatarFallback>
													{item.snippet.channelTitle[0]}
												</AvatarFallback>
											</Avatar>
											<span className='text-xs font-medium text-muted-foreground'>
												{item.snippet.channelTitle}
											</span>
											<BadgeCheck className='text-xs text-green-500 w-4 h-4' />
										</div>

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
												<MessageSquareText className='w-4 h-4' />
												<span>
													{parseInt(
														item.statistics.commentCount
													).toLocaleString()}
												</span>
											</Badge>
										</div>
									</div>
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
									<p className='mt-2 text-[13px] text-gray-700 leading-relaxed'>
										{formatDescription(item.snippet.description)}
									</p>

									<div className='mt-5 flex items-center justify-start gap-2 flex-wrap'>
										{item.snippet.tags?.map(item => (
											<Badge
												variant={'outline'}
												key={item}
												className='text-yellow-400 hover:text-yellow-600'
											>
												# {item}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						</div>
					))
				)}
			</div>
		</div>
	)
}
