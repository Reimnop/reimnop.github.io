/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"]
    },
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#f0f0f0",
        foreground2: "#c0c0c0",
        accent: "#68ffff"
      },
    },
  },
  plugins: [],
}

