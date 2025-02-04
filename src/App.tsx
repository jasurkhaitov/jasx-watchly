import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';
import NotFoundPage from './page/NotFoundPage';
import ChannelPage from './page/ChannelPage';
import VideoPage from './page/VideoPage';
import SearchPage from './page/SearchPage';
import { ApiService } from './service/ApiService';
import { MyGlobalContext } from './hooks/useContext';
import { Video } from './typescript/type'

type Status = number | null;

export default function App() {
  const [video, setVideo] = useState<Video[]>([]);
  const [status, setStatus] = useState<Status>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
      .then((db) => {
        setVideo(db.data);
        setStatus(db.status);
        console.log(db.data);
      });
  }, [selectedCategory]);

  return (
    <MyGlobalContext.Provider value={{ video, setVideo, selectedCategory, setSelectedCategory, status, setStatus }}>
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