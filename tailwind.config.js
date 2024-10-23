/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "faq-white":"hsl(0, 0%, 100%)",
        "faq-light-pink":"hsl(275, 100%, 97%)",
        "faq-grayish-purple":"hsl(292, 16%, 49%)",
        "faq-dark-purple":"hsl(292, 42%, 14%)"
      },fontFamily:{
        "sans":["WorkSans"],
      }
    },
  },
  plugins: [],
}

