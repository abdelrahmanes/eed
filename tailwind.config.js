/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {lg:"1198px"},
      colors: {
        primary: "#e2a202",
        primaryHover: "#e2a20999",
      },
      transitionProperty: {
        height: "height",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/src/assets/images/event.png')",
      },
    },
  },
  plugins: [],
};
