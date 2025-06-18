const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'wave-slow': 'wave 16s ease-in-out infinite',
        'wave-medium': 'wave 10s ease-in-out infinite',
        'wave-fast': 'wave 6s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },


  plugins: ["@tailwindcss/postcss"],
};

export default config;
