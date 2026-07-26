import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SchemaOrg } from "@/components/sections/schema-org";
import { LanguageProvider } from "@/context/language-context";
import { hospitalDetails } from "@/data/hospitalData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const hospitalName = hospitalDetails?.name || "Faris Al-Jazeera Medical Complex";
const hospitalArabic = hospitalDetails?.arabicName || "مجمع فارس الجزيرة الطبي";
const tagline = hospitalDetails?.tagline || "Excellence in Healthcare, Compassion in Service";

export const metadata: Metadata = {
  title: {
    default: `${hospitalName} | 24/7 Healthcare in Riyadh`,
    template: `%s | ${hospitalName}`,
  },
  description: `${hospitalName} (${hospitalArabic}) in Dhahrat Laban, Riyadh offers 24/7 Emergency, Internal Medicine, Pediatrics, Dental, Gynecology, and Dermatology services.`,
  keywords: [
    "Faris Al Jazeera Medical Complex",
    "مجمع فارس الجزيرة الطبي",
    "Hospital in Dhahrat Laban",
    "Emergency Clinic Riyadh",
    "Dental Clinic Laban",
    "Pediatrician Riyadh",
    "24 Hours Medical Center Riyadh",
  ],
  authors: [{ name: hospitalName }],
  creator: hospitalName,
  metadataBase: new URL("https://farisaljazeera.com.sa"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farisaljazeera.com.sa",
    title: `${hospitalName} - Excellence in Healthcare`,
    description: "Leading multi-specialty healthcare complex in Dhahrat Laban, Riyadh. 24/7 Emergency & Specialized Care.",
    siteName: hospitalName,
    images: [
      {
        url: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: hospitalName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: hospitalName,
    description: tagline,
    images: ["https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
      suppressHydrationWarning={true}
    >
      <head>
        <SchemaOrg />
      </head>
      <body
        className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-primary-100 selection:text-primary-800"
        suppressHydrationWarning={true}
      >
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}