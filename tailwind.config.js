/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      chosun: ["Chosunilbo_myungjo"],
      pretendard: ["Pretendard-Regular"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
