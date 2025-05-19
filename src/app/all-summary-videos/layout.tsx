
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer'; // הוספת ייבוא
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
      <div className="videos-page-specific-header">
        <h1 style={{ color: '#1E3A8A' }}>כל סרטוני הסיכום</h1> {/* צבע טקסט שונה בגלל רקע לבן */}
      </div>
      <main className="videos-main-content">
        {children}
      </main>
      <Footer /> {/* הוספת Footer */}
    </div>
  );
}
