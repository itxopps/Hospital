import React from "react";
import { faqItemsData } from "@/data/hospitalData";
import { Card } from "@/components/ui/card";

export const metadata = { title: "FAQs | Faris Al-Jazeera Medical Complex" };

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold font-heading">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqItemsData.map((faq) => (
          <Card key={faq.id} className="p-6 space-y-2">
            <h3 className="text-base font-bold">{faq.question}</h3>
            <p className="text-xs text-slate-600">{faq.answer}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}