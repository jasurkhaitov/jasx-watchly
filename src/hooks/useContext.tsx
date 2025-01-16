import { createContext, Dispatch, SetStateAction } from 'react';

export interface Video {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
  };
}

type Status = number | null;

export interface GlobalContextType {
  video: Video[];
  setVideo: Dispatch<SetStateAction<Video[]>>;

  status: Status;
  setStatus: Dispatch<SetStateAction<Status>>;

  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

export const MyGlobalContext = createContext<GlobalContextType>({
  video: [],
  setVideo: () => {},

  status: null,
  setStatus: () => {},

  selectedCategory: 'All',
  setSelectedCategory: () => {},
});
