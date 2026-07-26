import React from "react";
import { hospitalDetails } from "@/data/hospitalData";
import { MapSection } from "@/components/sections/map-section";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Contact Us | Faris Al-Jazeera Medical Complex" };

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
        <h1 className="text-4xl font-bold font-heading">Contact Us</h1>
        <Card className="p-8 space-y-4">
          <p className="text-sm font-semibold">Phone: {hospitalDetails.phone}</p>
          <p className="text-sm font-semibold">Address: {hospitalDetails.address}, {hospitalDetails.city}</p>
          <p className="text-sm font-semibold">Email: {hospitalDetails.email}</p>
        </Card>
      </div>
      <MapSection />
    </div>
  );
}