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
  const isAr = language === "ar";

  const displayName = isAr ? doctor.arabicName : doctor.name;
  const displayTitle = isAr && doctor.arabicTitle ? doctor.arabicTitle : doctor.title;
  const displayDept = isAr && doctor.arabicDepartmentName ? doctor.arabicDepartmentName : doctor.departmentName;
  const displayBio = isAr && doctor.arabicBio ? doctor.arabicBio : doctor.bio;

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
            <Badge variant="primary" className="bg-white/90 text-slate-800 font-bold">
              {doctor.experienceYears}+ {t("yearsExp")}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6 space-y-3">
          <span className="text-xs font-semibold text-secondary uppercase">{displayDept}</span>
          <h3 className="text-xl font-bold text-slate-900">{displayName}</h3>
          <p className="text-xs text-primary-800 font-medium">{displayTitle}</p>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{displayBio}</p>
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
