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
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-primary-950 text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left rtl:lg:text-right">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-slate-800 border border-slate-700 rounded-full px-4 py-1.5">
              <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-200">
                {t("topBadge")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-tight">
              {t("heroTitle1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-400">
                {t("heroTitle2")}
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
              {t("heroSubtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start rtl:lg:justify-start gap-4">
              <Link href="/appointment" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-secondary-500 hover:bg-secondary-600">
                  <Calendar className="w-5 h-5"/>
                  <span>{t("bookAppointment")}</span>
                </Button>
              </Link>
              <a href={`tel:${hospitalDetails.phone}`} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-slate-600 text-slate-200 hover:bg-slate-800">
                  <Phone className="w-5 h-5"/>
                  <span>{t("callUs")} ({hospitalDetails.phone})</span>
                </Button>
              </a>
              <a href={`tel:${hospitalDetails.emergencyPhone}`} className="w-full sm:w-auto">
                <Button size="lg" variant="danger" className="w-full sm:w-auto gap-2">
                  <Siren className="w-5 h-5 animate-bounce"/>
                  <span>{t("urgentTrauma")}</span>
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0"/>
                <span className="text-xs text-slate-300">{t("licensedConsultants")}</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0"/>
                <span className="text-xs text-slate-300">{t("urgentCare247")}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80"
                alt="Hospital Facility"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}