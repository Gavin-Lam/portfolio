import type { Config } from "tailwindcss";

// Theme colours are CSS variables (see app/globals.css) so the whole site
// follows the visitor's light/dark preference without `dark:` variants.
const themed = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: themed("ground"),
        surface: themed("surface"),
        ink: themed("ink"),
        soft: themed("soft"),
        line: themed("line"),
        brand: themed("brand"),
        "on-brand": themed("on-brand"),
        // Fixed colours for the project sketches, which always render as
        // dark "screens" regardless of theme.
        signal: "#F5C518",
        night: "#101B2D",
        "night-raised": "#1A2942",
        "night-line": "#2C3F60",
        "night-text": "#E8EDF4",
        "night-soft": "#9DACC0",
        beam: "#8AA7FF",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "76rem",
        prose: "38rem",
      },
    },
  },
  plugins: [],
};

export default config;
