
// src/services/googleSheetsService.ts

// --- Fallback Data ---
const fallbackSiteConfig: SiteConfig = {
    siteTitle: `קעמפ גן ישראל - אלעד (סטטי)`,
    siteDescription: `חוויה של פעם בחיים! מחנה הקיץ הכי שווה מחכה לכם עם פעילויות מגוונות, מדריכים תותחים, ואווירה חסידית מיוחדת. (סטטי)`,
    logoImageSrc: "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0",
    heroVideoId: "b2SaA1dYwl0", // Default video ID
    heroImageSrc: "https://images.unsplash.com/photo-1560707303-11e40c4110c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbiUyMHN1bW1lciUyMGNhbXB8ZW58MHx8fHwxNzIwMDk5NzI4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    heroImageAlt: `קדימון קעמפ גן ישראל אלעד (סטטי)`,
    heroImageHint: "children summer camp",
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4BOspqh2ohsp6W0OGHqGtuXWrMb3e6C1c0bhw4bbYwnCmWA/viewform?embedded=true",
    paymentRedirectUrl: "https://icredit.rivhit.co.il/payment/PaymentFullPage.aspx?GroupId=5375c290-a52c-487d-ab47-14c0b0ef5365",
    contactOfficeAddress: `המשרד הראשי: רחוב רבי יהודה הנשיא 22, אלעד (סטטי)`,
    contactPhoneNumber: `050-1234567 (סטטי)`,
    contactEmail: `office@camp-elad.org.il (סטטי)`,
    contactHours: `ימים א'-ה': 9:00-17:00, יום ו': 9:00-12:00 (סטטי)`,
    principalName: `הרב מנחם מענדל גרינפלד (סטטי)`,
    principalMessageParagraph1: `הורים וחניכים יקרים, אנו נרגשים לפתוח את שעריו של קעמפ גן ישראל אלעד לשנה נוספת של חוויות בלתי נשכחות. הקעמפ שלנו הוא לא רק מקום של כיף והנאה, אלא גם בית חם שמחנך לאורם של ערכי היהדות והחסידות. (סטטי)`,
    principalMessageParagraph2: `הצוות המסור שלנו, המורכב ממדריכים מנוסים וחדורי שליחות, עמל ימים כלילות כדי להכין תוכנית עשירה ומגוונת שתשלב פעילויות אתגריות, סדנאות יצירה, טיולים מרתקים, וכמובן – לימוד והעמקה בתכנים חסידיים בצורה חווייתית ומהנה. אנו מזמינים אתכם להצטרף למשפחת קעמפ גן ישראל אלעד! (סטטי)`,
    principalImageSrc: "https://placehold.co/400x500.png?text=Principal-Static",
    principalImageAlt: `מנהל הקעמפ הרב מנחם מענדל גרינפלד (סטטי)`,
    principalImageHint: "rabbi portrait",
    aboutTitle: `קעמפ גן ישראל אלעד: חוויה יהודית, חסידית ומהנה! (סטטי)`,
    aboutParagraph1: `קעמפ גן ישראל אלעד מציע לילדיכם חווית קיץ ייחודית המשלבת הנאה, תוכן ערכי ואווירה חסידית תוססת. אנו מאמינים שכל ילד הוא עולם ומלואו, ושואפים להעניק לכל חניך יחס אישי וחם, תוך פיתוח כישרונותיו וחיזוק הקשר שלו למורשת ישראל. (סטטי)`,
    aboutParagraph2: `הצוות המסור שלנו, המורכב ממדריכים בוגרים, אחראיים ובעלי ניסיון, מלווה את החניכים לאורך כל היום בפעילויות מגוונות, טיולים, סדנאות, התוועדויות ושיעורים מרתקים. אנו מקפידים על סטנדרטים גבוהים של בטיחות, כשרות ותנאים נאותים, כדי להבטיח לילדיכם קיץ בטוח, מהנה ובלתי נשכח. (סטטי)`,
    aboutImageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080",
    aboutImageAlt: `קבוצת ילדים בפעילות קעמפ (סטטי)`,
    aboutImageHint: "camp activity",
    galleryPageTitle: `גלריית תמונות (סטטי)`,
    summaryVideosPageTitle: `כל סרטוני הסיכום (סטטי)`,
};

const fallbackHeroConfigData: HeroConfigData = {
  imageSrc: fallbackSiteConfig.heroImageSrc || "https://images.unsplash.com/photo-1560707303-11e40c4110c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbiUyMHN1bW1lciUyMGNhbXB8ZW58MHx8fHwxNzIwMDk5NzI4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  imageAlt: fallbackSiteConfig.heroImageAlt || `קדימון קעמפ גן ישראל אלעד (סטטי)`,
  imageHint: fallbackSiteConfig.heroImageHint || "children summer camp",
  videoId: fallbackSiteConfig.heroVideoId || "b2SaA1dYwl0",
};

const fallbackPrincipalMessageData: PrincipalMessageData = {
  pageTitle: "דבר מנהל הקעמפ (סטטי)",
  principalName: fallbackSiteConfig.principalName || `הרב מנחם מענדל גרינפלד (סטטי)`,
  messageParagraph1: fallbackSiteConfig.principalMessageParagraph1 || `הורים וחניכים יקרים... (סטטי)`,
  messageParagraph2: fallbackSiteConfig.principalMessageParagraph2 || `הצוות המסור שלנו... (סטטי)`,
  imageSrc: fallbackSiteConfig.principalImageSrc || "https://placehold.co/400x500.png?text=Principal-Static",
  imageAlt: fallbackSiteConfig.principalImageAlt || `מנהל הקעמפ (סטטי)`,
  imageHint: fallbackSiteConfig.principalImageHint || "rabbi portrait",
};

const fallbackAboutSectionContentData: AboutSectionContentData = {
  sectionTitle: fallbackSiteConfig.aboutTitle || `אודות הקעמפ (סטטי)`,
  cardTitle: fallbackSiteConfig.aboutTitle || `אודות הקעמפ (סטטי)`,
  paragraph1: fallbackSiteConfig.aboutParagraph1 || `קעמפ גן ישראל אלעד מציע... (סטטי)`,
  paragraph2: fallbackSiteConfig.aboutParagraph2 || `הצוות המסור שלנו... (סטטי)`,
  imageSrc: fallbackSiteConfig.aboutImageSrc || "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080",
  imageAlt: fallbackSiteConfig.aboutImageAlt || `קבוצת ילדים בפעילות (סטטי)`,
  imageHint: fallbackSiteConfig.aboutImageHint || "camp activity",
};

const fallbackContactInfoData: ContactInfoData = {
  pageTitle: `צור קשר (סטטי)`,
  detailsTitle: `פרטי התקשרות (סטטי)`,
  officeAddress: `המשרד הראשי: רחוב רבי יהודה הנשיא 22, אלעד (סטטי)`,
  phoneNumber: `050-1234567 (סטטי)`,
  email: `office@camp-elad.org.il (סטטי)`,
  hoursTitle: `שעות מענה טלפוני (סטטי):`,
  hoursDetails: `ימים א'-ה': 9:00-17:00, יום ו': 9:00-12:00 (סטטי)`,
  additionalInfo: `ניתן להשאיר הודעה (סטטי).`,
};


const fallbackFaqs: FaqItem[] = [
    { id: "faq1_fallback", question: `לאילו גילאים מיועד הקעמפ? (סטטי)`, answer: `הקעמפ מיועד לבנים בגילאי ז'-ט' (בוגרי כיתות ו'-ח'). אנו שמים דגש על התאמת הפעילויות והאווירה לגילאים אלו.` },
    { id: "faq2_fallback", question: `מהן שעות הפעילות בקעמפ? (סטטי)`, answer: `שעות הפעילויות הן בדרך כלל מ-09:00 בבוקר ועד 17:00 אחר הצהריים. ייתכנו ימים עם פעילויות ערב מיוחדות, עליהן תימסר הודעה מראש.` },
    { id: "faq3_fallback", question: `האם יש צורך להביא אוכל? (סטטי)`, answer: `לא, הקעמפ מספק ארוחות בוקר, צהריים וערב כשרות למהדרין, וכן כיבוד קל בין הארוחות. במקרה של רגישויות מזון, יש לעדכן אותנו מראש.` },
    { id: "faq4_fallback", question: `איזה ציוד יש להביא לקעמפ? (סטטי)`, answer: `רשימת ציוד מפורטת תישלח לנרשמים. באופן כללי, יש להצטייד בבגדים נוחים, כובע, בקבוק מים, קרם הגנה, ופריטים אישיים. לטיולים יש להצטייד בנעלי הליכה נוחות.` },
    { id: "faq5_fallback", question: `מהי מדיניות הביטולים? (סטטי)`, answer: `מדיניות הביטולים מפורטת בתקנון ההרשמה. באופן כללי, ניתן לבטל עד תאריך מסוים ולקבל החזר חלקי או מלא, בהתאם לתנאים.` },
];

const fallbackTestimonials: Testimonial[] = [
    { id: "testimonial1_fallback", quote: `הבן שלי חזר מאושר מהקעמפ! הוא לא הפסיק לספר חוויות ונהנה מכל רגע. הצוות היה מדהים והפעילויות מגוונות. ממליצים בחום! (סטטי)`, author: `משפחת כהן, אלעד` },
    { id: "testimonial2_fallback", quote: `זו השנה השנייה שאנחנו שולחים את הילד לקעמפ גן ישראל אלעד, וכל פעם מחדש אנחנו מתרשמים מהמקצועיות, מהאווירה החסידית ומההשקעה בכל פרט. יישר כח! (סטטי)`, author: `משפחת לוי, פתח תקווה` },
    { id: "testimonial3_fallback", quote: `המדריכים בקעמפ פשוט אלופים! הם יצרו קשר אישי וחם עם הילדים, והיוו עבורם דוגמה אישית. הילד שלנו מחכה כבר לשנה הבאה. תודה רבה! (סטטי)`, author: `משפחת אברמוביץ, בני ברק` },
];

const fallbackSwiperSlides: SwiperSlideItem[] = [
    { id: "slide1_fallback", imageSrc: "https://images.unsplash.com/photo-1542868187-c40917f680a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwzfHxzdW1tZXIlMjBjYW1wJTIwY2hpbGRyZW58ZW58MHx8fHwxNzIwMDk5NjUxfDA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: `תמונת אווירה 1 (סטטי)`, imageHint: "camp activities", captionTitle: `חוויה של פעם בחיים! (סטטי)`, captionText: `מחנה הקיץ הכי שווה מחכה לכם עם מגוון פעילויות.` },
    { id: "slide2_fallback", imageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: `תמונת אווירה 2 (סטטי)`, imageHint: "children outdoors", captionTitle: `מדריכים תותחים ואווירה מיוחדת! (סטטי)`, captionText: `הצטרפו אלינו לקיץ של כיף, חברות וערכים.` },
    { id: "slide3_fallback", imageSrc: "https://images.unsplash.com/photo-1600904332802-915c1a0600a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwxMHx8c3VtbWVyJTIwY2FtcCUyMGZ1bnxlbnwwfHx8fDE3MjAwOTk4MDB8MA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: `תמונת אווירה 3 (סטטי)`, imageHint: "camp games", captionTitle: `פעילויות מגוונות ומרתקות! (סטטי)`, captionText: `טיולים, סדנאות, התוועדויות ועוד המון הפתעות.` },
];

const fallbackVideos: VideoItem[] = [
    { id: 'song1_fallback', videoId: '6aRI-emxQlU', title: `שיר הנושא - קעמפ גן ישראל (סטטי)`, category: 'campSong' },
    { id: 'song2_fallback', videoId: 'jNQXAC9IVRw', title: `המנון הקעמפ (דוגמה סטטית)`, category: 'campSong' },
    { id: 'summary1_fallback', videoId: 'gqgfz0h0om4', title: `סרטון סיכום קעמפ תשפ"ג (סטטי)`, category: 'summaryVideo' },
    { id: 'main_summary_fallback', videoId: 'gqgfz0h0om4', title: `סרטון סיכום ראשי (סטטי)`, category: 'mainSummaryVideo' },
];

const fallbackGalleryYears: GalleryYearData[] = [
  { yearSlug: "tashpad", yearName: `ה'תשפ"ד`, yearImage: "https://placehold.co/300x300.png?text=תשפד", yearImageHint: "camp collage" },
  { yearSlug: "tashpag", yearName: `ה'תשפ"ג`, yearImage: "https://placehold.co/300x300.png?text=תשפג", yearImageHint: "group photo"},
];

const fallbackGalleryDays: GalleryDayData[] = [
    { yearSlug: "tashpad", daySlug: "day1", dayName: "היום הראשון", thumbnail: "https://placehold.co/400x300.png?text=תשפד-1", thumbnailHint: "camp activity"},
    { yearSlug: "tashpad", daySlug: "day2", dayName: "היום השני", thumbnail: "https://placehold.co/400x300.png?text=תשפד-2", thumbnailHint: "outdoor fun"},
    { yearSlug: "tashpad", daySlug: "day3", dayName: "היום השלישי", thumbnail: "https://placehold.co/400x300.png?text=תשפד-3", thumbnailHint: "games"},
    { yearSlug: "tashpad", daySlug: "day4", dayName: "היום הרביעי", thumbnail: "https://placehold.co/400x300.png?text=תשפד-4", thumbnailHint: "learning"},
    { yearSlug: "tashpad", daySlug: "day5", dayName: "היום החמישי", thumbnail: "https://placehold.co/400x300.png?text=תשפד-5", thumbnailHint: "trip"},
    { yearSlug: "tashpad", daySlug: "day6", dayName: "היום השישי", thumbnail: "https://placehold.co/400x300.png?text=תשפד-6", thumbnailHint: "sports"},
    { yearSlug: "tashpad", daySlug: "day7", dayName: "היום השביעי", thumbnail: "https://placehold.co/400x300.png?text=תשפד-7", thumbnailHint: "crafts"},
    { yearSlug: "tashpad", daySlug: "day8", dayName: "היום השמיני", thumbnail: "https://placehold.co/400x300.png?text=תשפד-8", thumbnailHint: "bonfire"},
    { yearSlug: "tashpad", daySlug: "day9", dayName: "היום התשיעי", thumbnail: "https://placehold.co/400x300.png?text=תשפד-9", thumbnailHint: "awards"},
    { yearSlug: "tashpad", daySlug: "day10", dayName: "היום העשירי והסיום", thumbnail: "https://placehold.co/400x300.png?text=תשפד-10", thumbnailHint: "closing ceremony"},
    { yearSlug: "tashpag", daySlug: "day1", dayName: "פתיחת הקעמפ", thumbnail: "https://placehold.co/400x300.png?text=תשפג-1", thumbnailHint: "opening event"},
];

const fallbackGalleryImages: GalleryImageItem[] = [
    {yearSlug: "tashpad", daySlug: "day1", imageOrder: 1, src: "https://placehold.co/600x400.png?text=תשפד-1-1", alt: "תמונה 1 מהיום הראשון תשפד", hint: "children fun"},
    {yearSlug: "tashpad", daySlug: "day1", imageOrder: 2, src: "https://placehold.co/600x400.png?text=תשפד-1-2", alt: "תמונה 2 מהיום הראשון תשפד", hint: "group photo"},
    {yearSlug: "tashpag", daySlug: "day1", imageOrder: 1, src: "https://placehold.co/600x400.png?text=תשפג-1-1", alt: "תמונה 1 מפתיחת הקעמפ תשפג", hint: "camp opening"},
];


// --- Types ---
export interface SiteConfig {
  [key: string]: string | undefined;
  siteTitle?: string;
  siteDescription?: string;
  logoImageSrc?: string;
  heroVideoId?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  heroImageHint?: string;
  registrationFormUrl?: string;
  paymentRedirectUrl?: string;
  contactOfficeAddress?: string;
  contactPhoneNumber?: string;
  contactEmail?: string;
  contactHours?: string;
  principalName?: string;
  principalMessageParagraph1?: string;
  principalMessageParagraph2?: string;
  principalImageSrc?: string;
  principalImageAlt?: string;
  principalImageHint?: string;
  aboutTitle?: string;
  aboutParagraph1?: string;
  aboutParagraph2?: string;
  aboutImageSrc?: string;
  aboutImageAlt?: string;
  aboutImageHint?: string;
  mainSummaryVideoId?: string;
  galleryPageTitle?: string;
  summaryVideosPageTitle?: string;
}

export interface HeroConfigData {
  [key: string]: string | undefined;
  imageSrc?: string;
  imageAlt?: string;
  imageHint?: string;
  videoId?: string;
}

export interface PrincipalMessageData {
  [key: string]: string | undefined;
  pageTitle?: string;
  principalName?: string;
  messageParagraph1?: string;
  messageParagraph2?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageHint?: string;
}

export interface AboutSectionContentData {
  [key: string]: string | undefined;
  sectionTitle?: string;
  cardTitle?: string;
  paragraph1?: string;
  paragraph2?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageHint?: string;
}

export interface ContactInfoData {
  [key: string]: string | undefined;
  pageTitle?: string;
  detailsTitle?: string;
  officeAddress?: string;
  phoneNumber?: string;
  email?: string;
  hoursTitle?: string;
  hoursDetails?: string;
  additionalInfo?: string;
}

export interface FaqItem { id: string; question: string; answer?: string; delay?: string; } // Made answer optional for safety
export interface Testimonial { id: string; quote: string; author: string;}
export interface SwiperSlideItem { id: string; imageSrc: string; imageAlt: string; imageHint?: string; captionTitle: string; captionText: string;}
export interface VideoItem { id: string; videoId: string; title: string; category: 'campSong' | 'summaryVideo' | 'mainSummaryVideo' | string; }
export interface GalleryYearData { yearSlug: string; yearName: string; yearImage: string; yearImageHint?: string; }
export interface GalleryDayData { yearSlug: string; daySlug: string; dayName: string; thumbnail: string; thumbnailHint?: string; }
export interface GalleryImageItem { yearSlug: string; daySlug: string;  imageOrder?: number; src: string; alt: string; hint?: string; }


// --- CSV URLs ---
// !! IMPORTANT !! Replace GID_HERE with actual GID or ensure the whole doc is public if using gid=0 for first sheet
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

// Define GIDs as constants (or use placeholders if not yet available)
const SITE_CONFIG_GID = "0"; // Typically the first sheet
const FAQ_GID = "837718949";
const SWIPER_SLIDES_GID = "421516172";
const HERO_CONFIG_GID = "HERO_CONFIG_GID_PLACEHOLDER"; // Replace with actual GID for HeroConfig
const PRINCIPAL_MESSAGE_GID = "PRINCIPAL_MESSAGE_GID_PLACEHOLDER"; // Replace
const ABOUT_SECTION_CONTENT_GID = "ABOUT_SECTION_CONTENT_GID_PLACEHOLDER"; // Replace
const TESTIMONIALS_GID = "TESTIMONIALS_GID_PLACEHOLDER"; // Replace
const VIDEOS_GID = "VIDEOS_GID_PLACEHOLDER"; // Replace
const CONTACT_INFO_GID = "CONTACT_INFO_GID_PLACEHOLDER"; // Replace
const GALLERY_YEARS_GID = "GALLERY_YEARS_GID_PLACEHOLDER"; // Replace
const GALLERY_DAYS_GID = "GALLERY_DAYS_GID_PLACEHOLDER"; // Replace
const GALLERY_IMAGES_GID = "GALLERY_IMAGES_GID_PLACEHOLDER"; // Replace
const HOMEPAGE_GALLERY_SWIPER_GID = "HOMEPAGE_GALLERY_SWIPER_GID_PLACEHOLDER"; // Replace

// Helper to build CSV URLs
const buildCsvUrl = (gid: string) => {
  if (!SPREADSHEET_ID || gid.includes("_PLACEHOLDER")) return null; // Check for placeholder GID
  return `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=${gid}&single=true&output=csv`;
};

// Define CSV URLs using the helper
const SITE_CONFIG_CSV_URL = buildCsvUrl(SITE_CONFIG_GID);
const FAQ_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=837718949&single=true&output=csv";
const SWIPER_SLIDES_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=421516172&single=true&output=csv";
const HERO_CONFIG_CSV_URL = buildCsvUrl(HERO_CONFIG_GID);
const PRINCIPAL_MESSAGE_CSV_URL = buildCsvUrl(PRINCIPAL_MESSAGE_GID);
const ABOUT_SECTION_CONTENT_CSV_URL = buildCsvUrl(ABOUT_SECTION_CONTENT_GID);
const TESTIMONIALS_CSV_URL = buildCsvUrl(TESTIMONIALS_GID);
const VIDEOS_CSV_URL = buildCsvUrl(VIDEOS_GID);
const CONTACT_INFO_CSV_URL = buildCsvUrl(CONTACT_INFO_GID);
const GALLERY_YEARS_CSV_URL = buildCsvUrl(GALLERY_YEARS_GID);
const GALLERY_DAYS_CSV_URL = buildCsvUrl(GALLERY_DAYS_GID);
const GALLERY_IMAGES_CSV_URL = buildCsvUrl(GALLERY_IMAGES_GID);
const HOMEPAGE_GALLERY_SWIPER_CSV_URL = buildCsvUrl(HOMEPAGE_GALLERY_SWIPER_GID);

// --- Helper Functions ---
async function fetchCsvDataFromUrl(
  csvUrl: string | null,
  sheetNameForLog: string,
  expectedKeyHeaders?: string[] // For key-value sheets like SiteConfig, HeroConfig
): Promise<string[][] | null> {
  if (!csvUrl) {
    console.log(`${sheetNameForLog}: CSV URL is null (likely due to missing SPREADSHEET_ID or placeholder GID). Skipping fetch for ${sheetNameForLog}.`);
    return null;
  }
  try {
    console.log(`${sheetNameForLog}: Attempting to fetch CSV from URL: ${csvUrl}`);
    const response = await fetch(csvUrl, { next: { revalidate: 3600 } }); // Revalidate every hour
    
    if (!response.ok) {
      console.error(`${sheetNameForLog}: Error fetching CSV from ${csvUrl}: ${response.status} ${response.statusText}`);
      return null;
    }
    const text = await response.text();
    console.log(`${sheetNameForLog}: Successfully fetched CSV data from URL. Raw CSV Text length: ${text.length}`);
    
    const rows = text.split(/\r?\n/).map(row => {
      const parsedRow: string[] = [];
      let currentCell = "";
      let inQuotes = false;
      for (let i = 0; i < row.length; i++) {
        const char = row[i];
        if (char === '"') {
            if (inQuotes && i + 1 < row.length && row[i+1] === '"') {
                currentCell += '"';
                i++; 
                continue;
            }
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            parsedRow.push(currentCell.trim());
            currentCell = "";
        } else {
            currentCell += char;
        }
      }
      parsedRow.push(currentCell.trim());
      return parsedRow;
    }).filter(row => row.some(cell => cell !== "" || cell === "0")); 

    if (rows.length === 0) {
        console.log(`${sheetNameForLog}: CSV is empty or contains only empty rows.`);
        return null;
    }

    console.log(`${sheetNameForLog}: Parsed CSV Data (first 5 rows):`, rows.slice(0, 5));
    return rows;
  } catch (error) {
    console.error(`${sheetNameForLog}: Exception fetching or parsing CSV data from ${csvUrl}:`, error);
    return null;
  }
}

function csvToKeyValueObject<T extends Record<string, any>>(
  parsedData: string[][] | null,
  fallbackData: T,
  sheetNameForLog: string,
  keyColumnName: string = 'key',
  valueColumnName: string = 'value'
): T {
  const result = { ...fallbackData };
  if (!parsedData || parsedData.length === 0) {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): No parsed data or CSV URL not set, returning fallback.`);
    return result;
  }

  let dataStartIndex = 0;
  const headerRow = parsedData[0].map(h => h.toLowerCase().trim());
  const keyHeaderIndex = headerRow.indexOf(keyColumnName.toLowerCase());
  const valueHeaderIndex = headerRow.indexOf(valueColumnName.toLowerCase());

  if (keyHeaderIndex !== -1 && valueHeaderIndex !== -1) {
    dataStartIndex = 1;
    console.log(`${sheetNameForLog} (csvToKeyValueObject): Key-Value CSV Header row detected. Key column: ${keyHeaderIndex}, Value column: ${valueHeaderIndex}`);
  } else {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): Key-Value CSV Header row not detected or incomplete. Expected '${keyColumnName}' and '${valueColumnName}'. Got: "${headerRow.join(', ')}". Assuming direct key-value pairs (col 0 = key, col 1 = value).`);
     if (headerRow.length < 2 && parsedData.length < 2) {
        console.warn(`${sheetNameForLog} (csvToKeyValueObject): CSV data for key-value object doesn't have at least two columns or enough rows for direct key-value. Using fallback.`);
        return result;
    }
  }
  
  const dataRowsToParse = parsedData.slice(dataStartIndex);

  if (dataRowsToParse.length === 0 && dataStartIndex === 1) {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): CSV has header but no data rows. Using fallback.`);
    return result;
  }
   if (dataRowsToParse.length === 0 && dataStartIndex === 0) {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): CSV has no header and no data rows. Using fallback.`);
    return result;
  }

  for (let i = 0; i < dataRowsToParse.length; i++) {
    const row = dataRowsToParse[i];
    const keyIndex = dataStartIndex === 1 ? keyHeaderIndex : 0;
    const valueIndex = dataStartIndex === 1 ? valueHeaderIndex : 1;
    
    if (row.length <= Math.max(keyIndex, valueIndex)) {
        console.warn(`${sheetNameForLog} (csvToKeyValueObject): Row ${i + dataStartIndex} does not have enough columns (needs at least ${Math.max(keyIndex, valueIndex) + 1}, got ${row.length}). Skipping.`);
        continue;
    }
    const key = row[keyIndex];
    const value = row[valueIndex];
    if (key) {
      (result as Record<string, any>)[key] = value !== undefined ? value : '';
    }
  }
  console.log(`${sheetNameForLog} (csvToKeyValueObject): Final Key-Value object (merged with fallback):`, result);
  return result;
}


function csvToObjectsArray<T extends Record<string, any>>(
  parsedData: string[][] | null,
  fallbackData: T[],
  sheetNameForLog: string,
  expectedHeaders: (keyof T)[]
): T[] {
  if (!parsedData || parsedData.length === 0) {
    console.log(`${sheetNameForLog}: No parsed data or CSV URL not set, returning fallback.`);
    return fallbackData;
  }

  let dataStartIndex = 0;
  const columnMap: Record<string, number> = {};
  const headerRow = parsedData[0].map(h => h.toLowerCase().trim());
  
  const foundHeaders = expectedHeaders.filter(expectedHeaderKey => {
    const expectedHeaderString = String(expectedHeaderKey).toLowerCase();
    const idx = headerRow.indexOf(expectedHeaderString);
    if (idx !== -1) {
      columnMap[expectedHeaderString] = idx;
      return true;
    }
    return false;
  });

  const allExpectedHeadersFound = foundHeaders.length === expectedHeaders.length;

  if (allExpectedHeadersFound) {
    dataStartIndex = 1;
    console.log(`${sheetNameForLog}: CSV Header row detected and all expected headers found. Column map:`, columnMap);
  } else {
     console.log(`${sheetNameForLog}: CSV Header row does not fully match expected or is different. Expected: "${expectedHeaders.map(String).join(',')}", Found in CSV: "${headerRow.join(',')}". Assuming direct column order for mapping or specific parsing needed.`);
     if (parsedData.length === 1 && !allExpectedHeadersFound) {
        console.log(`${sheetNameForLog}: CSV contains only one row which doesn't match expected headers. Assuming it's a data row and using positional mapping if applicable.`);
        dataStartIndex = 0; // Treat the first row as data
    }
    // For FAQ specifically, if headers aren't id,question,answer, assume question,answer order
    if (sheetNameForLog === "FAQ" && (!headerRow.includes("id") || !headerRow.includes("question") || !headerRow.includes("answer"))) {
        console.log("FAQ: Applying special 2-column mapping (question, answer).");
        columnMap["question"] = 0;
        columnMap["answer"] = 1;
        dataStartIndex = headerRow.length > 1 && headerRow[0].toLowerCase() === "question" && headerRow[1].toLowerCase() === "answer" ? 1 : 0;
    } else {
        // Default to positional mapping if headers are not fully matched
        expectedHeaders.forEach((header, index) => {
          if (!(String(header).toLowerCase() in columnMap) && headerRow.length > index) {
            columnMap[String(header).toLowerCase()] = index;
          }
        });
    }
  }
  
  const objects: T[] = [];
  const dataRowsToParse = parsedData.slice(dataStartIndex);

  if (dataRowsToParse.length === 0) {
    console.log(`${sheetNameForLog}: No data rows to process after handling headers. Returning fallback.`);
    return fallbackData;
  }

  for (let i = 0; i < dataRowsToParse.length; i++) {
    const row = dataRowsToParse[i];
    if (row.every(cell => cell === "")) continue; 

    const obj: Partial<T> = {};
    let hasData = false;
    for (const headerKey of expectedHeaders) {
      const headerString = String(headerKey).toLowerCase();
      const colIndex = columnMap[headerString];
      
      if (colIndex !== undefined && colIndex < row.length) {
        obj[headerKey] = row[colIndex] as any;
        if (row[colIndex] !== "" && row[colIndex] !== undefined) hasData = true;
      } else {
        // Special handling for FAQ if it's a two-column CSV without headers
        if (sheetNameForLog === "FAQ" && !allExpectedHeadersFound && dataStartIndex === 0) {
          if (headerKey === 'id') {
             obj[headerKey] = `faq_csv_${i}` as any; // Auto-generate ID
          } else if (headerKey === 'question' && row.length > 0) {
             obj[headerKey] = row[0] as any;
             if(row[0] !== "" && row[0] !== undefined) hasData = true;
          } else if (headerKey === 'answer' && row.length > 1) {
             obj[headerKey] = row[1] as any;
             if(row[1] !== "" && row[1] !== undefined) hasData = true;
          } else {
             obj[headerKey] = undefined;
          }
        } else {
            console.warn(`${sheetNameForLog}: Missing data for header '${headerString}' in row ${i + dataStartIndex}. Row: ${row.join(',')}`);
            obj[headerKey] = undefined;
        }
      }
    }
    if (hasData) { // Only push if the object has some actual data
        objects.push(obj as T);
    }
  }
  console.log(`${sheetNameForLog}: Processed ${objects.length} items from CSV. Fallback not used.`);
  return objects.length > 0 ? objects : fallbackData;
}


// --- Data Fetching Functions ---

export async function getSiteConfig(): Promise<SiteConfig> {
  // const parsedData = await fetchCsvDataFromUrl(SITE_CONFIG_CSV_URL, "SiteConfig", ['key', 'value']);
  // if (parsedData) {
  //   return csvToKeyValueObject(parsedData, fallbackSiteConfig, "SiteConfig");
  // }
  console.log("getSiteConfig: Returning hardcoded fallbackSiteConfig data only.");
  return fallbackSiteConfig;
}

export async function getHeroConfigData(): Promise<HeroConfigData> {
  const parsedData = await fetchCsvDataFromUrl(HERO_CONFIG_CSV_URL, "HeroConfig", ['key', 'value']);
  if (parsedData && parsedData.length > 0) {
    return csvToKeyValueObject(parsedData, fallbackHeroConfigData, "HeroConfig");
  }
  console.log("getHeroConfigData: Using hardcoded fallbackHeroConfigData.");
  return fallbackHeroConfigData;
}

export async function getPrincipalMessageData(): Promise<PrincipalMessageData> {
  const parsedData = await fetchCsvDataFromUrl(PRINCIPAL_MESSAGE_CSV_URL, "PrincipalMessage", ['key', 'value']);
  if (parsedData && parsedData.length > 0) {
    return csvToKeyValueObject(parsedData, fallbackPrincipalMessageData, "PrincipalMessage");
  }
  console.log("getPrincipalMessageData: Using hardcoded fallbackPrincipalMessageData.");
  return fallbackPrincipalMessageData;
}

export async function getAboutSectionContentData(): Promise<AboutSectionContentData> {
  const parsedData = await fetchCsvDataFromUrl(ABOUT_SECTION_CONTENT_CSV_URL, "AboutSectionContent", ['key', 'value']);
  if (parsedData && parsedData.length > 0) {
    return csvToKeyValueObject(parsedData, fallbackAboutSectionContentData, "AboutSectionContent");
  }
  console.log("getAboutSectionContentData: Using hardcoded fallbackAboutSectionContentData.");
  return fallbackAboutSectionContentData;
}

export async function getContactInfoData(): Promise<ContactInfoData> {
  const parsedData = await fetchCsvDataFromUrl(CONTACT_INFO_CSV_URL, "ContactInfo", ['key', 'value']);
  if (parsedData && parsedData.length > 0) {
    return csvToKeyValueObject(parsedData, fallbackContactInfoData, "ContactInfo");
  }
  console.log("getContactInfoData: Returning hardcoded fallbackContactInfoData.");
  return fallbackContactInfoData;
}


export async function getFaqData(): Promise<FaqItem[]> {
  console.log(`FAQ: Attempting to fetch from direct CSV URL: ${FAQ_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(FAQ_CSV_URL, "FAQ", ['id', 'question', 'answer']);

  if (parsedData && parsedData.length > 0) {
    // Determine if the first row is a header or data
    const firstRowLower = parsedData[0].map(h => h.toLowerCase().trim());
    const isHeaderRow = firstRowLower.includes('id') && firstRowLower.includes('question') && firstRowLower.includes('answer');
    
    const expectedHeaders: (keyof FaqItem)[] = ['id', 'question', 'answer'];
    const faqs = csvToObjectsArray(parsedData, fallbackFaqs, "FAQ", expectedHeaders);
    
    console.log(`FAQ: Processed ${faqs.length} FAQ items from CSV URL.`);
    return faqs.map((faq, index) => ({ ...faq, delay: String(index * 50) }));
  }
  console.log("FAQ: Using hardcoded fallbackFaqs due to CSV fetch/parse failure or empty CSV.");
  return fallbackFaqs.map((faq, index) => ({ ...faq, delay: String(index * 50) }));
}


export async function getTestimonials(): Promise<Testimonial[]> {
  const parsedData = await fetchCsvDataFromUrl(TESTIMONIALS_CSV_URL, "Testimonials", ['id', 'quote', 'author']);
  if (parsedData && parsedData.length > 0) {
    return csvToObjectsArray(parsedData, fallbackTestimonials, "Testimonials", ['id', 'quote', 'author']);
  }
  console.log("getTestimonials: Returning hardcoded fallbackTestimonials.");
  return fallbackTestimonials;
}

export async function getSwiperSlides(): Promise<SwiperSlideItem[]> {
 console.log(`SwiperSlides: Attempting to fetch CSV from URL: ${SWIPER_SLIDES_CSV_URL}`);
 const parsedData = await fetchCsvDataFromUrl(SWIPER_SLIDES_CSV_URL, "SwiperSlides", ['id', 'imageSrc', 'imageAlt', 'imageHint', 'captionTitle', 'captionText']);
  if (parsedData && parsedData.length > 0) {
    const slides = csvToObjectsArray(parsedData, fallbackSwiperSlides, "SwiperSlides", ['id', 'imageSrc', 'imageAlt', 'imageHint', 'captionTitle', 'captionText']);
    console.log(`SwiperSlides: Processed ${slides.length} items from CSV.`);
    return slides;
  }
  console.log("getSwiperSlides: Returning hardcoded fallbackSwiperSlides.");
  return fallbackSwiperSlides;
}

export async function getVideos(): Promise<VideoItem[]> {
  const parsedData = await fetchCsvDataFromUrl(VIDEOS_CSV_URL, "Videos", ['id', 'videoId', 'title', 'category']);
  if (parsedData && parsedData.length > 0) {
    return csvToObjectsArray(parsedData, fallbackVideos, "Videos", ['id', 'videoId', 'title', 'category']);
  }
  console.log("getVideos: Returning hardcoded fallbackVideos.");
  return fallbackVideos;
}

export async function getGalleryYears(): Promise<GalleryYearData[]> {
  const parsedData = await fetchCsvDataFromUrl(GALLERY_YEARS_CSV_URL, "GalleryYears", ['yearSlug', 'yearName', 'yearImage', 'yearImageHint']);
   if (parsedData && parsedData.length > 0) {
    return csvToObjectsArray(parsedData, fallbackGalleryYears, "GalleryYears", ['yearSlug', 'yearName', 'yearImage', 'yearImageHint']);
  }
  console.log("getGalleryYears: Returning hardcoded fallbackGalleryYears.");
  return fallbackGalleryYears;
}

export async function getGalleryDays(): Promise<GalleryDayData[]> {
  const parsedData = await fetchCsvDataFromUrl(GALLERY_DAYS_CSV_URL, "GalleryDays", ['yearSlug', 'daySlug', 'dayName', 'thumbnail', 'thumbnailHint']);
  if (parsedData && parsedData.length > 0) {
    return csvToObjectsArray(parsedData, fallbackGalleryDays, "GalleryDays", ['yearSlug', 'daySlug', 'dayName', 'thumbnail', 'thumbnailHint']);
  }
  console.log("getGalleryDays: Returning hardcoded fallbackGalleryDays.");
  return fallbackGalleryDays;
}

export async function getGalleryImages(): Promise<GalleryImageItem[]> {
  const parsedData = await fetchCsvDataFromUrl(GALLERY_IMAGES_CSV_URL, "GalleryImages", ['yearSlug', 'daySlug', 'imageOrder', 'src', 'alt', 'hint']);
  if (parsedData && parsedData.length > 0) {
    const images = csvToObjectsArray(parsedData, fallbackGalleryImages, "GalleryImages", ['yearSlug', 'daySlug', 'imageOrder', 'src', 'alt', 'hint']);
    // Ensure imageOrder is a number
    return images.map(img => ({...img, imageOrder: Number(img.imageOrder) || 0 }));
  }
  console.log("getGalleryImages: Returning hardcoded fallbackGalleryImages.");
  return fallbackGalleryImages;
}

export async function getHomepageGallerySwiperData(): Promise<{imageSrc: string; imageAlt?: string; imageHint?: string}[]> {
    const parsedData = await fetchCsvDataFromUrl(HOMEPAGE_GALLERY_SWIPER_CSV_URL, "HomepageGallerySwiper", ['imageSrc', 'imageAlt', 'imageHint']);
    if (parsedData && parsedData.length > 0) {
        return csvToObjectsArray(parsedData, [], "HomepageGallerySwiper", ['imageSrc', 'imageAlt', 'imageHint']);
    }
    console.log("getHomepageGallerySwiperData: Failed to fetch or parse CSV, returning empty array.");
    return [];
}
