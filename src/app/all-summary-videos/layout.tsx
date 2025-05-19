
"use client"; // Required because we use useContext for dynamic title
import type { Metadata } from 'next';
import React, { useContext } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './videos.css';
import { GlobalContext } from '@/components/AppInitializer';

// export const metadata: Metadata = {
//   title: 'כל סרטוני הסיכום - קעמפ גן ישראל אלעד',
//   description: 'צפו בכל סרטוני הסיכום מהחוויות הבלתי נשכחות בקעמפ גן ישראל אלעד.',
// };

export default function AllSummaryVideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const context = useContext(GlobalContext);
  const pageTitle = context?.siteConfig?.summaryVideosPageTitle || 'כל סרטוני הסיכום';

  return (
    <div className="videos-page-layout">
      <Header />
      <div className="videos-page-specific-header">
        <h1>{pageTitle}</h1>
      </div>
      <main className="videos-main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
