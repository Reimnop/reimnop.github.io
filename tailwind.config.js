/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      body: ["Noto Sans", "sans-serif"]
    },
    extend: {
      colors: {
        background: "black",
        foreground: "white"
      }
    },
  },
  plugins: [],
}

