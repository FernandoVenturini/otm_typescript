/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6', // Roxo
        secondary: '#EC4899', // Rosa
        accent: '#10B981', // Verde
        dark: '#1F2937', // Cinza escuro
        light: '#F9FAFB' // Cinza claro
      }
    },
  },
  plugins: [],
}