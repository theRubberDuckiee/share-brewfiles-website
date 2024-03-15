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
      boxShadow: {
        custom: "0 0 32px 0 rgba(0, 0, 0, 0.25)",
      },
      backdropBlur: {
        "4xl": "160px",
        "5xl": "320px",
      },
      leading: {
        heading: "1.1",
      },
      maxWidth: {
        heading: "570px",
      },
      opacity: {
        7: ".075",
      },
      fontFamily: {
        sans: ["DM Sans Variable", ...defaultTheme.fontFamily.sans],
        mono: ["DM Mono", ...defaultTheme.fontFamily.mono],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        marquee2: "marquee2 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
