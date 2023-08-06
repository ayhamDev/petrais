/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#FA2525",
      secondary: "#EEEEEE",
      offblack: "#111111",
    },
    fontSize: {
      // Desktop (default)
      sm: "0.9375rem",
      base: "1.25rem",
      md: "1.5625rem",
      lg: "2.1875rem",
      xl: "3.75rem",
      // Mobile
      "base-mobile": "1.0625rem",
      "md-mobile": "1.25rem",
      "lg-mobile": "1.5625rem",
      "xl-mobile": "2.1875rem",
    },
    borderRadius: {
      primary: "30px 2px 30px 30px",
      secondary: "40px",
      offshape: "30px 2px 30px 2px",
      sm: "10px",
    },
  },
  plugins: [],
};
