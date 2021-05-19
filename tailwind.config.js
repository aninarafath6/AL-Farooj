module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#ea7c69",
        },
        primary: {
          DEFAULT: "#252836",
          light: " rgb(45, 48, 62)",
          dark: " rgb(31, 29, 43)",
        },
      },
      screens: {
        xs: "375px",
        // => @media (min-width: 375px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        '2xl': "1536px",
        // => @media (min-width: 1536px) { ... }

        '3xl': "2000px",
        // => @media (min-width:2000px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
