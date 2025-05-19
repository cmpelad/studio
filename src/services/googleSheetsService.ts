
// src/services/googleSheetsService.ts
'use server';

import { env } from 'process';

// Fallback data - These are used if fetching from Google Sheets fails or is not configured.
const fallbackSiteConfig: Record<string, string> = {
    siteTitle: "קעמפ גן ישראל - אלעד (ברירת מחדל)",
    siteDescription: "חוויה של פעם בחיים! מחנה הקיץ הכי שווה מחכה לכם עם פעילויות מגוונות, מדריכים תותחים, ואווירה חסידית מיוחדת. (ברירת מחדל)",
    logoImageSrc: "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0",
    heroVideoId: "b2SaA1dYwl0",
    heroImageSrc: "https://images.unsplash.com/photo-1560707303-11e40c4110c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbiUyMHN1bW1lciUyMGNhbXB8ZW58MHx8fHwxNzIwMDk5NzI4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    heroImageAlt: "קדימון קעמפ גן ישראל אלעד (ברירת מחדל)",
    heroImageHint: "children summer camp",
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4BOspqh2ohsp6W0OGHqGtuXWrMb3e6C1c0bhw4bbYwnCmWA/viewform?embedded=true",
    paymentRedirectUrl: "https://icredit.rivhit.co.il/payment/PaymentFullPage.aspx?GroupId=5375c290-a52c-487d-ab47-14c0b0ef5365",
    contactOfficeAddress: "המשרד הראשי: רחוב רבי יהודה הנשיא 22, אלעד (ברירת מחדל)",
    contactPhoneNumber: "050-1234567 (ברירת מחדל)",
    contactEmail: "office@camp-elad.org.il (ברירת מחדל)",
    contactHours: "ימים א'-ה': 9:00-17:00, יום ו': 9:00-12:00 (ברירת מחדל)",
    principalName: "הרב מנחם מענדל גרינפלד (ברירת מחדל)",
    principalMessageParagraph1: "הורים וחניכים יקרים, אנו נרגשים לפתוח את שעריו של קעמפ גן ישראל אלעד לשנה נוספת של חוויות בלתי נשכחות. הקעמפ שלנו הוא לא רק מקום של כיף והנאה, אלא גם בית חם שמחנך לאורם של ערכי היהדות והחסידות. (ברירת מחדל)",
    principalMessageParagraph2: "הצוות המסור שלנו, המורכב ממדריכים מנוסים וחדורי שליחות, עמל ימים כלילות כדי להכין תוכנית עשירה ומגוונת שתשלב פעילויות אתגריות, סדנאות יצירה, טיולים מרתקים, וכמובן – לימוד והעמקה בתכנים חסידיים בצורה חווייתית ומהנה. אנו מזמינים אתכם להצטרף למשפחת קעמפ גן ישראל אלעד! (ברירת מחדל)",
    principalImageSrc: "https://placehold.co/400x500.png",
    principalImageAlt: "מנהל הקעמפ הרב מנחם מענדל גרינפלד (ברירת מחדל)",
    principalImageHint: "rabbi portrait",
    aboutTitle: "קעמפ גן ישראל אלעד: חוויה יהודית, חסידית ומהנה! (ברירת מחדל)",
    aboutParagraph1: "קעמפ גן ישראל אלעד מציע לילדיכם חווית קיץ ייחודית המשלבת הנאה, תוכן ערכי ואווירה חסידית תוססת. אנו מאמינים שכל ילד הוא עולם ומלואו, ושואפים להעניק לכל חניך יחס אישי וחם, תוך פיתוח כישרונותיו וחיזוק הקשר שלו למורשת ישראל. (ברירת מחדל)",
    aboutParagraph2: "הצוות המסור שלנו, המורכב ממדריכים בוגרים, אחראיים ובעלי ניסיון, מלווה את החניכים לאורך כל היום בפעילויות מגוונות, טיולים, סדנאות, התוועדויות ושיעורים מרתקים. אנו מקפידים על סטנדרטים גבוהים של בטיחות, כשרות ותנאים נאותים, כדי להבטיח לילדיכם קיץ בטוח, מהנה ובלתי נשכח. (ברירת מחדל)",
    aboutImageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080",
    aboutImageAlt: "קבוצת ילדים בפעילות קעמפ (ברירת מחדל)",
    aboutImageHint: "camp activity",
    mainSummaryVideoId: "gqgfz0h0om4",
};

const fallbackFaqs: FaqItem[] = [
    { id: "faq1_fallback", question: "לאילו גילאים מיועד הקעמפ? (מקומי)", answer: "הקעמפ מיועד לבנים בגילאי ז'-ט' (בוגרי כיתות ו'-ח'). אנו שמים דגש על התאמת הפעילויות והאווירה לגילאים אלו.", delay: "0" },
    { id: "faq2_fallback", question: "מהן שעות הפעילות בקעמפ? (מקומי)", answer: "שעות הפעילויות הן בדרך כלל מ-09:00 בבוקר ועד 17:00 אחר הצהריים. ייתכנו ימים עם פעילויות ערב מיוחדות, עליהן תימסר הודעה מראש.", delay: "50" },
    { id: "faq3_fallback", question: "האם יש צורך להביא אוכל? (מקומי)", answer: "לא, הקעמפ מספק ארוחות בוקר, צהריים וערב כשרות למהדרין, וכן כיבוד קל בין הארוחות. במקרה של רגישויות מזון, יש לעדכן אותנו מראש.", delay: "100" },
    { id: "faq4_fallback", question: "איזה ציוד יש להביא לקעמפ? (מקומי)", answer: "רשימת ציוד מפורטת תישלח לנרשמים. באופן כללי, יש להצטייד בבגדים נוחים, כובע, בקבוק מים, קרם הגנה, ופריטים אישיים. לטיולים יש להצטייד בנעלי הליכה נוחות.", delay: "150" },
    { id: "faq5_fallback", question: "מהי מדיניות הביטולים? (מקומי)", answer: "מדיניות הביטולים מפורטת בתקנון ההרשמה. באופן כללי, ניתן לבטל עד תאריך מסוים ולקבל החזר חלקי או מלא, בהתאם לתנאים.", delay: "200" },
];

const fallbackTestimonials: Testimonial[] = [
    { id: "testimonial1_fallback", quote: "הבן שלי חזר מאושר מהקעמפ! הוא לא הפסיק לספר חוויות ונהנה מכל רגע. הצוות היה מדהים והפעילויות מגוונות. ממליצים בחום! (מקומי)", author: "משפחת כהן, אלעד" },
    { id: "testimonial2_fallback", quote: "זו השנה השנייה שאנחנו שולחים את הילד לקעמפ גן ישראל אלעד, וכל פעם מחדש אנחנו מתרשמים מהמקצועיות, מהאווירה החסידית ומההשקעה בכל פרט. יישר כח! (מקומי)", author: "משפחת לוי, פתח תקווה" },
    { id: "testimonial3_fallback", quote: "המדריכים בקעמפ פשוט אלופים! הם יצרו קשר אישי וחם עם הילדים, והיוו עבורם דוגמה אישית. הילד שלנו מחכה כבר לשנה הבאה. תודה רבה! (מקומי)", author: "משפחת אברמוביץ, בני ברק" },
];

const fallbackSwiperSlides: SwiperSlideItem[] = [
    { id: "slide1_fallback", imageSrc: "https://images.unsplash.com/photo-1542868187-c40917f680a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwzfHxzdW1tZXIlMjBjYW1wJTIwY2hpbGRyZW58ZW58MHx8fHwxNzIwMDk5NjUxfDA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 1 (מקומי)", imageHint: "camp activities", captionTitle: "חוויה של פעם בחיים! (מקומי)", captionText: "מחנה הקיץ הכי שווה מחכה לכם עם מגוון פעילויות." },
    { id: "slide2_fallback", imageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 2 (מקומי)", imageHint: "children outdoors", captionTitle: "מדריכים תותחים ואווירה מיוחדת! (מקומי)", captionText: "הצטרפו אלינו לקיץ של כיף, חברות וערכים." },
    { id: "slide3_fallback", imageSrc: "https://images.unsplash.com/photo-1600904332802-915c1a0600a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwxMHx8c3VtbWVyJTIwY2FtcCUyMGZ1bnxlbnwwfHx8fDE3MjAwOTk4MDB8MA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 3 (מקומי)", imageHint: "camp games", captionTitle: "פעילויות מגוונות ומרתקות! (מקומי)", captionText: "טיולים, סדנאות, התוועדויות ועוד המון הפתעות." },
];

const fallbackVideos: VideoItem[] = [
    { id: "song1_fallback", videoId: "6aRI-emxQlU", title: "שיר הנושא - קעמפ גן ישראל (מקומי)", category: "campSong" },
    { id: "song2_fallback", videoId: "jNQXAC9IVRw", title: "המנון הקעמפ (דוגמה מקומית)", category: "campSong" },
    { id: "summary1_fallback", videoId: "gqgfz0h0om4", title: "סרטון סיכום קעמפ תשפ\"ג (מקומי)", category: "summaryVideo" },
    { id: "summary2_fallback", videoId: "dQw4w9WgXcQ", title: "סרטון סיכום נוסף (דוגמה מקומית)", category: "summaryVideo" },
];

const API_KEY = env.GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID = env.GOOGLE_SHEETS_SPREADSHEET_ID;

// Direct CSV URLs provided by the user
const FAQ_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=837718949&single=true&output=csv";
const SWIPER_SLIDES_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=421516172&single=true&output=csv";


if (!API_KEY || !SPREADSHEET_ID) {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
    console.warn(
      'GOOGLE_SHEETS_API_KEY or GOOGLE_SHEETS_SPREADSHEET_ID is missing. Site will use hardcoded fallback data for API-dependent features (excluding direct CSV links if provided).'
    );
  }
}

interface FetchSheetDataOptions {
  sheetName: string;
  range?: string;
}

// Fetches data using Google Sheets API (requires API_KEY and SPREADSHEET_ID)
async function fetchSheetData<T extends string[]>(
  options: FetchSheetDataOptions
): Promise<T[] | null> {
  if (!API_KEY || !SPREADSHEET_ID) {
    console.warn(`Skipping API fetch for ${options.sheetName} due to missing API_KEY or SPREADSHEET_ID.`);
    return null;
  }

  const { sheetName, range } = options;
  const sheetRange = range ? `${sheetName}!${range}` : sheetName;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(sheetRange)}?key=${API_KEY}&valueRenderOption=UNFORMATTED_VALUE&majorDimension=ROWS`;

  console.log(`Attempting to fetch data from Google Sheet API: ${sheetName}, Range: ${sheetRange}`);
  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        `Error fetching sheet data for ${sheetName} via API: ${response.status} ${response.statusText}. Body: ${errorBody}`
      );
      return null;
    }
    const data = await response.json();
    console.log(`Successfully fetched data for ${sheetName} via API. Num rows: ${data.values ? data.values.length : 0}`);
    return (data.values || []) as T[];
  } catch (error) {
    console.error(`Exception fetching sheet data for ${sheetName} via API:`, error);
    return null;
  }
}

// Fetches and parses CSV data from a direct URL
async function fetchCsvDataFromUrl(csvUrl: string, sheetTypeForLogging: string): Promise<string[][] | null> {
  if (!csvUrl) {
    console.warn(`fetchCsvDataFromUrl: No CSV URL provided for ${sheetTypeForLogging}. Skipping fetch.`);
    return null;
  }
  console.log(`Attempting to fetch CSV from URL for ${sheetTypeForLogging}: ${csvUrl}`);
  try {
    const response = await fetch(csvUrl, { next: { revalidate: 3600 } }); // Revalidate every hour
    if (!response.ok) {
      console.error(`Error fetching CSV data from URL ${csvUrl} for ${sheetTypeForLogging}: ${response.status} ${response.statusText}`);
      return null;
    }
    const text = await response.text();
    console.log(`Successfully fetched CSV data from URL for ${sheetTypeForLogging}. Raw CSV Text length: ${text.length}`);

    const rows = text
      .split(/\r?\n/)
      .map(line => {
        const row: string[] = [];
        let currentField = '';
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          if (char === '"') {
            if (inQuotes && i + 1 < line.length && line[i+1] === '"') {
              currentField += '"';
              i++;
            } else {
              inQuotes = !inQuotes;
            }
          } else if (char === ',' && !inQuotes) {
            row.push(currentField.trim());
            currentField = '';
          } else {
            currentField += char;
          }
        }
        row.push(currentField.trim());
        return row;
      })
      .filter(row => row.length > 0 && row.some(cell => cell.trim() !== ''));
    
    console.log(`Parsed CSV Data for ${sheetTypeForLogging} (first 5 rows):`, rows.slice(0,5));
    return rows;
  } catch (error) {
    console.error(`Exception fetching or parsing CSV data from URL ${csvUrl} for ${sheetTypeForLogging}:`, error);
    return null;
  }
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  delay?: string;
}

export async function getFaqData(): Promise<FaqItem[]> {
  if (FAQ_CSV_URL) {
    console.log(`getFaqData: Attempting to fetch from direct CSV URL: ${FAQ_CSV_URL}`);
    try {
      const rows = await fetchCsvDataFromUrl(FAQ_CSV_URL, 'FAQ');
      if (rows && rows.length > 0) {
        let dataRows = rows;
        const headerRow = rows[0].map(h => h.toLowerCase().trim());
        const expectedHeaders = ['id', 'question', 'answer'];
        const isHeaderPresent = expectedHeaders.every(expHeader => headerRow.includes(expHeader));
        let columnMap: Record<string, number> = {};

        if (isHeaderPresent) {
          console.log("getFaqData: CSV Header row (id,question,answer) detected.");
          dataRows = rows.slice(1);
          headerRow.forEach((header, index) => {
            columnMap[header] = index;
          });
          console.log("getFaqData: Column map based on headers:", columnMap);
        } else {
          console.log("getFaqData: No specific CSV Header (id,question,answer) detected, assuming fixed order: [id/question], [question/answer].");
          // If only two columns and no 'id' header, assume [question, answer]
          if (headerRow.length === 2 && !headerRow.includes('id')) {
             columnMap = { question: 0, answer: 1 };
          } else { // Assume [id, question, answer] or just [question, answer] if first column is not 'id' like
             columnMap = { id: 0, question: 1, answer: 2 };
          }
        }

        if (dataRows.length > 0) {
          const faqs = dataRows.map((row, index) => {
            const question = row[columnMap.question] || '';
            const answer = row[columnMap.answer] || '';
            // If 'id' is not in columnMap (e.g. 2-column CSV), generate it. Otherwise, use it or generate.
            const id = columnMap.id !== undefined ? (row[columnMap.id] || `faq_csv_${index}`) : `faq_csv_${index}`;
            
            if (!question && !answer) return null; // Skip empty rows

            return {
              id: id.trim(),
              question: question.trim(),
              answer: answer.trim(),
              delay: String(index * 50),
            };
          }).filter(faq => faq !== null) as FaqItem[];
          console.log(`getFaqData: Processed ${faqs.length} FAQ items from CSV URL. First item:`, faqs[0]);
          return faqs.length > 0 ? faqs : fallbackFaqs;
        } else {
          console.log('getFaqData: No data rows found in CSV from URL after potential header skip.');
        }
      } else {
        console.log('getFaqData: No data returned from CSV URL fetch.');
      }
    } catch (e) {
      console.error('getFaqData: Error processing CSV data from URL, will try API or fallback.', e);
    }
  } else {
    console.log('getFaqData: FAQ_CSV_URL not defined. Will try API or fallback.');
  }

  // Fallback to API if CSV fails or URL not provided
  if (API_KEY && SPREADSHEET_ID) {
    const sheetName = 'FAQ';
    console.log(`getFaqData: Attempting to fetch from Google Sheets API, Sheet: ${sheetName}`);
    try {
      const rowsFromApi = await fetchSheetData<[string, string, string]>({ sheetName, range: 'A:C' }); // Assuming ID, Question, Answer
      if (rowsFromApi && rowsFromApi.length > 1) { // Assuming first row is header
        const faqs = rowsFromApi.slice(1).map((row, index) => ({
          id: row[0]?.trim() || `faq_api_${index}`,
          question: row[1]?.trim() || '',
          answer: row[2]?.trim() || '',
          delay: String(index * 50),
        })).filter(faq => faq.question || faq.answer);
        console.log(`getFaqData: Processed ${faqs.length} FAQ items from Google Sheets API.`);
        return faqs.length > 0 ? faqs : fallbackFaqs;
      } else {
        console.log(`getFaqData: No data rows (or only header) in ${sheetName} sheet via API. Using fallbackFaqs.`);
      }
    } catch (error) {
      console.error('getFaqData: Error processing FAQ data from Google Sheets API, using fallbackFaqs:', error);
    }
  } else {
    console.log('getFaqData: API_KEY or SPREADSHEET_ID missing for API call. Using fallbackFaqs.');
  }
  
  console.log('getFaqData: Using hardcoded fallbackFaqs data.');
  return fallbackFaqs;
}


export interface ContactDetails {
  officeAddress?: string;
  phoneNumber?: string;
  email?: string;
  contactHours?: string;
}

// SiteConfig will be hardcoded as per user request
export async function getSiteConfig(): Promise<Record<string, string>> {
    console.log("getSiteConfig: Using hardcoded fallbackSiteConfig data as requested.");
    return fallbackSiteConfig;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

export async function getTestimonials(): Promise<Testimonial[]> {
    console.log("getTestimonials: Returning hardcoded fallbackTestimonials.");
    return fallbackTestimonials;
}

export interface SwiperSlideItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  imageHint?: string;
  captionTitle: string;
  captionText: string;
}

export async function getSwiperSlides(): Promise<SwiperSlideItem[]> {
  if (SWIPER_SLIDES_CSV_URL) {
    console.log(`getSwiperSlides: Attempting to fetch from direct CSV URL: ${SWIPER_SLIDES_CSV_URL}`);
    try {
      const rows = await fetchCsvDataFromUrl(SWIPER_SLIDES_CSV_URL, 'SwiperSlides');
      if (rows && rows.length > 0) {
        let dataRows = rows;
        const headerRow = rows[0].map(h => h.toLowerCase().trim());
        const expectedHeaders = ['id', 'imagesrc', 'imagealt', 'imagehint', 'captiontitle', 'captiontext'];
        const isHeaderPresent = expectedHeaders.every(expHeader => headerRow.includes(expHeader));
        let columnMap: Record<string, number> = {};

        if (isHeaderPresent) {
          console.log("getSwiperSlides: CSV Header row detected for SwiperSlides.");
          dataRows = rows.slice(1);
          headerRow.forEach((header, index) => {
             // Normalize header names for mapping (e.g., imagesrc to imageSrc)
            if (header === 'imagesrc') columnMap['imageSrc'] = index;
            else if (header === 'imagealt') columnMap['imageAlt'] = index;
            else if (header === 'imagehint') columnMap['imageHint'] = index;
            else if (header === 'captiontitle') columnMap['captionTitle'] = index;
            else if (header === 'captiontext') columnMap['captionText'] = index;
            else columnMap[header] = index; // For 'id' and any other exact matches
          });
           console.log("getSwiperSlides: Column map based on headers:", columnMap);
        } else {
          console.log("getSwiperSlides: No specific CSV Header for SwiperSlides detected, assuming fixed order: id,imageSrc,imageAlt,imageHint,captionTitle,captionText.");
          columnMap = { id: 0, imageSrc: 1, imageAlt: 2, imageHint: 3, captionTitle: 4, captionText: 5 };
        }

        if (dataRows.length > 0) {
          const slides = dataRows.map((row, index) => {
            const id = row[columnMap.id]?.trim() || `swiper_csv_${index}`;
            const imageSrc = row[columnMap.imageSrc]?.trim() || '';
            const imageAlt = row[columnMap.imageAlt]?.trim() || '';
            const imageHint = row[columnMap.imageHint]?.trim() || undefined;
            const captionTitle = row[columnMap.captionTitle]?.trim() || '';
            const captionText = row[columnMap.captionText]?.trim() || '';

            if (!imageSrc && !captionTitle) return null; // Skip effectively empty rows

            return { id, imageSrc, imageAlt, imageHint, captionTitle, captionText };
          }).filter(slide => slide !== null) as SwiperSlideItem[];
          console.log(`getSwiperSlides: Processed ${slides.length} SwiperSlide items from CSV URL. First item:`, slides[0]);
          return slides.length > 0 ? slides : fallbackSwiperSlides;
        } else {
          console.log('getSwiperSlides: No data rows found in CSV from URL after potential header skip.');
        }
      } else {
        console.log('getSwiperSlides: No data returned from CSV URL fetch.');
      }
    } catch (e) {
      console.error('getSwiperSlides: Error processing CSV data from URL, will try API or fallback.', e);
    }
  } else {
    console.log('getSwiperSlides: SWIPER_SLIDES_CSV_URL not defined. Will try API or fallback.');
  }
  
  // Fallback to API if CSV fails or URL not provided
  if (API_KEY && SPREADSHEET_ID) {
    const sheetName = 'SwiperSlides';
    console.log(`getSwiperSlides: Attempting to fetch from Google Sheets API, Sheet: ${sheetName}`);
    try {
      const rowsFromApi = await fetchSheetData<[string, string, string, string, string, string]>({ sheetName, range: 'A:F' });
      if (rowsFromApi && rowsFromApi.length > 1) {
        const slides = rowsFromApi.slice(1).map((row, index) => ({
          id: row[0]?.trim() || `slide_api_${index}`,
          imageSrc: row[1]?.trim() || '',
          imageAlt: row[2]?.trim() || '',
          imageHint: row[3]?.trim() || undefined,
          captionTitle: row[4]?.trim() || '',
          captionText: row[5]?.trim() || '',
        })).filter(slide => slide.imageSrc || slide.captionTitle);
        console.log(`getSwiperSlides: Processed ${slides.length} items from Google Sheets API.`);
        return slides.length > 0 ? slides : fallbackSwiperSlides;
      } else {
        console.log(`getSwiperSlides: Sheet ${sheetName} is empty or has only header via API. Using fallback.`);
      }
    } catch (error) {
      console.error(`getSwiperSlides: Error processing data from Google Sheets API for ${sheetName}, using fallback:`, error);
    }
  } else {
    console.log(`getSwiperSlides: API_KEY or SPREADSHEET_ID missing for API call. Using fallbackSwiperSlides.`);
  }

  console.log("getSwiperSlides: Using hardcoded fallbackSwiperSlides.");
  return fallbackSwiperSlides;
}

export interface VideoItem {
  id: string;
  videoId: string;
  title: string;
  category: 'campSong' | 'summaryVideo' | string;
}

export async function getVideos(): Promise<VideoItem[]> {
    console.log("getVideos: Returning hardcoded fallbackVideos.");
    return fallbackVideos;
}
    
    