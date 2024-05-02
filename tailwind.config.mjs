import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.15rem",
          sm: "1.75rem",
          lg: "2.5rem",
        },
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
      fontSize: {
        "2xs": ".7rem",
        xs: "clamp(0.8681rem, 0.8961rem + -0.0362vi, 0.8889rem)",
        sm: "clamp(1rem, 0.9855rem + 0.0725vi, 1.0417rem)",
        base: "clamp(1.125rem, 1.0815rem + 0.2174vi, 1.25rem)",
        lg: "clamp(1.2656rem, 1.1841rem + 0.4076vi, 1.5rem)",
        xl: "clamp(1.4238rem, 1.293rem + 0.6542vi, 1.8rem)",
        "2xl": "clamp(1.6018rem, 1.4077rem + 0.9708vi, 2.16rem)",
        "3xl": "clamp(1.802rem, 1.5273rem + 1.3739vi, 2.592rem)",
        "4xl": "clamp(2.0273rem, 1.6506rem + 1.8837vi, 3.1104rem)",
        "5xl": "clamp(2.2807rem, 1.7757rem + 2.5248vi, 3.7325rem)",
        "6xl": "clamp(2.5658rem, 1.9003rem + 3.3273vi, 4.479rem)",
        "7xl": "clamp(2.8865rem, 2.021rem + 4.3274vi, 5.3748rem)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        marquee2: "marquee2 40s linear infinite",
      },
      screens: {
        xs: "475px",
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
  plugins: [require("@tailwindcss/container-queries")],
};
