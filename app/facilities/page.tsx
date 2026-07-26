import React from "react";
import { facilitiesData } from "@/data/hospitalData";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Facilities | Faris Al-Jazeera Medical Complex" };

export default function FacilitiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold font-heading">Our Facilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {facilitiesData.map((fac) => (
          <Card key={fac.id} className="p-6 space-y-3">
            <h3 className="text-xl font-bold">{fac.title}</h3>
            <p className="text-xs text-slate-600">{fac.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}