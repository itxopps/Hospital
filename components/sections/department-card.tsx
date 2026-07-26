"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Department } from "@/types/hospital";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { ArrowRight, Clock } from "lucide-react";

interface DepartmentCardProps {
  department: Department;
}

export function DepartmentCard({ department }: DepartmentCardProps) {
  const { language, t } = useLanguage();
  const isAr = language === "ar";

  const displayName = isAr ? department.arabicName : department.name;
  const displayDesc = isAr && department.arabicShortDescription ? department.arabicShortDescription : department.shortDescription;
  const displayHours = isAr && department.arabicOperatingHours ? department.arabicOperatingHours : department.operatingHours;

  return (
    <Card className="group flex flex-col justify-between h-full">
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <Image
            src={department.image}
            alt={displayName}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-6 space-y-3">
          <span className="text-xs font-semibold text-secondary uppercase">{displayName}</span>
          <h3 className="text-xl font-bold text-slate-900">{displayName}</h3>
          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{displayDesc}</p>
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-slate-500 pt-2">
            <Clock className="w-4 h-4 text-secondary shrink-0" />
            <span>{displayHours}</span>
          </div>
        </CardContent>
      </div>

      <div className="p-6 pt-0">
        <Link href={`/departments#${department.id}`}>
          <Button variant="ghost" className="w-full justify-between text-xs text-primary-700">
            <span>{t("exploreDepartment")}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
