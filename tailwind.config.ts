import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00717D",
        "grey-dark": "#F2F2F2",
        header: "#EBEBEB",
        black: "#323232",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "box-sh":
          "0px -4px 15px 0px rgba(255, 255, 255, 0.39), 0px 4px 11px 0px rgba(29, 35, 25, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
