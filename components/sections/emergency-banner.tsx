"use client";

import React from "react";
import { hospitalDetails } from "@/data/hospitalData";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { Siren, PhoneCall, MapPin } from "lucide-react";

export function EmergencyBanner() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-5 rtl:space-x-reverse text-center lg:text-left rtl:lg:text-right">
          <div className="p-4 bg-white/15 rounded-2xl hidden sm:block">
            <Siren className="w-10 h-10 text-white animate-pulse"/>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">{t("urgentBannerTitle")}</h2>
            <p className="text-sm text-red-100">{t("urgentBannerDesc")}</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <a href={`tel:${hospitalDetails.emergencyPhone}`} className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-white text-red-700 hover:bg-slate-100 font-extrabold gap-2">
              <PhoneCall className="w-5 h-5 text-red-600"/>
              <span>{t("callER")}: {hospitalDetails.emergencyPhone}</span>
            </Button>
          </a>
          <a href={hospitalDetails.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 gap-2">
              <MapPin className="w-5 h-5"/>
              <span>{t("getDirections")}</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}