import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#00529B",
          foreground: "#ffffff",
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc8fb",
          400: "#36aaf7",
          500: "#0c8ee9",
          600: "#0070c8",
          700: "#00529B",
          800: "#054884",
          900: "#0a3c6f",
        },
        secondary: {
          DEFAULT: "#00A887",
          foreground: "#ffffff",
          50: "#f0fdf9",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#00A887",
          600: "#0d9488",
          700: "#0f766e",
        },
        accent: {
          DEFAULT: "#E63946",
          foreground: "#ffffff",
          light: "#FFF5F5",
        },
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B",
        },
        border: "hsl(var(--border))",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 82, 155, 0.08)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        hover: "0 20px 30px -10px rgba(0, 82, 155, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;