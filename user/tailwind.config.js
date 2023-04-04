/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   "fotoSatu": "url('https://imagedeleg1.lacoste.com/dw/image/v2/BGSW_PRD/on/demandware.static/-/Library-Sites-LacosteContent/default/dw2566bccd/images/homepage/2023-02-23/4-PD_HP_BLOCKS-DESK.jpg')"
      // }
    },
  },
  plugins: [require("daisyui")],
}
