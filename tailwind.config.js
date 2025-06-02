 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Roboto: ["Roboto", "sans-serif"],
      },
      colors:{
        brand:{
          "50": "#fff6e6",
          "100": "#ffedcc",
          "200": "#ffdb99",
          "300": "#ffc966",
          "400": "#ffb733",
          "500": "#ffa500",
          "600": "#cc8400",
          "700": "#996300",
          "800": "#664200",
          "900": "#332100"
        },
        secondary:{
          '50': '#ecf4ff',
          '100': '#ddeaff',
          '200': '#c2d8ff',
          '300': '#9dbdff',
          '400': '#7697ff',
          '500': '#5671fe',
          '600': '#3748f4',
          '700': '#2a36d8',
          '800': '#2530ae',
          '900': '#263089',
          '950': '#131743',
        }
      }
    },
  },
  plugins: [],
}