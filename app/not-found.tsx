import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-5xl font-extrabold text-primary-700">404</h1>
      <p className="text-sm text-slate-600">The page you requested was not found.</p>
      <Link href="/"><Button>Return Home</Button></Link>
    </div>
  );
}