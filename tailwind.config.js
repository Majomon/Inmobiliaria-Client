/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rojitoClaro: { 100: "#DB1D0F" },
        rojitoOscuro: { 100: "#63150F" },
        grisClaro: { 100: "#DCDBDB" },
        grisOscuro: { 100: "#7D7C7C" },
      },
    },
  },
  plugins: [],
};
