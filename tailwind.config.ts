import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00BDE0",
          hover: "#00A1BF",
          subtle: "#CCF2F8",
        },
        secondary: "#031B4E",
        body: "#566593",
        light: "#ECF5FB",
        line: "#E1EBF1",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        base: "20px",
        lg: "30px",
      },
      boxShadow: {
        soft: "0px 10px 60px rgba(3, 27, 78, 0.08)",
        card: "0px 20px 50px rgba(3, 27, 78, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
