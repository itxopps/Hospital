"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { doctorsData } from "@/data/hospitalData";
import { DoctorCard } from "@/components/sections/doctor-card";

export default function DoctorsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-4xl font-extrabold font-heading text-slate-900">{t("doctorsPageTitle")}</h1>
        <p className="text-slate-600 text-sm">{t("doctorsPageSubtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctorsData.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}
