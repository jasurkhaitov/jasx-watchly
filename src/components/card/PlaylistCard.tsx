import { BadgeCheck, Clock, ListVideo, Play } from 'lucide-react'
import { CardContent } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { formatDistanceToNow } from 'date-fns'
import { PlaylistDetail } from '@/typescript/type'
import { Button } from '../ui/button'

export default function PlaylistCard({
	imageUrl,
	title,
	channelTitle,
	published,
}: PlaylistDetail) {
	return (
		<div className='group flex flex-col'>
			<div className='relative aspect-video cursor-pointer'>
				<img
					src={imageUrl}
					alt={title}
					className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
				/>
				<div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105'>
					<ListVideo className='w-16 h-16 text-white' />
				</div>
			</div>

			<CardContent className='p-4 flex flex-col flex-grow'>
				<h3 className='font-semibold line-clamp-2 mb-2 text-md'>{title}</h3>
				<Button variant='secondary' className='flex items-center gap-2 mb-3'>
					<Play className='w-4 h-4' /> Play Playlist
				</Button>

				<div className='flex items-center space-x-2 mb-4'>
					<Avatar className='w-7 h-7'>
						<AvatarImage
							src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
								channelTitle
							)}`}
							alt={channelTitle}
						/>
						<AvatarFallback>{channelTitle?.charAt(0) || 'U'}</AvatarFallback>
					</Avatar>

					<span className='text-xs font-medium text-muted-foreground'>
						{channelTitle}
					</span>
					<BadgeCheck className='text-xs text-green-500 w-4 h-4' />
				</div>

				<div className='flex items-center space-x-2 text-xs mt-auto'>
					<Badge variant='secondary' className='px-2 py-1 flex items-center'>
						<Clock className='w-3 h-3 mr-1' />
						{formatDistanceToNow(new Date(published), {
							addSuffix: true,
						})}
					</Badge>
					<Badge
						variant='outline'
						className='px-2 py-1 text-xs bg-green-100 text-green-800'
					>
						Playlist
					</Badge>
				</div>
			</CardContent>
		</div>
	)
}
