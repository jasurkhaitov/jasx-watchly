import { IconType } from 'react-icons'

// interface Video {
//   id: string
//   title: string
//   channelName: string
//   views: number
//   uploadedAt: Date
//   thumbnailUrl: string
//   duration: string
// } 

export interface Category {
  name: string;
  icons: IconType;
  active?: boolean;
}

export interface Video {
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}