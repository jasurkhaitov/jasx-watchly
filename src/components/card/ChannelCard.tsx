import { Clock } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { formatDistanceToNow } from 'date-fns'
import { ChannelCardDetail } from '@/typescript/type'
import { Link } from 'react-router-dom'

export default function ChannelCard({
	imageUrl,
	channelTitle,
	desc,
	published,
	id,
}: ChannelCardDetail) {
	return (
		<div className='flex flex-col items-center p-5 text-center'>
			<Avatar className='w-[150px] h-[150px] mb-4'>
				<AvatarImage src={imageUrl} />
				<AvatarFallback>{channelTitle[0]}</AvatarFallback>
			</Avatar>
			<h3 className='font-semibold text-lg mb-2'>{channelTitle}</h3>
			<p className='text-sm text-muted-foreground mb-3'>{desc}</p>

			<Link to={`/channel/${id}`}>
				<Button variant={'secondary'}>View Channel</Button>
			</Link>

			<div className='flex items-start space-x-2 text-xs mt-5'>
				<Badge variant='secondary' className='px-2 py-1'>
					<Clock className='w-3 h-3 mr-1' />
					{formatDistanceToNow(new Date(published), {
						addSuffix: true,
					})}
				</Badge>
				<Badge
					variant='outline'
					className={`px-2 py-1 text-xs bg-blue-100 text-blue-800`}
				>
					Channel
				</Badge>
			</div>
		</div>
	)
}
