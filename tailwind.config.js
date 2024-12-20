/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "200px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans"],
      },
      fontSize: {
        h1: [
          "48px",
          {
            lineHeight: "64px",
            fontWeight: "700",
          },
        ],
        h2: [
          "36px",
          {
            lineHeight: "50px",
            fontWeight: "700",
          },
        ],
        h3: [
          "30px",
          {
            lineHeight: "36px",
            fontWeight: "700",
          },
        ],
        h4: [
          "24px",
          {
            lineHeight: "36px",
            fontWeight: "700",
          },
        ],
        h5: [
          "20px",
          {
            lineHeight: "30px",
            fontWeight: "700",
          },
        ],
        h6: [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "700",
          },
        ],
        Subtile1: [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        Subtile2: [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        Body1: [
          "16px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        Body2: [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "400",
          },
        ],
        Caption: [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: "400",
          },
        ],
      },

      container: {
        center: true,
        padding: {
          xs: "0rem",
          sm: "10px",
          lg: "1rem",
          xl: "1rem",
          "2xl": "1rem",
        },
      },

      backgroundImage: {
        Gradient:
          "linear-gradient(182deg, rgba(0, 215, 255, 0.80) -42.12%, rgba(217, 217, 217, 0.00) 114.67%)",
      },

      colors: {
        Primary: "#133852",
        Secondary: "#20A2F5;",
        Cyanblue: "#00D7FF",
        Bluepurple: "#5800FF",
        Darkpurple: "#590696",
        Cyan: "#72FFFF",
        white: "#FFFFFF",
        lightBlack: "#383838",
      },
    },
  },
};
