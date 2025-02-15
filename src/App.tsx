import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';
import NotFoundPage from './page/NotFoundPage';
import ChannelPage from './page/ChannelPage';
import VideoPage from './page/VideoPage';
import SearchPage from './page/SearchPage';
import { MyGlobalContext } from './hooks/useContext';
import { Status, Video, VideoDetailTypes } from './typescript/type'

export default function App() {
  const [video, setVideo] = useState<Video[]>([]);
  const [status, setStatus] = useState<Status>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const [videoDetails, setVideoDetails] = useState<VideoDetailTypes[]>([]);

  return (
    <MyGlobalContext.Provider value={{ video, setVideo, selectedCategory, setSelectedCategory, status, setStatus, videoDetails, setVideoDetails}}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/channel/:id" element={<ChannelPage />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/search/:searchQuery" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MyGlobalContext.Provider>
  );
}