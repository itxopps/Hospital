"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-xs font-bold text-slate-800 transition-all shadow-sm focus:outline-none"
      aria-label="Switch Language"
    >
      <Globe className="w-4 h-4 text-primary-700" />
      <span>{language === "en" ? "العربية" : "English"}</span>
    </button>
  );
}