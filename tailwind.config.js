module.exports = {
  content: [
    "./src/components/*.{ts,tsx}",
    "./src/components/**/.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  jit: true,
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      "c-md": "840px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
