/** @type {import('tailwindcss').Config} */
export default {
  // você coloca '  "./src/**/*.{js,jsx,ts,tsx}", ' para que o intelligesense funcione nos arquivos citados
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
// cria uma classe para que possa ser chamada pelo tailwind
      colors:{
        primary:'#FF6363',
        secondary: {
          100:'#E2E2D5',
          200:'#888883',
        }
      },
      fontFamily:{
        body:['Nunito']
      }


    },
  },
  plugins: [],
}

