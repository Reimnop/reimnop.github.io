module.exports = {
    content: [
        './src/**/*.{html,js,svelte,ts}'
    ],
    plugins: [
        require('tailwindcss-image-rendering')()
    ],
    variants: {
        imageRendering: ['responsive'],
    },
    theme: {
        fontFamily: {
            'montserrat': ['Montserrat', 'sans-serif']
        },
        extend: {
            keyframes: {
                reveal: {
                    '0%': { transform: 'translateY(100%) scale(50%)', opacity: '0%' },
                    '70%': { transform: 'translateY(-5%) scale(105%)', opacity: '100%' },
                    '100%': { transform: 'translateY(0%) scale(100%)', opacity: '100%' }
                },
                reveal2: {
                    '0%': { opacity: '0%' },
                    '100%': { opacity: '100%' }
                },
                reveal3: {
                    '0%': { transform: 'translateY(100%)', opacity: '0%' },
                    '100%': { transform: 'translateY(0%)', opacity: '100%' }
                }
            },
            animation: {
                reveal: 'reveal 0.8s forwards',
                reveal2: 'reveal2 0.4s 0.8s forwards',
                reveal3: 'reveal3 0.8s forwards'
            }
        }
    }
};