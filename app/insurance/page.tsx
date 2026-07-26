import React from "react";
import { insuranceProviders } from "@/data/hospitalData";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Insurance | Faris Al-Jazeera Medical Complex" };

export default function InsurancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold font-heading">Accepted Insurance Providers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insuranceProviders.map((ins) => (
          <Card key={ins.id} className="p-6 space-y-2">
            <h3 className="text-lg font-bold">{ins.name}</h3>
            <p className="text-xs text-slate-600">{ins.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}