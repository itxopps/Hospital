import React from "react";
import { hospitalStats } from "@/data/hospitalData";

export function StatsSection() {
  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-glass border border-slate-100 p-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {hospitalStats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-3xl font-extrabold text-slate-900">{stat.value}</div>
              <div className="text-xs font-medium text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}