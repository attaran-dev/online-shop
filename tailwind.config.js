/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#cc9900",
          secondary: "#37cdbe",
          accent: "#37cdbe",
          neutral: "#3D4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: true,
    prefix: "",
    darkTheme: "dark",
  },
};
