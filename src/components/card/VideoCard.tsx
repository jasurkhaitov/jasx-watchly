import { BadgeCheck, Clock, PlayCircle } from 'lucide-react'
import { CardContent } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { formatDistanceToNow } from 'date-fns'
import { VideoCardDetail } from '@/typescript/type'
import { Link } from 'react-router-dom'

export default function VideoCard({
	imageUrl,
	title,
	channelTitle,
	desc,
	published,
	id,
}: VideoCardDetail) {
	return (
		<Link to={`/video/${id}`}>
			<div className='relative aspect-video cursor-pointer'>
				<img
					src={imageUrl}
					alt={title}
					className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
				/>
				<div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
					<PlayCircle className='w-16 h-16 text-white' />
				</div>
			</div>

			<CardContent className='p-4 flex flex-col flex-grow'>
				<h3 className='font-semibold line-clamp-2 mb-2 text-md'>{title}</h3>
				<div className='flex items-center space-x-2 mb-2'>
					<Avatar className='w-7 h-7'>
						<AvatarImage
							src={`https://ui-avatars.com/api/?name=${channelTitle}`}
						/>
						<AvatarFallback>{channelTitle[0]}</AvatarFallback>
					</Avatar>
					<span className='text-xs font-medium text-muted-foreground'>
						{channelTitle}
					</span>
					<BadgeCheck className='text-xs text-green-500 w-4 h-4' />
				</div>
				<p className='text-xs text-muted-foreground line-clamp-3 mb-3 flex-grow'>
					{desc}
				</p>
				<div className='flex items-center space-x-2 text-xs mt-auto'>
					<Badge variant='secondary' className='px-2 py-1'>
						<Clock className='w-3 h-3 mr-1' />
						{formatDistanceToNow(new Date(published), {
							addSuffix: true,
						})}
					</Badge>
					<Badge
						variant='outline'
						className={`px-2 py-1 text-xs bg-red-100 text-red-800`}
					>
						Video
					</Badge>
				</div>
			</CardContent>
		</Link>
	)
}
