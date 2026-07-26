"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/types/hospital";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { language, t } = useLanguage();
  const isAr = language === "ar";

  const displayTitle = isAr && service.arabicTitle ? service.arabicTitle : service.title;
  const displayDesc = isAr && service.arabicShortDescription ? service.arabicShortDescription : service.shortDescription;

  return (
    <Card className="group flex flex-col justify-between h-full border border-slate-100">
      <div>
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <Image
            src={service.image}
            alt={displayTitle}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-6 space-y-3">
          <h3 className="text-lg font-bold text-slate-900">{displayTitle}</h3>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{displayDesc}</p>
        </CardContent>
      </div>

      <div className="p-6 pt-0">
        <Link href={`/appointment?service=${service.id}`}>
          <Button variant="outline" size="sm" className="w-full justify-between">
            <span>{t("requestTreatment")}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
