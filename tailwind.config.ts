import type {Config} from "tailwindcss";

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
        '512': '32rem',
        '832': '52rem',
        '816': '51rem',
      },
      screens: {
        'sm': '340px',

        'xs': '391px',

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
        'gray_light': '#F4F6F5',
        'gray_text_light': '#9B9895',
        'gray_icon': '#EEF0EF',
        'gray_overlay': '#2E2C2A',
      },
      height: {
        '260': '16rem',
        '142': '9rem',
        '980': '61rem',
        '420': '26rem',
      },
      width: {
        '563': '35rem',
        '281': '18rem',
        '1856': '116rem'
      },
      borderRadius: {
        'large': '32px'
      },
      fontSize: {
        main: ['40px', '48px'],
        h2: ['28px', '36px'],
        mainMd: ['32px', '40px']
      }
    },
  },
  plugins: [],
};
export default config;
