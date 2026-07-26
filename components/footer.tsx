"use client";

import React from "react";
import Link from "next/link";
import { hospitalDetails } from "@/data/hospitalData";
import { useLanguage } from "@/context/language-context";
import { Phone, Mail, MapPin, Clock, PlusCircle } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-primary-800 to-secondary-500 flex items-center justify-center text-white shadow-md">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg text-white tracking-tight leading-none">
                FARIS AL-JAZEERA
              </span>
              <span className="text-xs text-primary-300 font-medium tracking-wide">
                Medical Complex • مجمع فارِس الطبي
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {t("footerTagline")}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{t("quickLinks")}</h3>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="/about" className="hover:text-white transition-colors">{t("about")}</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">{t("services")}</Link></li>
            <li><Link href="/departments" className="hover:text-white transition-colors">{t("departments")}</Link></li>
            <li><Link href="/doctors" className="hover:text-white transition-colors">{t("doctors")}</Link></li>
            <li><Link href="/insurance" className="hover:text-white transition-colors">{t("insurance")}</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">{t("contact")}</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{t("contact")}</h3>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <span>{hospitalDetails.address}, {hospitalDetails.city}</span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <Phone className="w-4 h-4 text-secondary shrink-0" />
              <a href={`tel:${hospitalDetails.phone}`} className="hover:text-white">{hospitalDetails.phone}</a>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <Mail className="w-4 h-4 text-secondary shrink-0" />
              <a href={`mailto:${hospitalDetails.email}`} className="hover:text-white">{hospitalDetails.email}</a>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <Clock className="w-4 h-4 text-secondary shrink-0" />
              <span>{hospitalDetails.workingHours}</span>
            </li>
          </ul>
        </div>

        {/* ER Highlight */}
        <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
          <span className="text-xs font-bold text-red-400 uppercase tracking-wider">{t("emergencyCall")}</span>
          <p className="text-xs text-slate-300">
            {t("urgentBannerDesc")}
          </p>
          <a
            href={`tel:${hospitalDetails.emergencyPhone}`}
            className="inline-block w-full text-center py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs transition-colors shadow-sm"
          >
            {hospitalDetails.emergencyPhone}
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {hospitalDetails.name}. {t("allRightsReserved")}
      </div>
    </footer>
  );
}
