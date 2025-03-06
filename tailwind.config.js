/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "'./src/**/*.{html,js,jsx,ts,tsx}'"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      maxWidth: {
        "screen-xl": "1280px",
      },
      colors: {
        "dark-green": "#122127",
      },
    },
  },
  plugins: [],
};
