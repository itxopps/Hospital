"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { hospitalDetails } from "@/data/hospitalData";
import { MapSection } from "@/components/sections/map-section";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-4xl font-extrabold font-heading text-slate-900">{t("contactPageTitle")}</h1>
          <p className="text-slate-600 text-sm">{t("contactPageSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 flex flex-col items-center text-center space-y-3">
            <MapPin className="w-8 h-8 text-secondary" />
            <h3 className="font-bold text-slate-900 text-sm">{t("addressLabel")}</h3>
            <p className="text-xs text-slate-600">{hospitalDetails.address}, {hospitalDetails.city}</p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center space-y-3">
            <Phone className="w-8 h-8 text-secondary" />
            <h3 className="font-bold text-slate-900 text-sm">{t("phoneLabel")}</h3>
            <p className="text-xs text-slate-600">{hospitalDetails.phone}</p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center space-y-3">
            <Mail className="w-8 h-8 text-secondary" />
            <h3 className="font-bold text-slate-900 text-sm">{t("emailLabel")}</h3>
            <p className="text-xs text-slate-600">{hospitalDetails.email}</p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center space-y-3">
            <Clock className="w-8 h-8 text-secondary" />
            <h3 className="font-bold text-slate-900 text-sm">{t("workingHoursLabel")}</h3>
            <p className="text-xs text-slate-600">{hospitalDetails.workingHours}</p>
          </Card>
        </div>
      </div>

      <MapSection />
    </div>
  );
}
