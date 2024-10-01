/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        inter: "'Inter', sans-serif",
      },
      colors: {
        primary: "#2E7D32", // Green shade
        second: "#FFF8E1", // Light yellow shade
        accent: "#FF9800", // Orange shade
      },
      animation: {
        pingSlow: "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
