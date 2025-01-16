import { IconType } from 'react-icons'

interface Video {
  id: string
  title: string
  channelName: string
  views: number
  uploadedAt: Date
  thumbnailUrl: string
  duration: string
} 

export interface VideoGridProps {
  videos: Video[]
}

export interface Category {
  name: string;
  icons: IconType;
  active?: boolean;
}