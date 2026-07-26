// components/navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { hospitalDetails } from "@/data/hospitalData";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/context/language-context";
import { Phone, Clock, MapPin, Menu, X, PlusCircle, Calendar } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("services"), href: "/services" },
    { name: t("departments"), href: "/departments" },
    { name: t("doctors"), href: "/doctors" },
    { name: t("facilities"), href: "/facilities" },
    { name: t("insurance"), href: "/insurance" },
    { name: t("gallery"), href: "/gallery" },
    { name: t("blog"), href: "/blog" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar (Desktop Only) */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              <span>{hospitalDetails.address}, {hospitalDetails.city}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Clock className="w-3.5 h-3.5 text-secondary" />
              <span>{hospitalDetails.workingHours}</span>
            </div>
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href={`tel:${hospitalDetails.phone}`} className="flex items-center space-x-2 rtl:space-x-reverse hover:text-white">
              <Phone className="w-3.5 h-3.5 text-primary-300" />
              <span>{t("reception")}: {hospitalDetails.phone}</span>
            </a>
            <a
              href={`tel:${hospitalDetails.emergencyPhone}`}
              className="flex items-center space-x-1.5 font-bold text-red-400 bg-red-950/60 px-2.5 py-0.5 rounded-full border border-red-800/50"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>24/7 Emergency: {hospitalDetails.emergencyPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`w-full transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-white border-b border-slate-100 py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-primary-800 to-secondary-500 flex items-center justify-center text-white shadow-md">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg xl:text-xl text-slate-900 tracking-tight leading-none">
                FARIS AL-JAZEERA
              </span>
              <span className="text-[10px] xl:text-xs text-primary-700 font-medium tracking-wide">
                Medical Complex • مجمع فارِس الطبي
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 xl:px-3 py-2 rounded-lg text-xs xl:text-sm transition-all duration-200 font-medium whitespace-nowrap ${
                  pathname === link.href ? "bg-primary-50 text-primary-700 font-semibold" : "text-slate-600 hover:bg-slate-50 hover:text-primary-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Action Bar: Language Switcher & Booking */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 rtl:space-x-reverse shrink-0">
            <LanguageSwitcher />
            <Link href="/appointment">
              <Button size="md" className="gap-2 shadow-sm whitespace-nowrap text-xs xl:text-sm px-3 xl:px-5">
                <Calendar className="w-4 h-4" />
                <span>{t("bookAppointment")}</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Right Action Bar: Language Switcher & Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2 rtl:space-x-reverse">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
                  pathname === link.href ? "bg-primary-50 text-primary-700 font-bold" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
