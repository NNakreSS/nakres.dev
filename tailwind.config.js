/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        "card-second": "rgba(var(--card-second))",
        "text-main": "rgba(var(--text-main))",
        "text-second": "rgba(var(--text-second))",
        primary: "rgba(var(--primary))",
        warning: "rgba(var(--warning))",
        secondary: "rgba(var(--secondary))",
        danger: "rgba(var(--danger))",
      },
    },
  },
  plugins: [],
};
