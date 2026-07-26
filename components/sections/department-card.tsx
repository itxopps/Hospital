import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Department } from "@/types/hospital";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

interface DepartmentCardProps {
  department: Department;
}

export function DepartmentCard({ department }: DepartmentCardProps) {
  return (
    <Card className="group flex flex-col justify-between h-full">
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <Image
            src={department.image}
            alt={department.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-6 space-y-3">
          <h3 className="text-xl font-bold text-slate-900">{department.name}</h3>
          <p className="text-xs text-slate-600 line-clamp-3">{department.shortDescription}</p>
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <Clock className="w-4 h-4 text-secondary"/>
            <span>{department.operatingHours}</span>
          </div>
        </CardContent>
      </div>

      <div className="p-6 pt-0">
        <Link href={`/departments#${department.id}`}>
          <Button variant="ghost" className="w-full justify-between text-xs text-primary-700">
            <span>Explore Department</span>
            <ArrowRight className="w-4 h-4"/>
          </Button>
        </Link>
      </div>
    </Card>
  );
}