"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { departmentsData } from "@/data/hospitalData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import { CheckCircle2, AlertCircle } from "lucide-react";

const appointmentSchema = z.object({
  fullName: z.string().min(3, "Required"),
  phone: z.string().min(9, "Required"),
  email: z.string().email("Invalid email"),
  department: z.string().min(1, "Select department"),
  preferredDate: z.string().min(1, "Select date"),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export default function AppointmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { language, t } = useLanguage();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    setSubmitError(null);
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send appointment request");
      }

      setIsSubmitted(true);
      reset();
    } catch (err) {
      setSubmitError(
        language === "ar"
          ? "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى أو الاتصال المباشر."
          : "An error occurred while submitting your request. Please try again or call us directly."
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Card className="p-8">
        <h1 className="text-3xl font-bold font-heading mb-6">{t("bookAppointment")}</h1>

        {submitError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3 rtl:space-x-reverse text-red-700 text-xs">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{submitError}</span>
          </div>
        )}

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-secondary mx-auto" />
            <h2 className="text-xl font-bold">
              {language === "ar" ? "تم استلام طلب الحجز بنجاح!" : "Appointment Request Received!"}
            </h2>
            <p className="text-xs text-slate-600">
              {language === "ar"
                ? "تم إرسال بياناتك إلى فريق الاستقبال. سيتصل بك موظف الاستقبال قريباً لتأكيد الموعد."
                : "Your request has been emailed to our reception team. They will call you shortly to confirm your slot."}
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              {language === "ar" ? "حجز موعد آخر" : "Book Another"}
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700">
                {language === "ar" ? "الاسم الكامل *" : "Full Name *"}
              </label>
              <Input
                {...register("fullName")}
                placeholder={language === "ar" ? "مثال: محمد العتيبي" : "e.g. John Doe"}
              />
              {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700">
                {language === "ar" ? "رقم الهاتف *" : "Phone Number *"}
              </label>
              <Input {...register("phone")} placeholder="+966 5X XXX XXXX" />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700">
                {language === "ar" ? "البريد الإلكتروني *" : "Email Address *"}
              </label>
              <Input {...register("email")} placeholder="email@example.com" />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700">
                {language === "ar" ? "القسم الطبي *" : "Department *"}
              </label>
              <select
                {...register("department")}
                className="w-full h-12 border border-slate-200 rounded-xl px-4 text-sm bg-white"
              >
                <option value="">{language === "ar" ? "اختر القسم الطبي" : "Select Department"}</option>
                {departmentsData.map((d) => (
                  <option key={d.id} value={language === "ar" ? d.arabicName : d.name}>
                    {language === "ar" ? d.arabicName : d.name}
                  </option>
                ))}
              </select>
              {errors.department && <p className="text-xs text-red-500">{errors.department.message}</p>}
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700">
                {language === "ar" ? "تاريخ الموعد *" : "Preferred Date *"}
              </label>
              <Input type="date" {...register("preferredDate")} />
              {errors.preferredDate && <p className="text-xs text-red-500">{errors.preferredDate.message}</p>}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting
                ? language === "ar"
                  ? "جاري الإرسال..."
                  : "Submitting..."
                : language === "ar"
                ? "تأكيد وإرسال طلب الحجز"
                : "Confirm Booking Request"}
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}
