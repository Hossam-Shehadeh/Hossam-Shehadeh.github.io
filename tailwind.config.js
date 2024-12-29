module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vivid-blue': '#00bcd4', // Bright blue color
        'vivid-pink': '#ff4081', // Bright pink
        'neon-green': '#76ff03', // Neon green
        'deep-purple': '#6200ea', // Deep purple for accents
        'light-yellow': '#ffee58', // Light yellow for background elements
        'midnight-blue': '#003366', // Deep blue for header/footer backgrounds
        'soft-peach': '#FFB6B9', // Soft peach for button backgrounds
        'mint-green': '#98FF98', // Soft mint for background elements
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounce: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideUp: 'slideUp 1s ease-out',
        bounce: 'bounce 1s ease infinite',
        shake: 'shake 0.5s ease-out',
        pulse: 'pulse 2s infinite',
      },
      spacing: {
        '72': '18rem', // Adds custom spacing for larger elements
        '84': '21rem', // Adds custom spacing for larger elements
      },
      borderRadius: {
        'xl': '1.5rem', // Custom border radius for more rounded corners
        '2xl': '2rem', // Even more rounded corners for large elements
      },
      boxShadow: {
        'xl': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)', // Larger shadow for elements
        '2xl': '0 15px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow effect for emphasis
      },
    },
  },
  plugins: [],
}
