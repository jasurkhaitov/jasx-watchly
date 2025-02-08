import { Video, VideoDetailTypes } from '@/typescript/type'
import { createContext, Dispatch, SetStateAction } from 'react'

type Status = number | null

export interface GlobalContextType {
	video: Video[]
	setVideo: Dispatch<SetStateAction<Video[]>>

	status: Status
	setStatus: Dispatch<SetStateAction<Status>>

	selectedCategory: string
	setSelectedCategory: Dispatch<SetStateAction<string>>

	videoDetails: VideoDetailTypes[]
	setVideoDetails: Dispatch<SetStateAction<VideoDetailTypes[]>>
}

export const MyGlobalContext = createContext<GlobalContextType>({
	video: [],
	setVideo: () => {},

	status: null,
	setStatus: () => {},

	selectedCategory: 'All',
	setSelectedCategory: () => {},

	videoDetails: [],
	setVideoDetails: () => {},
})
