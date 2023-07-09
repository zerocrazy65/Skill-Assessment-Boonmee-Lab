/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontSize: {
            28: "28px",
            24: "24px",
            18: "18px",
            16: "16px",
         },
         color: {
            "black-theme": "#333333",
            "white-theme": "#ffffff",
            "pink-theme": "#ED2E7C",
            "light-pink-theme": "#FF8BBB",
         },
      },
   },
   plugins: [],
};
