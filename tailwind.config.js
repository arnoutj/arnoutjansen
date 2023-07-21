/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    spacing: {
      1: '10px',
      2: '20px',
      3: '30px',
      4: '40px',
      5: '50px',
      6: '60px',
    },
  },
  plugins: [],
};
