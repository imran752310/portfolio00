import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#38af5b",
          90: "292c27"
        },
        gray:{
          10: "#EEEEEEE",
          20: "#F7F7F7",
          30: "#F2F2F2",
          40: "#E5E5E5",
          50: "#D9D9D9",
          60: "#C9C9C9",
          70: "#B3B3B3",
          80: "#A6A6A6",
          90: "#999999",
        }
      },
      backgroundImage:{
        pattern : "url('/pattern')"
      },
      screens: {
        xs: '480PX',
        '3xl': '1680px',
        '4xl': '2200px'
      },
      maxWidth: {
        '10xl' : "1512px",
      },
      borderRadius: {
        '5xl': "40px"
      },
    },
  },
  plugins: [],
} satisfies Config;
