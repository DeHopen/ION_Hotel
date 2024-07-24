import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '128': '32rem',
        '832': '52rem'
      },
      screens: {
        'sm': '640px',

        'md': '768px',

        'lg': '1024px',

        'xl': '1280px',

        '2xl': '1536px',
      },
      colors: {
        'orange-extra': '#ED8F1B',
        'white': '#FFFFFF',
        'black': '#000',
        'gray': '#3C3937',
        'gray_bg': '#F4F6F5',
        'gray_light': '#F4F6F5'
      },
      height: {
        '260': '16rem',
        '142': '9rem',
        '980': '61rem'
      },
      width: {
        '563': '35rem',
        '281': '18rem',
        '1856': '116rem'
      },
      borderRadius: {
        'large': '32px'
      }
    },
  },
  plugins: [],
};
export default config;
