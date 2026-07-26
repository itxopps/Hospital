import React from "react";
import Link from "next/link";
import { hospitalDetails } from "@/data/hospitalData";
import { PlusCircle, MapPin, Phone, Mail, Clock, ChevronRight, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-secondary-500 flex items-center justify-center text-white">
                <PlusCircle className="w-6 h-6"/>
              </div>
              <span className="font-heading font-extrabold text-xl text-white">FARIS AL-JAZEERA</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Faris Al-Jazeera Medical Complex is Riyadh&apos;s trusted multi-specialty healthcare provider in Dhahrat Laban.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-heading font-bold text-base border-b border-slate-800 pb-2">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {["About Us", "Services", "Departments", "Doctors", "Insurance", "Appointment"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, "")}`} className="flex items-center space-x-1 text-slate-400 hover:text-white">
                    <ChevronRight className="w-3.5 h-3.5 text-primary-400"/>
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-heading font-bold text-base border-b border-slate-800 pb-2">Reach Us</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"/>
                <span>{hospitalDetails.address}, {hospitalDetails.city}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0"/>
                <span>{hospitalDetails.phone}</span>
              </li>
            </ul>
            <a href={hospitalDetails.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-xs text-secondary hover:underline">
              <span>View Google Maps Location</span>
              <ExternalLink className="w-3.5 h-3.5"/>
            </a>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Faris Al-Jazeera Medical Complex. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}