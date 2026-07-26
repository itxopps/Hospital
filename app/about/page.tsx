import React from "react";
import Image from "next/image";

export const metadata = { title: "About Us | Faris Al-Jazeera Medical Complex" };

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold font-heading">About Faris Al-Jazeera Medical Complex</h1>
      <p className="text-slate-600 max-w-3xl leading-relaxed">
        Located on Najran Street in Dhahrat Laban, Faris Al-Jazeera Medical Complex delivers accessible and high-quality 24/7 emergency and outpatient healthcare across Riyadh.
      </p>
      <div className="relative aspect-video rounded-3xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80"
          alt="Hospital Facility"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}