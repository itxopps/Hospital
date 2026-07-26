import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/types/hospital";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="group flex flex-col justify-between h-full border border-slate-100">
      <div>
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-6 space-y-3">
          <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
          <p className="text-xs text-slate-600 line-clamp-2">{service.shortDescription}</p>
        </CardContent>
      </div>

      <div className="p-6 pt-0">
        <Link href={`/appointment?service=${service.id}`}>
          <Button variant="outline" size="sm" className="w-full justify-between">
            <span>Request Service</span>
            <ArrowRight className="w-3.5 h-3.5"/>
          </Button>
        </Link>
      </div>
    </Card>
  );
}