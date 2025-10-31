// client/tailwind.config.js

// We need to import the text-shadow plugin
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // 1. Remove all the old 'cream' and 'ink' colors
      //    We will use Tailwind's built-in 'neutral' palette for our dark theme.

      // 2. Add our new font families
      fontFamily: {
        // This is our "classy" font for content
        lora: ["Lora", "serif"],
        // This is our "classy" font for post titles
        playfair: ["Playfair Display", "serif"],
        // This is our "modern" font for all UI elements
        inter: ["Inter", "sans-serif"],
        // This is our "arcade" font for neon headings
        arcade: ["VT323", "monospace"],
      },

      // 3. Define our 'neon glow' effect
      textShadow: {
        glow: '0 0 5px theme(colors.cyan.400), 0 0 10px theme(colors.cyan.400)',
      },

      // (Keep your existing 'vintage' shadow if you want, or remove it)
      boxShadow: {
        vintage: "0 6px 16px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  // 4. Add the textShadow plugin
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};