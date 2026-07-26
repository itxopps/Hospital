import React from "react";
import { departmentsData } from "@/data/hospitalData";
import { DepartmentCard } from "@/components/sections/department-card";

export const metadata = { title: "Departments | Faris Al-Jazeera Medical Complex" };

export default function DepartmentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold font-heading">Clinical Departments</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {departmentsData.map((dept) => (
          <DepartmentCard key={dept.id} department={dept} />
        ))}
      </div>
    </div>
  );
}