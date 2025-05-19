
import Link from 'next/link';
import { getVideos, type VideoItem } from '@/services/googleSheetsService';

export default async function AllSummaryVideosPage() {
  const allVideos = await getVideos();
  const summaryVideos = allVideos.filter(video => video.category === 'summaryVideo');

  if (!summaryVideos || summaryVideos.length === 0) {
    return (
      <div className="container">
        <p>לא נמצאו סרטוני סיכום להצגה.</p>
        <div className="back-link-container">
          <Link href="/" className="back-link">חזרה לאתר הראשי</Link>
        </div>
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
              {/* You can add a description field to your VideoItem interface and Google Sheet if needed */}
              {/* <p>תיאור קצר של הסרטון.</p> */}
            </div>
          ))}
        </div>
      </div>
      <div className="back-link-container">
        <Link href="/" className="back-link">חזרה לאתר הראשי</Link>
      </div>
    </>
  );
}
