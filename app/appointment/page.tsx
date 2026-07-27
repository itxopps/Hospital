"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { departmentsData, hospitalDetails } from "@/data/hospitalData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import { CheckCircle2, AlertCircle } from "lucide-react";

// WhatsApp Icon SVG Component
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.573-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.874 9.877-9.874 2.636 0 5.115 1.028 6.978 2.893A9.82 9.82 0 0121.87 12a9.863 9.863 0 01-9.819 9.785m0-18.067c-6.14 0-11.137 4.997-11.137 11.137 0 1.964.512 3.88 1.485 5.567L1 23l5.659-1.485a11.125 11.125 0 005.398 1.393h.005c6.138 0 11.137-4.998 11.137-11.137 0-2.976-1.158-5.774-3.265-7.881A11.08 11.08 0 0012.051 3.718" />
    </svg>
  );
}

const appointmentSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  phone: z.string().min(9, "Phone must be at least 9 digits"),
  email: z.string().email("Invalid email address"),
  department: z.string().min(1, "Please select a department"),
  preferredDate: z.string().min(1, "Please select a date"),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export default function AppointmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { language, t } = useLanguage();
  const isAr = language === "ar";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
  });

  // Clean WhatsApp phone number string (removing spaces/dashes)
  const whatsappNumber = "966542124818"; // Adjust to your exact WhatsApp business number
  
  // Pre-filled WhatsApp message
  const whatsappMessage = encodeURIComponent(
    isAr
      ? "مرحباً مجمع فارس الجزيرة الطبي، أود حجز موعد طبّي مع طبيب متخصص."
      : "Hello Faris Al-Jazeera Medical Complex, I would like to book an appointment."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to send appointment request");
      }

      setIsSubmitted(true);
      reset();
    } catch (err: any) {
      setSubmitError(err?.message || "An error occurred while submitting your request.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
      <Card className="p-6 sm:p-10 shadow-xl border-slate-200 rounded-3xl">
        <h1 className="text-2xl sm:text-3xl font-bold font-heading mb-6 text-slate-900">
          {t("bookAppointment")}
        </h1>

        {/* --- WHATSAPP QUICK BOOKING BUTTON --- */}
        <div className="mb-8 p-5 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left rtl:sm:text-right">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              {isAr ? "هل تفضل الحجز السريع عبر واتساب؟" : "Prefer instant booking via WhatsApp?"}
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              {isAr
                ? "تحدث مباشرة مع فريق الاستقبال للحصول على موعد فوري."
                : "Chat directly with our reception team for immediate scheduling."}
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0"
          >
            <Button
              type="button"
              className="w-full sm:w-auto h-12 px-6 gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-900/20 transition-all hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>{isAr ? "الحجز عبر الواتساب" : "Book on WhatsApp"}</span>
            </Button>
          </a>
        </div>

        {/* --- DIVIDER --- */}
        <div className="relative mb-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <span className="relative bg-white px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
            {isAr ? "أو عبّئ النموذج أدناه" : "Or fill out the form below"}
          </span>
        </div>

        {submitError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3 rtl:space-x-reverse text-red-700 text-xs">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold mb-0.5">Submission Error:</p>
              <p>{submitError}</p>
            </div>
          </div>
        )}

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h2 className="text-xl font-bold">
              {isAr ? "تم استلام طلب الحجز بنجاح!" : "Appointment Request Received!"}
            </h2>
            <p className="text-xs text-slate-600">
              {isAr
                ? "تم إرسال بياناتك إلى فريق الاستقبال. سيتصل بك موظف الاستقبال قريباً لتأكيد الموعد."
                : "Your request has been emailed to our reception team. They will call you shortly to confirm your slot."}
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              {isAr ? "حجز موعد آخر" : "Book Another"}
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700">
                {isAr ? "الاسم الكامل *" : "Full Name *"}
              </label>
              <Input
                {...register("fullName")}
                placeholder={isAr ? "مثال: محمد العتيبي" : "e.g. John Doe"}
              />
              {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700">
                {isAr ? "رقم الهاتف *" : "Phone Number *"}
              </label>
              <Input {...register("phone")} placeholder="+966 5X XXX XXXX" />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700">
                {isAr ? "البريد الإلكتروني *" : "Email Address *"}
              </label>
              <Input {...register("email")} placeholder="email@example.com" />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700">
                {isAr ? "القسم الطبي *" : "Department *"}
              </label>
              <select
                {...register("department")}
                className="w-full h-12 border border-slate-200 rounded-xl px-4 text-sm bg-white"
              >
                <option value="">{isAr ? "اختر القسم الطبي" : "Select Department"}</option>
                {departmentsData.map((d) => (
                  <option key={d.id} value={isAr ? d.arabicName : d.name}>
                    {isAr ? d.arabicName : d.name}
                  </option>
                ))}
              </select>
              {errors.department && <p className="text-xs text-red-500 mt-1">{errors.department.message}</p>}
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700">
                {isAr ? "تاريخ الموعد *" : "Preferred Date *"}
              </label>
              <Input type="date" {...register("preferredDate")} />
              {errors.preferredDate && <p className="text-xs text-red-500 mt-1">{errors.preferredDate.message}</p>}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-sm font-bold">
              {isSubmitting
                ? isAr
                  ? "جاري الإرسال..."
                  : "Submitting..."
                : isAr
                ? "تأكيد وإرسال طلب الحجز"
                : "Confirm Booking Request"}
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}
