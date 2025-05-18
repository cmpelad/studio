
// src/services/googleSheetsService.ts
'use server';

// Note: API_KEY and SPREADSHEET_ID are no longer used by getSiteConfig,
// but kept for other functions if they are reactivated later.
import { env } from 'process';

const API_KEY = env.GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID = env.GOOGLE_SHEETS_SPREADSHEET_ID;

if (!API_KEY || !SPREADSHEET_ID) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      'Google Sheets API Key or Spreadsheet ID is missing. Parts of the site using the API (e.g., FAQ, Testimonials if re-enabled) will use fallback data or fail to load. Please check your .env.local file.'
    );
  } else {
    console.error(
      'CRITICAL: Google Sheets API Key or Spreadsheet ID is missing in production. This will affect parts of the site relying on the Google Sheets API if those parts are re-enabled.'
    );
  }
}

interface FetchSheetDataOptions {
  sheetName: string;
  range?: string;
}

async function fetchSheetData<T>(
  options: FetchSheetDataOptions
): Promise<T | null> {
  if (!API_KEY || !SPREADSHEET_ID) {
    console.warn(`Skipping fetch for ${options.sheetName} via API due to missing API_KEY or SPREADSHEET_ID.`);
    return null;
  }

  const { sheetName, range } = options;
  const sheetRange = range ? `${sheetName}!${range}` : sheetName;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(sheetRange)}?key=${API_KEY}&valueRenderOption=UNFORMATTED_VALUE&majorDimension=ROWS`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) {
      console.error(
        `Error fetching sheet data for ${sheetName} via API: ${response.statusText}`
      );
      const errorBody = await response.text();
      console.error('Error body:', errorBody);
      return null;
    }
    const data = await response.json();
    return data.values || [];
  } catch (error) {
    console.error(`Exception fetching sheet data for ${sheetName} via API:`, error);
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
  // Returning hardcoded FAQ data
  const fallbackFaqs: FaqItem[] = [
    { id: "faq1", question: "לאילו גילאים מיועד הקעמפ?", answer: "הקעמפ מיועד לבנים בגילאי ז'-ט' (בוגרי כיתות ו'-ח'). אנו שמים דגש על התאמת הפעילויות והאווירה לגילאים אלו.", delay: "0" },
    { id: "faq2", question: "מהן שעות הפעילות בקעמפ?", answer: "שעות הפעילות הן בדרך כלל מ-09:00 בבוקר ועד 17:00 אחר הצהריים. ייתכנו ימים עם פעילויות ערב מיוחדות, עליהן תימסר הודעה מראש.", delay: "50" },
    { id: "faq3", question: "האם יש צורך להביא אוכל?", answer: "לא, הקעמפ מספק ארוחות בוקר, צהריים וערב כשרות למהדרין, וכן כיבוד קל בין הארוחות. במקרה של רגישויות מזון, יש לעדכן אותנו מראש.", delay: "100" },
    { id: "faq4", question: "איזה ציוד יש להביא לקעמפ?", answer: "רשימת ציוד מפורטת תישלח לנרשמים. באופן כללי, יש להצטייד בבגדים נוחים, כובע, בקבוק מים, קרם הגנה, ופריטים אישיים. לטיולים יש להצטייד בנעלי הליכה נוחות.", delay: "150" },
    { id: "faq5", question: "מהי מדיניות הביטולים?", answer: "מדיניות הביטולים מפורטת בתקנון ההרשמה. באופן כללי, ניתן לבטל עד תאריך מסוים ולקבל החזר חלקי או מלא, בהתאם לתנאים.", delay: "200" }
  ];
  console.log("getFaqData: Returning hardcoded data.");
  return fallbackFaqs;
}

export interface ContactDetails {
  officeAddress?: string;
  phoneNumber?: string;
  email?: string;
  contactHours?: string;
}

export async function getSiteConfig(): Promise<Record<string, string>> {
  console.log("getSiteConfig: Returning hardcoded data.");
  // Returning hardcoded site configuration
  const defaultConfig: Record<string, string> = {
    siteTitle: "קעמפ גן ישראל - אלעד",
    siteDescription: "חוויה של פעם בחיים! מחנה הקיץ הכי שווה מחכה לכם עם פעילויות מגוונות, מדריכים תותחים, ואווירה חסידית מיוחדת.",
    logoImageSrc: "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0",
    heroVideoId: "b2SaA1dYwl0",
    heroImageSrc: "https://images.unsplash.com/photo-1560707303-11e40c4110c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbiUyMHN1bW1lciUyMGNhbXB8ZW58MHx8fHwxNzIwMDk5NzI4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    heroImageAlt: "קדימון קעמפ גן ישראל אלעד",
    heroImageHint: "children summer camp",
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4BOspqh2ohsp6W0OGHqGtuXWrMb3e6C1c0bhw4bbYwnCmWA/viewform?embedded=true",
    paymentRedirectUrl: "https://icredit.rivhit.co.il/payment/PaymentFullPage.aspx?GroupId=5375c290-a52c-487d-ab47-14c0b0ef5365",
    contactOfficeAddress: "המשרד הראשי: רחוב רבי יהודה הנשיא 22, אלעד",
    contactPhoneNumber: "050-1234567",
    contactEmail: "office@camp-elad.org.il",
    contactHours: "ימים א'-ה': 9:00-17:00, יום ו': 9:00-12:00",
    principalName: "הרב מנחם מענדל גרינפלד",
    principalMessageParagraph1: "הורים וחניכים יקרים, אנו נרגשים לפתוח את שעריו של קעמפ גן ישראל אלעד לשנה נוספת של חוויות בלתי נשכחות. הקעמפ שלנו הוא לא רק מקום של כיף והנאה, אלא גם בית חם שמחנך לאורם של ערכי היהדות והחסידות.",
    principalMessageParagraph2: "הצוות המסור שלנו, המורכב ממדריכים מנוסים וחדורי שליחות, עמל ימים כלילות כדי להכין תוכנית עשירה ומגוונת שתשלב פעילויות אתגריות, סדנאות יצירה, טיולים מרתקים, וכמובן – לימוד והעמקה בתכנים חסידיים בצורה חווייתית ומהנה. אנו מזמינים אתכם להצטרף למשפחת קעמפ גן ישראל אלעד!",
    principalImageSrc: "https://placehold.co/400x500.png",
    principalImageAlt: "מנהל הקעמפ הרב מנחם מענדל גרינפלד",
    principalImageHint: "rabbi portrait",
    aboutTitle: "קעמפ גן ישראל אלעד: חוויה יהודית, חסידית ומהנה!",
    aboutParagraph1: "קעמפ גן ישראל אלעד מציע לילדיכם חווית קיץ ייחודית המשלבת הנאה, תוכן ערכי ואווירה חסידית תוססת. אנו מאמינים שכל ילד הוא עולם ומלואו, ושואפים להעניק לכל חניך יחס אישי וחם, תוך פיתוח כישרונותיו וחיזוק הקשר שלו למורשת ישראל.",
    aboutParagraph2: "הצוות המסור שלנו, המורכב ממדריכים בוגרים, אחראיים ובעלי ניסיון, מלווה את החניכים לאורך כל היום בפעילויות מגוונות, טיולים, סדנאות, התוועדויות ושיעורים מרתקים. אנו מקפידים על סטנדרטים גבוהים של בטיחות, כשרות ותנאים נאותים, כדי להבטיח לילדיכם קיץ בטוח, מהנה ובלתי נשכח.",
    aboutImageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080",
    aboutImageAlt: "קבוצת ילדים בפעילות קעמפ",
    aboutImageHint: "camp team activity",
    mainSummaryVideoId: "gqgfz0h0om4", // Default, can be overridden by the first video in 'summaryVideo' category from getVideos()
  };
  return defaultConfig;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  // Returning hardcoded testimonial data
  const fallbackTestimonials: Testimonial[] = [
    { id: "testimonial1", quote: "הבן שלי חזר מאושר מהקעמפ! הוא לא הפסיק לדבר על הפעילויות והמדריכים הנהדרים. תודה רבה לכם על חוויה מדהימה!", author: "משפחת כהן, אלעד" },
    { id: "testimonial2", quote: "הארגון היה למופת, האוכל בשפע והתוכן החסידי הועבר בצורה מרתקת. ממליצים בחום!", author: "משפחת לוי, פתח תקווה" },
    { id: "testimonial3", quote: "הקעמפ הזה הוא פשוט ברמה אחרת. רואים את ההשקעה בכל פרט. הבן שלנו כבר מחכה לשנה הבאה!", author: "משפחת אברמוביץ, בני ברק" },
    { id: "testimonial4", quote: "הצוות היה קשוב ואכפתי, והילד הרגיש בבית מהרגע הראשון. זו הייתה הפעם הראשונה שלו בקעמפ ואנחנו כל כך שמחים שבחרנו בכם.", author: "משפחת מזרחי, ראש העין" }
  ];
  console.log("getTestimonials: Returning hardcoded data.");
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
  // Returning hardcoded swiper slide data
  const fallbackSlides: SwiperSlideItem[] = [
    { id: "slide1", imageSrc: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBjYW1wJTIwYXRtb3NwaGVyZXxlbnwwfHx8fDE3MjAxMDE0NDR8MA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "אווירת קעמפ קיץ", imageHint: "camp bonfire", captionTitle: "חוויה של פעם בחיים!", captionText: "מחנה הקיץ הכי שווה מחכה לכם עם מגוון פעילויות." },
    { id: "slide2", imageSrc: "https://images.unsplash.com/photo-1509344461902-e3a57336c832?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwzfHxjaGlsZHJlbiUyMGNhbXBpbmd8ZW58MHx8fHwxNzIwMTAxNTAyfDA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "ילדים בפעילות קבוצתית", imageHint: "team building", captionTitle: "מדריכים תותחים ואווירה מיוחדת", captionText: "צוות מקצועי ומסור שילווה אתכם בכל רגע." },
    { id: "slide3", imageSrc: "https://images.unsplash.com/photo-1558021009-b2a490f9a29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHw1fHxzdW1tZXIlMjBjYW1wJTIwYWN0aXZpdGllc3xlbnwwfHx8fDE3MjAxMDE1NDR8MA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "פעילות ספורט בקעמפ", imageHint: "camp sports", captionTitle: "כיף, חברים וערכים", captionText: "שילוב מושלם של הנאה, תוכן חינוכי וקשר חם." },
  ];
  console.log("getSwiperSlides: Returning hardcoded data.");
  return fallbackSlides;
}

export interface VideoItem {
  id: string;
  videoId: string; 
  title: string;
  category: 'campSong' | 'summaryVideo' | string; 
}

export async function getVideos(): Promise<VideoItem[]> {
  // Returning hardcoded video data
  const fallbackVideos: VideoItem[] = [
    { id: "song1", videoId: "6aRI-emxQlU", title: "שיר הנושא - קעמפ גן ישראל", category: "campSong" },
    { id: "song2", videoId: "P3QkXTKAPh4", title: "המנון הקעמפ", category: "campSong" },
    { id: "summary1", videoId: "gqgfz0h0om4", title: "סרטון סיכום קעמפ תשפ\"ג", category: "summaryVideo" },
    { id: "summary2", videoId: "b2SaA1dYwl0", title: "קדימון לקעמפ תשפ\"ד", category: "summaryVideo" }
  ];
  console.log("getVideos: Returning hardcoded data.");
  return fallbackVideos;
}
