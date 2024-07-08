import type { Config } from "tailwindcss";

const config: Config = {
  experimental: {
    optimizeUniversalDefaults: true
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        rebel: ['var(--font-rebel)'],
        default: ['var(--font-default)']
      }
    },
  },
  plugins: [],
};
export default config;
