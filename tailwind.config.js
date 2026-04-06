/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F19",
        card: "#111827",
        cardSoft: "#0F172A",
        border: "#1F2937",

        primary: "#3B82F6",
        primarySoft: "#2563EB",

        textPrimary: "#F9FAFB",
        textSecondary: "#9CA3AF",

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",

        chartBlue: "#60A5FA",
        chartYellow: "#FBBF24",
        chartGreen: "#34D399",
        chartRed: "#F87171",
        chartPurple: "#A78BFA",
      },

      boxShadow: {
        card: "0 0 0 1px rgba(255,255,255,0.05), 0 10px 30px rgba(0,0,0,0.5)",
      },

      borderRadius: {
        xl: "14px",
      },
    },
  },
  plugins: [],
};
