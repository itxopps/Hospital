"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { departmentsData, doctorsData } from "@/data/hospitalData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const appointmentSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  phone: z.string().min(9, "Valid phone number required"),
  email: z.string().email("Invalid email"),
  department: z.string().min(1, "Select a department"),
  preferredDate: z.string().min(1, "Select date"),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export default function AppointmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Card className="p-8">
        <h1 className="text-3xl font-bold font-heading mb-6">Book an Appointment</h1>
        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-secondary mx-auto"/>
            <h2 className="text-xl font-bold">Appointment Request Submitted!</h2>
            <p className="text-xs text-slate-600">Our desk will call you to confirm your slot.</p>
            <Button onClick={() => { setIsSubmitted(false); reset(); }}>Book Another</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700">Full Name</label>
              <Input {...register("fullName")} placeholder="Name" />
              {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700">Phone</label>
              <Input {...register("phone")} placeholder="+966" />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700">Email</label>
              <Input {...register("email")} placeholder="email@example.com" />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700">Department</label>
              <select {...register("department")} className="w-full h-12 border border-slate-200 rounded-xl px-4 text-sm">
                <option value="">Select Department</option>
                {departmentsData.map((d) => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700">Preferred Date</label>
              <Input type="date" {...register("preferredDate")} />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Submitting..." : "Submit Appointment Request"}
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}