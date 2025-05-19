
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
// Removed Footer import
import './videos.css'; // Import videos page specific styles

export const metadata: Metadata = {
  title: 'כל סרטוני הסיכום - קעמפ גן ישראל אלעד',
  description: 'צפו בכל סרטוני הסיכום מהחוויות הבלתי נשכחות בקעמפ גן ישראל אלעד.',
};

export default function AllSummaryVideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="videos-page-layout">
      <Header />
      {/* Example of a dedicated title bar for videos page */}
      <div className="videos-page-specific-header">
        <h1>כל סרטוני הסיכום</h1>
      </div>
      <main className="videos-main-content">
        {children}
      </main>
      {/* Removed general Footer */}
    </div>
  );
}
