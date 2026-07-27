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
    <section className="relative w-full bg-slate-900 text-white overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-36">
      
      {/* Background Image with Minimal Opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1600&q=80"
          alt="Hospital Facility"
          fill
          priority
          className="object-cover object-center opacity-35 scale-105"
        />
        {/* Gradient overlays to keep text sharp and easy to read */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/70 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
      </div>

      {/* Hero Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl space-y-6 lg:space-y-8 text-center lg:text-left rtl:lg:text-right w-full">
          
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-slate-800/80 border border-slate-700/80 rounded-full px-3.5 py-1.5 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-semibold text-slate-200">
              {t("topBadge")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold font-heading leading-tight tracking-tight">
            {t("heroTitle1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-400">
              {t("heroTitle2")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            {t("heroSubtitle")}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start rtl:lg:justify-start gap-3 sm:gap-4 w-full pt-2">
            <Link href="/appointment" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-950/40">
                <Calendar className="w-4 h-4"/>
                <span>{t("bookAppointment")}</span>
              </Button>
            </Link>

            <a href={`tel:${hospitalDetails.phone}`} className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800 backdrop-blur-md text-sm">
                <Phone className="w-4 h-4"/>
                <span>{t("callUs")} ({hospitalDetails.phone})</span>
              </Button>
            </a>

            <a href={`tel:${hospitalDetails.emergencyPhone}`} className="w-full sm:w-auto">
              <Button size="lg" variant="danger" className="w-full sm:w-auto gap-2 text-sm bg-red-600 hover:bg-red-700 text-white font-bold backdrop-blur-md">
                <Siren className="w-4 h-4 animate-bounce"/>
                <span>{t("urgentTrauma")}</span>
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0"/>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium">{t("licensedConsultants")}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Clock className="w-4 h-4 text-teal-400 flex-shrink-0"/>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium">{t("urgentCare247")}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
