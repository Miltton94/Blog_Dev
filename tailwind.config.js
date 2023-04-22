/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        blur: "url(/src/assets/featured-image.png)",
      },
      colors: {
        green: {
          500: "#4fff4b",
        },
        purple: {
          100: "#9e6dc2",
          500: "#fbf6ff",
          700: "#290742",
          900: "#170027",
        },
      },
      screens: {
        lx: { max: "980px" },
        // => @media (max-width: 980px) { ... }

        lg: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        md: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        sm: { max: "449px" },
        // => @media (max-width: 449px) { ... }
      },
    },
  },
  plugins: [],
};

