/** @type {import('tailwindcss').Config} */
export default {
  content:
      [
        './index.html',                // Include index.html
        './src/**/*.{js,ts,jsx,tsx}',  // Include all React files
      ],
  theme: {
    extend: {
      colors: {
        "wedamadura-yellow": "#EEE183",
        "wedamadura-blue": "#0F3057",
        "wedamadura-dark-blue": "#0D1B2A",
        "wedamadura-white": "#F5F5F5",
        "wedamadura-light-blue": "#1D4E89",
        "wedamadura-light-yellow": "#F6E27F",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Playfair: ["Playfair Display", "serif"],
        green: {
          light: '#a3e635',    // Light green
          DEFAULT: '#4caf50',  // Default green
          dark: '#2e7d32',     // Dark green
        },
        brown: {
          light: '#d2b48c',    // Light brown
          DEFAULT: '#8b4513',  // Default brown
          dark: '#5d3a17',     // Dark brown
        },
        yellow: {
          light: '#fdfd96',    // Light yellow
          DEFAULT: '#fdd835',  // Default yellow
          dark: '#fbc02d',     // Dark yellow
        },
      },
    },
  },
  plugins: [],
};
