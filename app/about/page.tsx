"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold font-heading text-slate-900">{t("aboutTitle")}</h1>
        <p className="text-slate-600 text-base">{t("aboutSubtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">{t("ourMission")}</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{t("missionDesc")}</p>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center text-secondary-700">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">{t("ourVision")}</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{t("visionDesc")}</p>
        </Card>
      </div>
    </div>
  );
}
