import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Skeleton } from '../ui/skeleton'
import { VideoDetailProps } from '@/typescript/type'

export default function VideoDetail({ videoDetail }: VideoDetailProps) {
	console.log(videoDetail);
	
	if (!videoDetail)
		return (
			<div className='max-w-4xl mx-auto p-4 mt-24'>
				<Skeleton className='w-full aspect-video rounded-lg' />
				<Card className='mt-4'>
					<CardContent className='p-4'>
						<Skeleton className='h-8 w-3/4 mb-2' />
						<Skeleton className='h-4 w-1/4 mb-4' />
						<Skeleton className='h-4 w-full mb-2' />
						<Skeleton className='h-4 w-full mb-2' />
						<Skeleton className='h-4 w-3/4 mb-4' />
						<div className='flex items-center gap-2 mt-4'>
							<Skeleton className='h-6 w-20' />
							<Skeleton className='h-6 w-20' />
							<Skeleton className='h-6 w-20' />
						</div>
					</CardContent>
				</Card>
			</div>
		)

	return (
		<div className='max-w-6xl mx-auto p-4 mt-24'>
			<iframe
				className='w-full aspect-video rounded-lg'
				src={`https://www.youtube.com/embed/${videoDetail.id}`}
				title={videoDetail.snippet.title}
				allowFullScreen
			/>
			<Card className='mt-4'>
				<CardContent className='p-4'>
					<h1 className='text-2xl font-bold'>{videoDetail.snippet.title}</h1>
					<p className='text-gray-600 text-sm'>
						{new Date(videoDetail.snippet.publishedAt).toDateString()}
					</p>
					<p className='mt-2 text-gray-700'>
						{videoDetail.snippet.description}
					</p>
					<div className='flex items-center gap-2 mt-4'>
						<Badge>{videoDetail.statistics.viewCount} views</Badge>
						<Badge>{videoDetail.statistics.likeCount} likes</Badge>
						<Badge>{videoDetail.statistics.commentCount} comments</Badge>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
