import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

    const variants = {
      primary: "bg-primary-700 text-white hover:bg-primary-800 shadow-md hover:shadow-lg",
      secondary: "bg-secondary-500 text-white hover:bg-secondary-600 shadow-md hover:shadow-lg",
      outline: "border-2 border-primary-700 text-primary-700 hover:bg-primary-50",
      danger: "bg-accent text-white hover:bg-red-700 shadow-md",
      ghost: "text-slate-700 hover:bg-slate-100 hover:text-primary-700",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs tracking-wide",
      md: "h-11 px-6 text-sm tracking-wide",
      lg: "h-13 px-8 text-base tracking-wide font-semibold",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };