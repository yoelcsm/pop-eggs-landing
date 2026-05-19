import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-bg": "var(--brand-bg)",
        "brand-ink": "var(--brand-ink)",
        "brand-green": "var(--brand-green)",
        "brand-green-dark": "var(--brand-green-dark)",
        "brand-orange": "var(--brand-orange)",
        "brand-orange-dark": "var(--brand-orange-dark)",
        "brand-ice": "var(--brand-ice)",
        "brand-warm": "var(--brand-warm)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
