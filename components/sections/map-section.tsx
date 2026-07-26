import React from "react";
import { hospitalDetails } from "@/data/hospitalData";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

export function MapSection() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900">Hospital Location</h2>
          <p className="text-sm text-slate-600">{hospitalDetails.address}, {hospitalDetails.city}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 rounded-3xl overflow-hidden shadow-card border border-slate-200 min-h-[400px]">
            <iframe
              title="Faris Al-Jazeera Location Map"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.5976269151555!2d${hospitalDetails.longitude}!3d${hospitalDetails.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1f247a8b3945%3A0x5d1c9a1c4017a0cc!2sFaris%20Al-Jazeera%20Medical%20Complex!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>

          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-slate-200 shadow-card flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Visiting Details</h3>
              <p className="text-sm text-slate-600">{hospitalDetails.address}, {hospitalDetails.district}, {hospitalDetails.city}</p>
              <p className="text-sm text-slate-600">Hours: {hospitalDetails.workingHours}</p>
            </div>
            <a href={hospitalDetails.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="pt-6">
              <Button className="w-full gap-2">
                <Navigation className="w-4 h-4"/>
                <span>Get Directions</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}