/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#12151e",
        "neon-blue": "#4fc5e0",
        "sea-green": "#ade46a",
      },
    },
  },
  plugins: [],
};
