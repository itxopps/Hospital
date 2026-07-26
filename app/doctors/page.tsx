import React from "react";
import { doctorsData } from "@/data/hospitalData";
import { DoctorCard } from "@/components/sections/doctor-card";

export const metadata = { title: "Doctors | Faris Al-Jazeera Medical Complex" };

export default function DoctorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold font-heading">Our Specialist Physicians</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctorsData.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}