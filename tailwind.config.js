/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#2E7D32", // Green shade
        second: "#FFF8E1", // Light yellow shade
        accent: "#FF9800", // Orange shade
      },
    },
  },
  plugins: [require("daisyui")],
};
