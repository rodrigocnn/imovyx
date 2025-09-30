const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // captura tudo dentro de src
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        // criando sky-600 personalizado
        sky: {
          600: "#0284c7", // cor base
          "600-100": "rgba(2, 132, 199, 0.1)", // variação com 10% de opacidade
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
