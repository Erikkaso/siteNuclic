/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#2596be",
          secondary: "#1f86aa",
          card: "rgba(255, 255, 255, 0.76)",
        },
        accent: {
          blue: "#2596be",
          cyan: "#8ee5ff",
          purple: "#0f6f8d",
        },
        text: {
          primary: "#075b75",
          secondary: "#0a4f64",
        },
        border: "rgba(255, 255, 255, 0.82)",
      },
      fontFamily: {
        sans: ["Lato", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 8px 24px rgba(0, 62, 82, 0.08)",
        "glow-purple": "0 14px 34px rgba(0, 62, 82, 0.16)",
      },
      backgroundImage: {
        "tech-grid":
          "linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
