/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1f4f8b",
        brandCyan: "#2da8d8",
        brandGreen: "#4CAF50"
      },
      boxShadow: {
        glow: "0 20px 80px rgba(45,168,216,0.15)"
      }
    }
  },
  plugins: []
};