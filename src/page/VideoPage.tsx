import Navbar from '@/components/shared/Navbar';
import VideoDetails from '@/components/video/VideoDetails'
import { MyGlobalContext } from '@/hooks/useContext'
import { ApiService } from '@/service/ApiService';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function VideoPage() {
  const { id } = useParams();

  const { setVideoDetails, setStatus} = useContext(MyGlobalContext)

  useEffect(() => {
    const getData = async () => {
      try {
        const db = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetails(db.data);
        setStatus(db.status)
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [id, setStatus, setVideoDetails]);

  return (
    <>
      <Navbar />
      <VideoDetails />
    </>
  );
}
