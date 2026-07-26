import React from "react";
import { hospitalDetails } from "@/data/hospitalData";

export function SchemaOrg() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": hospitalDetails.name,
    "alternateName": hospitalDetails.arabicName,
    "url": "https://farisaljazeera.com.sa",
    "telephone": hospitalDetails.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": hospitalDetails.address,
      "addressLocality": hospitalDetails.district,
      "addressRegion": hospitalDetails.city,
      "addressCountry": "SA"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}