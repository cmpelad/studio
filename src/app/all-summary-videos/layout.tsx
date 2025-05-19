
import type { Metadata } from 'next';
import Link from 'next/link';
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
      <div className="header">
        <h1>כל סרטוני הסיכום</h1>
      </div>
      <main>{children}</main>
      <div style={{ textAlign: 'center', marginTop: '30px', paddingBottom: '30px' }}>
        <Link href="/" className="back-link">
          חזרה לאתר הראשי
        </Link>
      </div>
    </div>
  );
}
