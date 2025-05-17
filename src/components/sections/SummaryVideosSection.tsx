
export default function SummaryVideosSection() {
  return (
    <section id="summary-videos-section" className="content-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <h2 className="text-center" data-aos="fade-up" data-aos-delay="100">סרטוני סיכום</h2>
        <div className="summary-video-showcase" data-aos="fade-up" data-aos-delay="200">
          <iframe src="https://www.youtube.com/embed/gqgfz0h0om4" title="סרטון סיכום ראשי" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="all-videos-button-container" data-aos="fade-up" data-aos-delay="300">
          <a href="all-summary-videos.html" target="_blank" rel="noopener noreferrer" className="all-videos-button">לכל סרטוני הסיכום</a>
        </div>
      </div>
    </section>
  );
}

    