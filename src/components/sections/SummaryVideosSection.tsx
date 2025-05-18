
"use client";
import { useContext } from 'react';
import { GlobalContext } from '@/components/AppInitializer';
import type { VideoItem } from '@/services/googleSheetsService';

export default function SummaryVideosSection() {
  const context = useContext(GlobalContext);

  let mainSummaryVideoId = context?.siteConfig?.mainSummaryVideoId || "gqgfz0h0om4"; // Default from siteConfig
  let mainSummaryVideoTitle = "סרטון סיכום ראשי";

  // If not in siteConfig, try to get the first video of category 'summaryVideo'
  if (context?.videos && context.siteConfig?.mainSummaryVideoId === undefined) {
    const summaryVideos = context.videos.filter(v => v.category === 'summaryVideo');
    if (summaryVideos.length > 0) {
      mainSummaryVideoId = summaryVideos[0].videoId;
      mainSummaryVideoTitle = summaryVideos[0].title;
    }
  }
  
  if (!context) {
    return (
      <section id="summary-videos-section" className="content-section">
        <div className="container"><h2 className="text-center">טוען מידע...</h2></div>
      </section>
    );
  }

  return (
    <section id="summary-videos-section" className="content-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <h2 className="text-center" data-aos="fade-up" data-aos-delay="100">סרטוני סיכום</h2>
        <div className="summary-video-showcase" data-aos="fade-up" data-aos-delay="200">
          <iframe 
            src={`https://www.youtube.com/embed/${mainSummaryVideoId}`} 
            title={mainSummaryVideoTitle} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>
        <div className="all-videos-button-container" data-aos="fade-up" data-aos-delay="300">
          {/* This link still points to a static HTML page as per original structure */}
          <a href="all-summary-videos.html" target="_blank" rel="noopener noreferrer" className="all-videos-button">לכל סרטוני הסיכום</a>
        </div>
      </div>
    </section>
  );
}
