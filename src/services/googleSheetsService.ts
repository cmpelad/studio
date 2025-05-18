
// src/services/googleSheetsService.ts
'use server';

import { env } from 'process';

const API_KEY = env.GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID = env.GOOGLE_SHEETS_SPREADSHEET_ID;

if (!API_KEY || !SPREADSHEET_ID) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      'Google Sheets API Key or Spreadsheet ID is missing. Site will use fallback data or fail to load dynamic content from Sheets. Please check your .env.local file.'
    );
  } else {
    // In production, you might want to throw an error or handle this more gracefully
    // For now, we'll allow the app to continue, potentially with missing content.
    console.error(
      'CRITICAL: Google Sheets API Key or Spreadsheet ID is missing in production.'
    );
  }
}

interface FetchSheetDataOptions {
  sheetName: string;
  range?: string; // e.g., "A1:B10"
}

async function fetchSheetData<T>(
  options: FetchSheetDataOptions
): Promise<T | null> {
  if (!API_KEY || !SPREADSHEET_ID) {
    return null; // Or throw error, or return default/empty data
  }

  const { sheetName, range } = options;
  const sheetRange = range ? `${sheetName}!${range}` : sheetName;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(sheetRange)}?key=${API_KEY}&valueRenderOption=UNFORMATTED_VALUE&majorDimension=ROWS`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Revalidate every hour
    if (!response.ok) {
      console.error(
        `Error fetching sheet data for ${sheetName}: ${response.statusText}`
      );
      const errorBody = await response.text();
      console.error('Error body:', errorBody);
      return null;
    }
    const data = await response.json();
    return data.values || [];
  } catch (error) {
    console.error(`Exception fetching sheet data for ${sheetName}:`, error);
    return null;
  }
}

// Type for FAQ items after transformation
export interface FaqItem {
  id: string; // Or number, based on your sheet's ID column
  question: string;
  answer: string;
  delay?: string; // Keep this if your component uses it for AOS
}

export async function getFaqData(): Promise<FaqItem[]> {
  const rawData = await fetchSheetData<Array<[string | number, string, string]>>({
    sheetName: 'FAQ', // Make sure this matches your sheet tab name
    range: 'A2:C', // Assuming data starts from row 2, and columns A, B, C for id, question, answer
  });

  if (!rawData) {
    return [
      { id: "fallback1", question: "Could not load FAQ.", answer: "Please check configuration." }
    ];
  }

  return rawData.map((row, index) => ({
    id: String(row[0] || `faq-${index}`),
    question: row[1] || 'No question',
    answer: row[2] || 'No answer',
    delay: String(index * 50), // auto-generate delay if needed
  }));
}

export interface ContactDetails {
  officeAddress?: string;
  phoneNumber?: string;
  email?: string;
  contactHours?: string;
}

export async function getSiteConfig(): Promise<Record<string, string>> {
  const rawData = await fetchSheetData<Array<[string, string]>>({
    sheetName: 'SiteConfig', // Make sure this matches your sheet tab name
    range: 'A1:B', // Assuming key-value pairs in columns A and B
  });

  if (!rawData) {
    return {
        contactOfficeAddress: "Default Office Address",
        contactPhoneNumber: "Default Phone",
        contactEmail: "default@example.com",
        contactHours: "Default Hours",
    };
  }

  const config: Record<string, string> = {};
  rawData.forEach(row => {
    if (row[0] && row[1] !== undefined && row[1] !== null) {
      config[row[0]] = String(row[1]);
    }
  });
  return config;
}
