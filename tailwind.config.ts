import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xs: "320px", // mobile-sm
      sm: "425px", // mobile-lg
      md: "768px", // tablet
      lg: "1024px", // laptop
      "lg-mid": "1280px",
      xl: "1440px", // laptop-lg
      "xl-mid": "1840px",
      "2xl": "2560px", // laptop-xl
    },
    colors: {
      white: "var(--white)",
      primary: "var(--primary)",
      "secondary-50": "var(--secondary-50)",
      "secondary-100": "var(--secondary-100)",
      "secondary-200": "var(--secondary-200)",
      "secondary-300": "var(--secondary-300)",
      "secondary-400": "var(--secondary-400)",
      "secondary-500": "var(--secondary-500)",
      "secondary-600": "var(--secondary-600)",
      "secondary-700": "var(--secondary-700)",
      "secondary-800": "var(--secondary-800)",
      "secondary-900": "var(--secondary-900)",
    }
  },
  plugins: [],
};
export default config;
