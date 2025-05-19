
"use client";
import { useContext } from 'react';
import Link from 'next/link';
import { GlobalContext } from '@/components/AppInitializer';
import type { VideoItem } from '@/services/googleSheetsService';

export default function AllSummaryVideosPage() {
  const context = useContext(GlobalContext);
  
  const allVideos = context?.videos || [];
  const summaryVideos = allVideos.filter(video => video.category === 'summaryVideo');

  if (!context) {
    return (
      <div className="container">
        <p>טוען סרטונים...</p>
      </div>
    );
  }
  
  if (!summaryVideos || summaryVideos.length === 0) {
    return (
      <div className="container">
        <p>לא נמצאו סרטוני סיכום להצגה.</p>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="video-grid">
          {summaryVideos.map((video) => (
            <div className="video-item" key={video.id}>
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h3>{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
