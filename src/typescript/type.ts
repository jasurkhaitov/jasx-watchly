import { IconType } from 'react-icons'

export interface Category {
	name: string
	icons: IconType
	active?: boolean
}

export interface Video {
	id: {
		kind: string
		videoId: string
	}
	kind: string
	snippet: {
		publishedAt: string
		channelId: string
		title: string
		description: string
		thumbnails: {
			default: Thumbnail
			medium: Thumbnail
			high: Thumbnail
		}
		channelTitle: string
		liveBroadcastContent: string
		publishTime: string
	}
}

interface Thumbnail {
	url: string
	width: number
	height: number
}

export interface VideoCardDetail {
	imageUrl: string
	title: string
	channelTitle: string
	desc: string
	published: string
}

export interface ChannelCardDetail {
	imageUrl: string
	channelTitle: string
	desc: string
	published: string
}