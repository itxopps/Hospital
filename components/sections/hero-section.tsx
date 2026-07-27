"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { hospitalDetails } from "@/data/hospitalData";
import { useLanguage } from "@/context/language-context";
import { Phone, Calendar, Siren, ShieldCheck, Clock } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-slate-950 text-white overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-36">
      
      {/* Background Image with High Contrast & Vibrancy */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1600&q=80"
          alt="Hospital Facility"
          fill
          priority
          className="object-cover object-center contrast-125 saturate-150 brightness-110 opacity-80 scale-105"
        />
        
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/90" />
      </div>

      {/* Hero Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl space-y-6 lg:space-y-8 text-center lg:text-left rtl:lg:text-right w-full">
          
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-slate-900/90 border border-slate-700/80 rounded-full px-3.5 py-1.5 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-semibold text-slate-200">
              {t("topBadge")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold font-heading leading-tight tracking-tight drop-shadow-lg">
            {t("heroTitle1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-400">
              {t("heroTitle2")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-md">
            {t("heroSubtitle")}
          </p>

          {/* BIGGER Action Buttons Container */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start rtl:lg:justify-start gap-4 w-full pt-4">
            
            {/* Book Appointment Button */}
            <Link href="/appointment" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-14 sm:h-16 px-8 gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-2xl shadow-emerald-950/80 transition-all duration-200 hover:scale-[1.02]"
              >
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"/>
                <span>{t("bookAppointment")}</span>
              </Button>
            </Link>

            {/* Call Us Button */}
            <a href={`tel:${hospitalDetails.phone}`} className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto h-14 sm:h-16 px-8 gap-3 border-2 border-slate-600 bg-slate-900/90 text-slate-100 hover:bg-slate-800 font-extrabold text-base sm:text-lg rounded-2xl backdrop-blur-md transition-all duration-200 hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-emerald-400"/>
                <span>{t("callUs")} ({hospitalDetails.phone})</span>
              </Button>
            </a>

            {/* 24/7 Emergency Button */}
            <a href={`tel:${hospitalDetails.emergencyPhone}`} className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="danger" 
                className="w-full sm:w-auto h-14 sm:h-16 px-8 gap-3 text-base sm:text-lg font-extrabold bg-red-600 hover:bg-red-700 text-white rounded-2xl backdrop-blur-md shadow-2xl shadow-red-950/80 transition-all duration-200 hover:scale-[1.02]"
              >
                <Siren className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 animate-bounce"/>
                <span>{t("urgentTrauma")}</span>
              </Button>
            </a>

          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0"/>
              <span className="text-[11px] sm:text-xs text-slate-200 font-medium">{t("licensedConsultants")}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Clock className="w-4 h-4 text-teal-400 flex-shrink-0"/>
              <span className="text-[11px] sm:text-xs text-slate-200 font-medium">{t("urgentCare247")}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
