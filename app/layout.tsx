import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const hospitalName = hospitalDetails?.name || "Faris Al-Jazeera Medical Complex";
const hospitalArabic = hospitalDetails?.arabicName || "مجمع فارس الجزيرة الطبي";

export const metadata: Metadata = {
  title: {
    default: `${hospitalName} | 24/7 Healthcare in Riyadh`,
    template: `%s | ${hospitalName}`,
  },
  description: `${hospitalName} (${hospitalArabic}) in Dhahrat Laban, Riyadh offers 24/7 Emergency and Specialized care.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth w-full overflow-x-hidden`}
      suppressHydrationWarning={true}
    >
      <head>
        <SchemaOrg />
      </head>
      <body
        className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased w-full overflow-x-hidden max-w-full"
        suppressHydrationWarning={true}
      >
        <LanguageProvider>
          <div className="w-full overflow-x-hidden min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow w-full overflow-x-hidden">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
