"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar";
export type Direction = "ltr" | "rtl";

interface LanguageContextType {
  language: Language;
  direction: Direction;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    services: "Services",
    departments: "Departments",
    doctors: "Doctors",
    facilities: "Facilities",
    insurance: "Insurance",
    gallery: "Gallery",
    blog: "Blog",
    contact: "Contact",
    bookAppointment: "Book Appointment",
    emergencyCall: "24/7 Emergency",
    reception: "Reception",

    // Hero Section
    topBadge: "Leading Healthcare in Dhahrat Laban, Riyadh",
    heroTitle1: "Your Health & Well-being,",
    heroTitle2: "Our Lifelong Commitment.",
    heroSubtitle: "Welcome to Faris Al-Jazeera Medical Complex. Providing state-of-the-art clinical expertise, 24/7 urgent trauma care, and personalized medical treatments.",
    callUs: "Call Us",
    urgentTrauma: "24/7 Emergency",
    licensedConsultants: "Licensed Consultants",
    urgentCare247: "24/7 Urgent Care",

    // Homepage Section Titles
    ourDepartmentsTitle: "Our Specialized Clinical Departments",
    ourServicesTitle: "Comprehensive Healthcare Services",
    ourServicesSubtitle: "From preventive diagnostics to complex oral and cosmetic procedures.",
    ourDoctorsTitle: "Meet Our Consultants & Physicians",
    
    // Cards & Buttons
    exploreDepartment: "Explore Department",
    requestTreatment: "Request Treatment",
    bookConsultation: "Book Consultation",
    yearsExp: "Yrs Exp",

    // Emergency Banner
    urgentBannerTitle: "Need Immediate Medical Attention?",
    urgentBannerDesc: "Our 24/7 Emergency Triage Unit is fully staffed with critical care physicians and advanced equipment.",
    callER: "Call Emergency",
    getDirections: "Get ER Directions",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    departments: "الأقسام",
    doctors: "الأطباء",
    facilities: "المرافق",
    insurance: "التأمين",
    gallery: "معرض الصور",
    blog: "المدونة",
    contact: "اتصل بنا",
    bookAppointment: "حجز موعد",
    emergencyCall: "الطوارئ 24/7",
    reception: "الاستقبال",

    // Hero Section
    topBadge: "الرعاية الطبية الرائدة في ظهرة لبن، الرياض",
    heroTitle1: "صحتك وعافيتك..",
    heroTitle2: "التزامنا الدائم مدى الحياة.",
    heroSubtitle: "أهلاً بكم في مجمع فارس الجزيرة الطبي. نقدم أفضل الخبرات الطبية، ورعاية الطوارئ الحادة على مدار 24 ساعة، والعلاجات المخصصة لجميع أفراد الأسرة.",
    callUs: "اتصل بنا",
    urgentTrauma: "طوارئ 24/7",
    licensedConsultants: "استشاريون معتمدون",
    urgentCare247: "رعاية عاجلة 24/7",

    // Homepage Section Titles
    ourDepartmentsTitle: "أقسامنا الطبية المتخصصة",
    ourServicesTitle: "خدماتنا الطبية الشاملة",
    ourServicesSubtitle: "من الفحوصات التشخيصية الوقائية إلى العلاجات التجميلية وطب الأسنان المتقدم.",
    ourDoctorsTitle: "نخبة أطبائنا واستشاريينا",

    // Cards & Buttons
    exploreDepartment: "استكشف القسم",
    requestTreatment: "طلب علاج",
    bookConsultation: "حجز استشارة",
    yearsExp: "سنوات خبرة",

    // Emergency Banner
    urgentBannerTitle: "هل تحتاج إلى عناية طبية عاجلة؟",
    urgentBannerDesc: "قسم فرز الطوارئ لدينا يعمل على مدار الساعة مع طاقم من أطباء العناية الحرجة وأحدث الأجهزة الطبية.",
    callER: "الاتصال بالطوارئ",
    getDirections: "اتجاهات قسم الطوارئ",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [direction, setDirection] = useState<Direction>("ltr");

  useEffect(() => {
    const savedLang = localStorage.getItem("faris_lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      setLanguageState(savedLang);
      setDirection(savedLang === "ar" ? "rtl" : "ltr");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    const dir = lang === "ar" ? "rtl" : "ltr";
    setDirection(dir);
    localStorage.setItem("faris_lang", lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "ar" : "en";
    setLanguage(nextLang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = direction;
    }
  }, [language, direction]);

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, setLanguage, t }}>
      <div dir={direction} className={language === "ar" ? "font-sans text-right" : "font-sans text-left"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}