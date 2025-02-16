import { IconType } from 'react-icons'

export interface Category {
	name: string
	icons: IconType
	active?: boolean
}

export interface Video {
	id: {
		channelId: string
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
	id: string
}

export interface PlaylistDetail {
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
	channelId: string
}

export type Status = number | null

export interface VideoDetailProps {
	videoDetail?: {
		kind: string
		id: string
		snippet: {
			publishedAt: string
			channelId: string
			title: string
			description: string
			thumbnails: {
				default: Thumbnail
				medium: Thumbnail
				high: Thumbnail
				standard?: Thumbnail
				maxres?: Thumbnail
			}
			channelTitle: string
			tags?: string[]
			categoryId: string
			liveBroadcastContent: string
			localized: {
				title: string
				description: string
			}
			defaultAudioLanguage?: string
		}
		contentDetails: {
			duration: string
			dimension: string
			definition: string
			caption: string
			licensedContent: boolean
			contentRating: Record<string, unknown>
			projection: string
		}
		statistics: {
			viewCount: string
			likeCount: string
			favoriteCount: string
			commentCount: string
		}
	} | null
}

export interface VideoDetailTypes {
	kind: string
	id: string
	snippet: {
		publishedAt: string
		channelId: string
		title: string
		description: string
		thumbnails: {
			default: Thumbnail
			medium: Thumbnail
			high: Thumbnail
			standard?: Thumbnail
			maxres?: Thumbnail
		}
		channelTitle: string
		tags?: string[]
		categoryId: string
		liveBroadcastContent: string
		localized: {
			title: string
			description: string
		}
		defaultAudioLanguage?: string
	}
	contentDetails: {
		duration: string
		dimension: string
		definition: string
		caption: string
		licensedContent: boolean
		contentRating: Record<string, unknown>
		projection: string
	}
	statistics: {
		viewCount: string
		likeCount: string
		favoriteCount: string
		commentCount: string
	}
}