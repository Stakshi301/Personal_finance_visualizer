// tailwind.config.js

module.exports = {
    theme: {
      extend: {
        colors: {
          'dark-bg': '#1a202c',
          'dark-card': '#2d3748',
          'dark-border': '#4a5568',
        },
        animation: {
          'gradient-x': 'gradient-x 15s ease infinite',
        },
        keyframes: {
          'gradient-x': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        },
      },
    },
    plugins: [],
  };
  