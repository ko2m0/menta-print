/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: "#ADE4B4",
          soft: "#D4F0D9",
          deep: "#8FD49C",
        },
        ink: {
          DEFAULT: "#1F2937",
          soft: "#585C70",
          mute: "#6B7280",
        },
        paper: {
          DEFAULT: "#F8FAF8",
          dim: "#EEF2EE",
          dark: "#0F1115",
        },
        charcoal: {
          DEFAULT: "#1F2937",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        blob: "blob 14s infinite ease-in-out",
        "blob-slow": "blob 22s infinite ease-in-out",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};
