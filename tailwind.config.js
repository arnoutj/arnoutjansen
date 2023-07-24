const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          "text-shadow": "black 2px 2px"
        }
      });
    })
  ]
};
