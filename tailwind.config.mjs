import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        bkg: "#111111",
        accent: {
          teal: "#00EAEA",
          orange: "#FF4F32",
          green: "#10E06f",
          pink: "#F847F1",
          bluedark: "#2D24E9",
          bluemedium: "#0868F9",
          bluelight: "#7EB1Fd",
        },
      },
      fontFamily: {
        sans: ["DM Sans Variable", ...defaultTheme.fontFamily.sans],
        mono: ["DM Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
