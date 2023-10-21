/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      body: ["Helvetica"],
    },
    fontSize: {
      sm: [
        "16px",
        {
          lineHeight: "150%",
        },
      ],
      base: [
        "18px",
        {
          lineHeight: "150%",
        },
      ],
      base_l: [
        "20px",
        {
          lineHeight: "150%",
        },
      ],
      title: [
        "40px",
        {
          lineHeight: "150%",
        },
      ],
      xl: ["100px", { lineHeight: "110%" }],
      xxl: [
        "120px",
        {
          lineHeight: "150%",
        },
      ],
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    textStroke: {
      "2px": "2px",
    },
    extend: {
      colors: {
        gray: "#ADADAD",
      },
      backgroundImage: {
        "collection-bg": "url('src/assets/images/collection.webp')",
      },
    },
  },
  plugins: [],
};
