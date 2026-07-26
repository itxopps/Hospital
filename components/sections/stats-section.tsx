"use client";

import React from "react";
import { hospitalStats } from "@/data/hospitalData";
import { useLanguage } from "@/context/language-context";
import { Users, UserCheck, Building2, Award, HeartHandshake } from "lucide-react";

const iconMap = {
  Users,
  UserCheck,
  Building2,
  Award,
  HeartHandshake,
};

export function StatsSection() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section className="bg-primary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {hospitalStats.map((stat, idx) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap] || Users;
            return (
              <div key={idx} className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/10">
                <Icon className="w-8 h-8 text-secondary mx-auto" />
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">{stat.value}</div>
                <div className="text-xs text-slate-300 font-medium">
                  {isAr && stat.arabicLabel ? stat.arabicLabel : stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
