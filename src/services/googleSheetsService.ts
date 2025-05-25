
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
    mainSummaryVideoId: "gqgfz0h0om4",
    galleryPageTitle: `גלריית תמונות (סטטי)`,
    summaryVideosPageTitle: `כל סרטוני הסיכום (סטטי)`,
};

const fallbackHeroConfigData: HeroConfigData = {
  imageSrc: fallbackSiteConfig.heroImageSrc || "https://images.unsplash.com/photo-1560707303-11e40c4110c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbiUyMHN1bW1lciUyMGNhbXB8ZW58MHx8fHwxNzIwMDk5NzI4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  imageAlt: fallbackSiteConfig.heroImageAlt || `קדימון קעמפ גן ישראל אלעד (סטטי)`,
  imageHint: fallbackSiteConfig.heroImageHint || "children summer camp",
  videoId: fallbackSiteConfig.heroVideoId || "b2SaA1dYwl0",
  // ctaButtonText is hardcoded in HeroSection.tsx
};

const fallbackPrincipalMessageData: PrincipalMessageData = {
  pageTitle: "דבר מנהל הקעמפ (סטטי)",
  principalName: fallbackSiteConfig.principalName || `הרב מנחם מענדל גרינפלד (סטטי)`,
  messageParagraph1: fallbackSiteConfig.principalMessageParagraph1 || `הורים וחניכים יקרים, אנו נרגשים לפתוח את שעריו של קעמפ גן ישראל אלעד לשנה נוספת של חוויות בלתי נשכחות. הקעמפ שלנו הוא לא רק מקום של כיף והנאה, אלא גם בית חם שמחנך לאורם של ערכי היהדות והחסידות. (סטטי)`,
  messageParagraph2: fallbackSiteConfig.principalMessageParagraph2 || `הצוות המסור שלנו, המורכב ממדריכים מנוסים וחדורי שליחות, עמל ימים כלילות כדי להכין תוכנית עשירה ומגוונת שתשלב פעילויות אתגריות, סדנאות יצירה, טיולים מרתקים, וכמובן – לימוד והעמקה בתכנים חסידיים בצורה חווייתית ומהנה. אנו מזמינים אתכם להצטרף למשפחת קעמפ גן ישראל אלעד! (סטטי)`,
  imageSrc: fallbackSiteConfig.principalImageSrc || "https://placehold.co/400x500.png?text=Principal-Static",
  imageAlt: fallbackSiteConfig.principalImageAlt || `מנהל הקעמפ הרב מנחם מענדל גרינפלד (סטטי)`,
  imageHint: fallbackSiteConfig.principalImageHint || "rabbi portrait",
};

const fallbackAboutSectionContentData: AboutSectionContentData = {
  sectionTitle: fallbackSiteConfig.aboutTitle || `קעמפ גן ישראל אלעד: חוויה יהודית, חסידית ומהנה! (סטטי)`,
  cardTitle: fallbackSiteConfig.aboutTitle || `אודות קעמפ גן ישראל אלעד (סטטי)`,
  paragraph1: fallbackSiteConfig.aboutParagraph1 || `קעמפ גן ישראל אלעד מציע לילדיכם חווית קיץ ייחודית המשלבת הנאה, תוכן ערכי ואווירה חסידית תוססת. אנו מאמינים שכל ילד הוא עולם ומלואו, ושואפים להעניק לכל חניך יחס אישי וחם, תוך פיתוח כישרונותיו וחיזוק הקשר שלו למורשת ישראל. (סטטי)`,
  paragraph2: fallbackSiteConfig.aboutParagraph2 || `הצוות המסור שלנו, המורכב ממדריכים בוגרים, אחראיים ובעלי ניסיון, מלווה את החניכים לאורך כל היום בפעילויות מגוונות, טיולים, סדנאות, התוועדויות ושיעורים מרתקים. אנו מקפידים על סטנדרטים גבוהים של בטיחות, כשרות ותנאים נאותים, כדי להבטיח לילדיכם קיץ בטוח, מהנה ובלתי נשכח. (סטטי)`,
  imageSrc: fallbackSiteConfig.aboutImageSrc || "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080",
  imageAlt: fallbackSiteConfig.aboutImageAlt || `קבוצת ילדים בפעילות קעמפ (סטטי)`,
  imageHint: fallbackSiteConfig.aboutImageHint || "camp activity",
};

const fallbackFaqs: FaqItem[] = [
    { id: "faq1_fallback", question: `לאילו גילאים מיועד הקעמפ? (סטטי)`, answer: `הקעמפ מיועד לבנים בגילאי ז'-ט' (בוגרי כיתות ו'-ח'). אנו שמים דגש על התאמת הפעילויות והאווירה לגילאים אלו.`, delay: "0" },
    { id: "faq2_fallback", question: `מהן שעות הפעילות בקעמפ? (סטטי)`, answer: `שעות הפעילויות הן בדרך כלל מ-09:00 בבוקר ועד 17:00 אחר הצהריים. ייתכנו ימים עם פעילויות ערב מיוחדות, עליהן תימסר הודעה מראש.`, delay: "50" },
    { id: "faq3_fallback", question: `האם יש צורך להביא אוכל? (סטטי)`, answer: `לא, הקעמפ מספק ארוחות בוקר, צהריים וערב כשרות למהדרין, וכן כיבוד קל בין הארוחות. במקרה של רגישויות מזון, יש לעדכן אותנו מראש.`, delay: "100" },
    { id: "faq4_fallback", question: `איזה ציוד יש להביא לקעמפ? (סטטי)`, answer: `רשימת ציוד מפורטת תישלח לנרשמים. באופן כללי, יש להצטייד בבגדים נוחים, כובע, בקבוק מים, קרם הגנה, ופריטים אישיים. לטיולים יש להצטייד בנעלי הליכה נוחות.`, delay: "150" },
    { id: "faq5_fallback", question: `מהי מדיניות הביטולים? (סטטי)`, answer: `מדיניות הביטולים מפורטת בתקנון ההרשמה. באופן כללי, ניתן לבטל עד תאריך מסוים ולקבל החזר חלקי או מלא, בהתאם לתנאים.`, delay: "200" },
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
    { id: 'main_summary_fallback', videoId: 'gqgfz0h0om4', title: `סרטון סיכום ראשי (סטטי)`, category: 'mainSummaryVideo' }, // Fallback main summary
];
const fallbackGalleryYears: GalleryYearData[] = [
  { yearSlug: "tashpad-fallback", yearName: `ה'תשפ"ד (סטטי)`, yearImage: "https://placehold.co/300x300.png?text=Static-2024", yearImageHint: "camp collage" },
  { yearSlug: "tashpag-fallback", yearName: `ה'תשפ"ג (סטטי)`, yearImage: "https://placehold.co/300x300.png?text=Static-2023", yearImageHint: "group photo"},
];
const fallbackGalleryDays: GalleryDayData[] = [
    { yearSlug: "tashpad-fallback", daySlug: "day1-fallback", dayName: "היום הראשון (סטטי)", thumbnail: "https://placehold.co/400x300.png?text=Static-D1-24", thumbnailHint: "camp activity"},
    { yearSlug: "tashpad-fallback", daySlug: "day2-fallback", dayName: "היום השני (סטטי)", thumbnail: "https://placehold.co/400x300.png?text=Static-D2-24", thumbnailHint: "outdoor fun"},
    { yearSlug: "tashpag-fallback", daySlug: "day1-fallback", dayName: "פתיחת הקעמפ (סטטי)", thumbnail: "https://placehold.co/400x300.png?text=Static-D1-23", thumbnailHint: "opening event"},
];

const fallbackGalleryImages: GalleryImageItem[] = [
    {yearSlug: "tashpad-fallback", daySlug: "day1-fallback", imageOrder: 1, src: "https://placehold.co/600x400.png?text=Static-Img1-24", alt: "תמונה 1 סטטית 2024", hint: "children fun"},
    {yearSlug: "tashpad-fallback", daySlug: "day1-fallback", imageOrder: 2, src: "https://placehold.co/600x400.png?text=Static-Img2-24", alt: "תמונה 2 סטטית 2024", hint: "group photo"},
    {yearSlug: "tashpag-fallback", daySlug: "day1-fallback", imageOrder: 1, src: "https://placehold.co/600x400.png?text=Static-Img1-23", alt: "תמונה 1 סטטית 2023", hint: "camp opening"},
];
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
  imageSrc?: string;
  imageAlt?: string;
  imageHint?: string;
  videoId?: string;
  // ctaButtonText?: string; // Hardcoded in component
}
export interface PrincipalMessageData {
  pageTitle?: string;
  principalName?: string;
  messageParagraph1?: string;
  messageParagraph2?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageHint?: string;
}
export interface AboutSectionContentData {
  sectionTitle?: string;
  cardTitle?: string;
  paragraph1?: string;
  paragraph2?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageHint?: string;
}
export interface FaqItem { id: string; question: string; answer: string; delay?: string; }
export interface Testimonial { id: string; quote: string; author: string;}
export interface SwiperSlideItem { id: string; imageSrc: string; imageAlt: string; imageHint?: string; captionTitle: string; captionText: string;}
export interface VideoItem { id: string; videoId: string; title: string; category: 'campSong' | 'summaryVideo' | 'mainSummaryVideo' | string; }
export interface GalleryYearData { yearSlug: string; yearName: string; yearImage: string; yearImageHint?: string; }
export interface GalleryDayData { yearSlug: string; daySlug: string; dayName: string; thumbnail: string; thumbnailHint?: string; }
export interface GalleryImageItem { yearSlug: string; daySlug: string;  imageOrder?: number; src: string; alt: string; hint?: string; }
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

// --- CSV URLs ---
const FAQ_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=837718949&single=true&output=csv";
const SWIPER_SLIDES_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=421516172&single=true&output=csv";
const SITE_CONFIG_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=0&single=true&output=csv"; // Assuming gid=0 is SiteConfig
const HERO_CONFIG_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=YOUR_HERO_CONFIG_GID_HERE&single=true&output=csv"; // !! REPLACE GID !!
const PRINCIPAL_MESSAGE_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=YOUR_PRINCIPAL_MESSAGE_GID_HERE&single=true&output=csv"; // !! REPLACE GID !!
const ABOUT_SECTION_CONTENT_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=YOUR_ABOUT_SECTION_GID_HERE&single=true&output=csv"; // !! REPLACE GID !!
const TESTIMONIALS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=YOUR_TESTIMONIALS_GID_HERE&single=true&output=csv"; // !! REPLACE GID !!
const VIDEOS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=YOUR_VIDEOS_GID_HERE&single=true&output=csv"; // !! REPLACE GID !!
const CONTACT_INFO_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=YOUR_CONTACT_INFO_GID_HERE&single=true&output=csv"; // !! REPLACE GID !!

// --- Helper to fetch and parse CSV data from a URL ---
// Expected headers is an array of strings representing the *expected* headers, in order.
// If the CSV's first row matches these headers, it's skipped. Otherwise, all rows are treated as data.
async function fetchCsvDataFromUrl(csvUrl: string, sheetNameForLog: string, expectedHeaders?: string[]): Promise<string[][] | null> {
  if (!csvUrl || csvUrl.includes("YOUR_") || csvUrl.includes("_GID_HERE")) {
    console.log(`${sheetNameForLog}: CSV URL is a placeholder or invalid. Skipping fetch for ${sheetNameForLog}.`);
    return null;
  }
  try {
    console.log(`${sheetNameForLog}: Attempting to fetch CSV from URL: ${csvUrl}`);
    const response = await fetch(csvUrl, { next: { revalidate: 3600 } });
    if (!response.ok) {
      console.error(`${sheetNameForLog}: Error fetching CSV from ${csvUrl}: ${response.status} ${response.statusText}`);
      return null;
    }
    const text = await response.text();
    console.log(`${sheetNameForLog}: Successfully fetched CSV data. Raw CSV Text length: ${text.length}`);
    
    const rows = text.split(/\r?\n/).map(row => {
      const parsedRow: string[] = [];
      let currentCell = "";
      let inQuotes = false;
      for (let i = 0; i < row.length; i++) {
        const char = row[i];
        if (char === '"') { // Basic quote handling: toggle inQuotes state
            // If it's an escaped quote (""), treat the second quote as a literal
            if (inQuotes && i + 1 < row.length && row[i+1] === '"') {
                currentCell += '"';
                i++; // Skip next quote
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
    }).filter(row => row.some(cell => cell !== ""));

    console.log(`${sheetNameForLog}: Parsed CSV Data (first 5 rows):`, rows.slice(0, 5));

    if (rows.length > 0 && expectedHeaders && expectedHeaders.length > 0) {
      const headerRow = rows[0].map(h => h.toLowerCase().trim());
      const allHeadersMatch = expectedHeaders.every((expectedHeader) => headerRow.includes(expectedHeader.toLowerCase().trim()));
      
      if (allHeadersMatch) {
        console.log(`${sheetNameForLog}: CSV Header row detected and matches expected: ${headerRow.join(',')}`);
        return rows.slice(1); // Return data rows only
      } else {
        console.log(`${sheetNameForLog}: CSV Header row does not fully match expected or is different. Expected one of: "${expectedHeaders.join(', ')}", Got: "${headerRow.join(',')}". Assuming direct data or specific parsing needed.`);
        return rows; // Return all rows, specific parsing will handle it
      }
    }
    return rows;
  } catch (error) {
    console.error(`${sheetNameForLog}: Exception fetching or parsing CSV data from ${csvUrl}:`, error);
    return null;
  }
}

// Helper to convert key-value CSV data to an object
function csvToKeyValueObject<T extends Record<string, any>>(
  parsedData: string[][] | null,
  fallbackData: T,
  sheetNameForLog: string,
  keyColumnName: string = 'key',
  valueColumnName: string = 'value'
): T {
  const result = { ...fallbackData }; // Start with fallback, override with CSV data
  if (!parsedData || parsedData.length === 0) {
    console.log(`${sheetNameForLog}: No parsed data, returning fallback.`);
    return result;
  }

  let dataStartIndex = 0;
  const columnMap: Record<string, number> = {};
  const headerRow = parsedData[0].map(h => h.toLowerCase().trim());

  const keyHeaderIndex = headerRow.indexOf(keyColumnName.toLowerCase());
  const valueHeaderIndex = headerRow.indexOf(valueColumnName.toLowerCase());

  if (keyHeaderIndex !== -1 && valueHeaderIndex !== -1) {
    columnMap[keyColumnName] = keyHeaderIndex;
    columnMap[valueColumnName] = valueHeaderIndex;
    dataStartIndex = 1;
    console.log(`${sheetNameForLog}: Key-Value CSV Header row detected. Key column: ${keyHeaderIndex}, Value column: ${valueHeaderIndex}`);
  } else {
    console.log(`${sheetNameForLog}: Key-Value CSV Header row not detected or incomplete. Assuming direct key-value pairs (col 0 = key, col 1 = value).`);
    if (headerRow.length >= 2) { // Ensure there are at least two columns for key-value
        columnMap[keyColumnName] = 0;
        columnMap[valueColumnName] = 1;
    } else {
        console.error(`${sheetNameForLog}: CSV data for key-value object doesn't have at least two columns.`);
        return result; // Return fallback if not enough columns
    }
  }

  for (let i = dataStartIndex; i < parsedData.length; i++) {
    const row = parsedData[i];
    const key = row[columnMap[keyColumnName]];
    const value = row[columnMap[valueColumnName]];
    if (key) {
      (result as Record<string, any>)[key] = value !== undefined ? value : ''; // Ensure value is not undefined
      // console.log(`${sheetNameForLog}: Processing row in Key-Value CSV: ${key} = ${value}`);
    }
  }
  console.log(`${sheetNameForLog}: Final Key-Value object (merged with fallback):`, result);
  return result;
}

// Helper to parse CSV rows to an array of objects
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
  
  const allHeadersFound = expectedHeaders.every(expectedHeader => {
    const idx = headerRow.indexOf(String(expectedHeader).toLowerCase());
    if (idx !== -1) {
      columnMap[String(expectedHeader)] = idx;
      return true;
    }
    return false;
  });

  if (allHeadersFound) {
    dataStartIndex = 1;
    console.log(`${sheetNameForLog}: CSV Header row detected and all expected headers found. Column map:`, columnMap);
  } else {
    console.log(`${sheetNameForLog}: CSV Header row not detected or some expected headers missing. Expected headers: "${expectedHeaders.join(',')}", Found in CSV: "${headerRow.join(',')}". Assuming direct column order for mapping.`);
    // Fallback to positional mapping if headers don't match
    expectedHeaders.forEach((header, index) => {
      if (headerRow.length > index) {
        columnMap[String(header)] = index;
      }
    });
  }
  
  const objects: T[] = [];
  for (let i = dataStartIndex; i < parsedData.length; i++) {
    const row = parsedData[i];
    if (row.every(cell => cell === "")) continue; // Skip completely empty rows

    const obj: Partial<T> = {};
    let hasRequiredData = true;
    for (const header of expectedHeaders) {
      const colIndex = columnMap[String(header)];
      if (colIndex !== undefined && colIndex < row.length) {
        obj[header] = row[colIndex] as any;
      } else {
        // If a required header is missing in the map (or row is too short), we might use undefined or skip
        console.warn(`${sheetNameForLog}: Missing data for header '${String(header)}' in row ${i+1}. Row: ${row.join(',')}`);
        // For now, let's allow undefined for non-critical optional fields.
        // If a field is absolutely required, this logic might need adjustment or stricter validation.
        obj[header] = undefined; 
      }
    }
    // Ensure critical fields (like 'id' or 'src') have values before pushing
    // This depends on which fields are considered critical for each type.
    // For example, for FAQ, 'question' and 'answer' might be critical.
    // For SwiperSlides, 'imageSrc' might be critical.
    if (Object.keys(obj).length > 0) { // Simple check if object is not empty
        objects.push(obj as T);
    }
  }
  console.log(`${sheetNameForLog}: Processed ${objects.length} items from CSV.`);
  return objects.length > 0 ? objects : fallbackData;
}


// --- Data Fetching Functions ---

export async function getSiteConfig(): Promise<SiteConfig> {
  const parsedData = await fetchCsvDataFromUrl(SITE_CONFIG_CSV_URL, "SiteConfig", ['key', 'value']);
  if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackSiteConfig, "SiteConfig");
  }
  console.log("getSiteConfig: Using hardcoded fallbackSiteConfig data only due to CSV fetch/parse failure.");
  return fallbackSiteConfig;
}

export async function getHeroConfigData(): Promise<HeroConfigData> {
  const parsedData = await fetchCsvDataFromUrl(HERO_CONFIG_CSV_URL, "HeroConfig", ['key', 'value']);
  if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackHeroConfigData, "HeroConfig");
  }
  console.log("getHeroConfigData: Using hardcoded fallbackHeroConfigData.");
  return fallbackHeroConfigData;
}

export async function getPrincipalMessageData(): Promise<PrincipalMessageData> {
  const parsedData = await fetchCsvDataFromUrl(PRINCIPAL_MESSAGE_CSV_URL, "PrincipalMessage", ['key', 'value']);
   if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackPrincipalMessageData, "PrincipalMessage");
  }
  console.log("getPrincipalMessageData: Using hardcoded fallbackPrincipalMessageData.");
  return fallbackPrincipalMessageData;
}

export async function getAboutSectionContentData(): Promise<AboutSectionContentData> {
  const parsedData = await fetchCsvDataFromUrl(ABOUT_SECTION_CONTENT_CSV_URL, "AboutSectionContent", ['key', 'value']);
  if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackAboutSectionContentData, "AboutSectionContent");
  }
  console.log("getAboutSectionContentData: Using hardcoded fallbackAboutSectionContentData.");
  return fallbackAboutSectionContentData;
}

export async function getContactInfoData(): Promise<ContactInfoData> {
  const parsedData = await fetchCsvDataFromUrl(CONTACT_INFO_CSV_URL, "ContactInfo", ['key', 'value']);
   if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackContactInfoData, "ContactInfo");
  }
  console.log("getContactInfoData: Using hardcoded fallbackContactInfoData.");
  return fallbackContactInfoData;
}


export async function getFaqData(): Promise<FaqItem[]> {
  const parsedData = await fetchCsvDataFromUrl(FAQ_CSV_URL, "FAQ", ['id', 'question', 'answer']);
  const faqs = csvToObjectsArray(parsedData, fallbackFaqs, "FAQ", ['id', 'question', 'answer']);
  return faqs.map((faq, index) => ({ ...faq, delay: String(index * 50) }));
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const parsedData = await fetchCsvDataFromUrl(TESTIMONIALS_CSV_URL, "Testimonials", ['id', 'quote', 'author']);
  return csvToObjectsArray(parsedData, fallbackTestimonials, "Testimonials", ['id', 'quote', 'author']);
}

export async function getSwiperSlides(): Promise<SwiperSlideItem[]> {
 const parsedData = await fetchCsvDataFromUrl(SWIPER_SLIDES_CSV_URL, "SwiperSlides", ['id', 'imageSrc', 'imageAlt', 'imageHint', 'captionTitle', 'captionText']);
 return csvToObjectsArray(parsedData, fallbackSwiperSlides, "SwiperSlides", ['id', 'imageSrc', 'imageAlt', 'imageHint', 'captionTitle', 'captionText']);
}

export async function getVideos(): Promise<VideoItem[]> {
  const parsedData = await fetchCsvDataFromUrl(VIDEOS_CSV_URL, "Videos", ['id', 'videoId', 'title', 'category']);
  return csvToObjectsArray(parsedData, fallbackVideos, "Videos", ['id', 'videoId', 'title', 'category']);
}

export async function getGalleryYears(): Promise<GalleryYearData[]> {
  // For now, gallery data remains static as per current setup
  console.log("getGalleryYears: Returning hardcoded fallbackGalleryYears.");
  return fallbackGalleryYears;
}

export async function getGalleryDays(): Promise<GalleryDayData[]> {
  // For now, gallery data remains static
  console.log("getGalleryDays: Returning hardcoded fallbackGalleryDays.");
  return fallbackGalleryDays;
}

export async function getGalleryImages(): Promise<GalleryImageItem[]> {
  // For now, gallery data remains static
  console.log("getGalleryImages: Returning hardcoded fallbackGalleryImages.");
  return fallbackGalleryImages;
}

// Removed redundant parseRowToTypedObject as csvToObjectsArray handles it now.
