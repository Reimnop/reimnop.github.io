/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'incosolata': ['Inconsolata', 'monospace']
      },
      keyframes: {
        'fly-in': {
          '0%': {
            opacity: '0',
            transform: 'translateX(24px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'pulse-bounce-left': {
          '0%, 100%': {
            transform: 'translateX(24px)',
            opacity: '.5',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(0)',
            opacity: '1',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        'pulse-bounce-up': {
          '0%, 100%': {
            transform: 'translateY(24px)',
            opacity: '.5',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            opacity: '1',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      animation: {
        'fly-in': 'fly-in 0.3s ease-out',
        'pulse-bounce-left': 'pulse-bounce-left 1s infinite',
        'pulse-bounce-up': 'pulse-bounce-up 1s infinite'
      }
    },
  },
  plugins: [],
}
