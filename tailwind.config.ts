import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        panel: "#F8FAFC",
        line: "#D7DEE8",
        brand: {
          50: "#ECFEF7",
          100: "#D2F9EA",
          500: "#0E9F6E",
          600: "#057A55",
          700: "#046C4E",
          900: "#064E3B"
        },
        ledger: {
          500: "#2563EB",
          700: "#1D4ED8"
        },
        risk: {
          500: "#DC2626",
          700: "#B91C1C"
        }
      },
      boxShadow: {
        soft: "0 12px 30px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
