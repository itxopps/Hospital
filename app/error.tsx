"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
      <h2 className="text-xl font-bold">Something went wrong</h2>
      <Button onClick={() => reset()} variant="outline">Try Again</Button>
    </div>
  );
}