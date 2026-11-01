/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        danika: {
          maroon: "#913428",
          maroonDark: "#73271D",
          maroonLight: "#A53D30",
          coral: "#DF493A",
          coralHover: "#C83B2D",
          charcoal: "#252525",
          charcoalLight: "#333333",
          offwhite: "#F8F6F2",
          offwhiteDark: "#ECE8E1",
          gold: "#E7B949",
          goldDark: "#C99C32",
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'premium-hover': '0 20px 40px -15px rgba(145, 52, 40, 0.15), 0 8px 12px -3px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
};
