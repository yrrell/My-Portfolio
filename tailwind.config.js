/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Sora'", "sans-serif"],
        body:    ["'Plus Jakarta Sans'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        navy: {
          950: "#020c1b",
          900: "#0a1628",
          800: "#0d1f38",
          700: "#112240",
        },
        accent: "#2563eb",
        teal:   "#0d9488",
      },
      animation: {
        "fade-up":  "fadeUp 0.7s ease forwards",
        "fade-in":  "fadeIn 0.7s ease forwards",
        float:      "float 4.5s ease-in-out infinite",
        marquee:    "marquee 30s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 20px rgba(37,99,235,0.3)" },
          "50%":     { boxShadow: "0 0 40px rgba(37,99,235,0.6)" },
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
