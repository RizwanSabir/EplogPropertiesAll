/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {


    screens: {

      'xxs':'290px',
      
      'xs':'490px'
            ,
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'mdm': '768px',
            // => @media (min-width: 768px) { ... }
        "md":"900px",
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          },
      
    extend: {
      fontFamily: {
        sans: ['BasicSans-Regular', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary-color)',
        fonts: 'var(--fonts-color)',
        black: 'var(--black-color)',
        white: 'var(--white-color)',
        title: 'var(--title-color)',
        yellow: 'var(--yellow-color)',
        cyan: 'var(--cyan-color)',
        blue: 'var(--blue-color)',
        gray: 'var(--gray-color)',
      },
    },
  },
  plugins: [],
}

