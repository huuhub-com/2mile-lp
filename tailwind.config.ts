import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /* ===============================
         COLORS
      =============================== */
      colors: {
        background: "#F8F8F6",
        primary: "#1F2937",
        muted: "#A0A0A3",
      },

      /* ===============================
         FONT
      =============================== */
      fontFamily: {
        sans: ["Inter", "Noto Sans JP", "sans-serif"],
      },

      /* ===============================
         TYPOGRAPHY SCALE
      =============================== */
      fontSize: {
        hero: ["clamp(56px,12vw,120px)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        lead: ["clamp(16px,2.5vw,28px)", { lineHeight: "1.6" }],
        body: ["16px", { lineHeight: "1.8" }],
        sectionLabel: ["12px", { letterSpacing: "0.15em" }],
        price: ["clamp(36px,6vw,72px)", { lineHeight: "1.1" }],
      },

      /* ===============================
         SPACING SYSTEM
      =============================== */
      spacing: {
        section: "160px",
        hero: "100vh",
        gutter: "24px",
        "stack-sm": "8px",
        stack: "16px",
        "stack-lg": "32px",
      },

      /* ===============================
         MAX WIDTH
      =============================== */
      maxWidth: {
        content: "640px",
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
