import React from "react";
import Image from "next/image";
import { galleryItems } from "@/data/hospitalData";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Gallery | Faris Al-Jazeera Medical Complex" };

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold font-heading">Hospital Facility Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image src={item.imageUrl} alt={item.title} fill className="object-cover"/>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold">{item.title}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}