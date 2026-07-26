import React from "react";
import { servicesData } from "@/data/hospitalData";
import { ServiceCard } from "@/components/sections/service-card";

export const metadata = { title: "Services | Faris Al-Jazeera Medical Complex" };

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold font-heading">Our Healthcare Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((serv) => (
          <ServiceCard key={serv.id} service={serv} />
        ))}
      </div>
    </div>
  );
}