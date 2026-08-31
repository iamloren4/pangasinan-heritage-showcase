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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Pangasinan Heritage Digital Showcase design tokens
        sea: {
          DEFAULT: "#0F3D3E", // Hundred Islands deep water
          700: "#0C302F",
          900: "#081F1F",
        },
        sand: {
          DEFAULT: "#E8DFC8", // limestone / shoreline
          100: "#FAF7F0",
          300: "#EFE7D3",
        },
        coral: {
          DEFAULT: "#E4572E", // signal accent (Bolinao Lighthouse beam)
          600: "#C94620",
        },
        moss: {
          DEFAULT: "#4C7A5E", // Balungao Hot Spring greenery
          700: "#3A5F49",
        },
        ink: {
          DEFAULT: "#16231F",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-public-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
