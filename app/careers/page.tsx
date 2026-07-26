import React from "react";
import { jobOpeningsData } from "@/data/hospitalData";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Careers | Faris Al-Jazeera Medical Complex" };

export default function CareersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold font-heading">Careers at Faris Al-Jazeera</h1>
      <div className="space-y-4">
        {jobOpeningsData.map((job) => (
          <Card key={job.id} className="p-6 space-y-2">
            <h3 className="text-lg font-bold">{job.title}</h3>
            <p className="text-xs text-slate-600">{job.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}