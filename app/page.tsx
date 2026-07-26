"use client";

import React from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { EmergencyBanner } from "@/components/sections/emergency-banner";
import { ServiceCard } from "@/components/sections/service-card";
import { DepartmentCard } from "@/components/sections/department-card";
import { DoctorCard } from "@/components/sections/doctor-card";
import { MapSection } from "@/components/sections/map-section";
import { useLanguage } from "@/context/language-context";
import { servicesData, departmentsData, doctorsData } from "@/data/hospitalData";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-16">
      <HeroSection />
      <StatsSection />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-3xl font-bold font-heading text-slate-900">{t("ourDepartmentsTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departmentsData.slice(0, 3).map((dept) => (
            <DepartmentCard key={dept.id} department={dept} />
          ))}
        </div>
      </section>

      <EmergencyBanner />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h2 className="text-3xl font-bold font-heading text-slate-900">{t("ourServicesTitle")}</h2>
          <p className="text-sm text-slate-600 mt-1">{t("ourServicesSubtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.slice(0, 3).map((serv) => (
            <ServiceCard key={serv.id} service={serv} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-3xl font-bold font-heading text-slate-900">{t("ourDoctorsTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctorsData.slice(0, 3).map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      </section>

      <MapSection />
    </div>
  );
}