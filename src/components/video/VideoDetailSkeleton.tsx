import { Card, CardContent } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

export default function VideoDetailSkeleton() {
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
}
