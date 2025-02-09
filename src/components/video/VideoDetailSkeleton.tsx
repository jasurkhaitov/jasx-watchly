import { Card, CardContent } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

export default function VideoDetailSkeleton() {
	return (
		<>
			<div className='group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col'>
				<Skeleton className='w-full aspect-video rounded-lg' />
				<Card className='mt-4'>
					<CardContent className='p-4'>
						<Skeleton className='h-8 w-3/4 mb-2' />
						<div className='flex items-center justify-between my-4'>
							<Skeleton className='h-4 w-1/4' />
							<div className='flex items-center gap-2'>
								<Skeleton className='h-6 w-20 flex items-center gap-1 px-3 py-1' />
								<Skeleton className='h-6 w-20 flex items-center gap-1 px-3 py-1' />
								<Skeleton className='h-6 w-20 flex items-center gap-1 px-3 py-1' />
							</div>
						</div>
						<Skeleton className='h-4 w-full mb-2' />
						<Skeleton className='h-4 w-full mb-2' />
						<Skeleton className='h-4 w-3/4 mb-4' />
					</CardContent>
				</Card>
			</div>
		</>
	)
}
