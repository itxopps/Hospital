"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Doctor } from "@/types/hospital";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { Calendar } from "lucide-react";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const { language, t } = useLanguage();
  const displayName = language === "ar" ? doctor.arabicName : doctor.name;

  return (
    <Card className="group flex flex-col justify-between h-full">
      <div>
        <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
          <Image
            src={doctor.image}
            alt={displayName}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
            <Badge variant="primary" className="bg-white/90 text-slate-800">
              {doctor.experienceYears}+ {t("yearsExp")}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6 space-y-3">
          <span className="text-xs font-semibold text-secondary uppercase">{doctor.departmentName}</span>
          <h3 className="text-xl font-bold text-slate-900">{displayName}</h3>
          <p className="text-xs text-primary-800 font-medium">{doctor.title}</p>
          <p className="text-xs text-slate-600 line-clamp-2">{doctor.bio}</p>
        </CardContent>
      </div>

      <div className="p-6 pt-0">
        <Link href={`/appointment?doctor=${doctor.id}`}>
          <Button size="md" className="w-full gap-2 text-xs">
            <Calendar className="w-4 h-4"/>
            <span>{t("bookConsultation")}</span>
          </Button>
        </Link>
      </div>
    </Card>
  );
}