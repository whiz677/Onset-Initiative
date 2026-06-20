import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAFAF7",
        charcoal: "#1F2933",
        navy: "#1E3A5F",
        teal: "#2F855A",
        mist: "#E7EEF5",
        amber: "#D97706",
        border: "#E5E7EB"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(31, 41, 51, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

