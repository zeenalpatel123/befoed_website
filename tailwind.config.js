/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '450px',
      // => @media (min-width: 450px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontSize: {
        '12' : ['12px','22px'],
        '14' : ['14px','20px'], 
        '16' : ['16px','26px'], 
        '18' : ['18px','24px'], 
        '20' : ['20px','28px'],
        '22' : ['22px','30px'],
        '26' : ['26px','36px'],
        '24' : ['24px','32px'], 
        '28' : ['28px','36px'], 
        '30' : ['30px','40px'],
        '34' : ['34px','44px'],
        '38' : ['38px','48px'],
        '40' : ['40px','50px'],
        '48' : ['48px','56px'],
        '52' : ['52px','62px'],
      },
      colors:{
        'primary':'#2B50ED',
        'secondary':'#3C51A0',
        'gray_1': '#807F86',
        'gray_2' : '#F5F7F9',
        'gray_3' : '#DAE1FF',
        'b1' : '#21316F',
        'b2' : '#3F5ED5',
        'b3' : '#000E33',
        'b4' : '#233039',
        'b8' : '#475569',
        'error':'#DC2626',
        'error2' : '#B01212',
        'green' : '#11A75C',
      },
      fontFamily: {
        'syne' : ['Syne','sans-serif'],
   
      },
      backgroundImage: {
        'primary_gra': 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
      },
      boxShadow: {
        'shadow_1': '0px 14px 34px 0px rgba(0, 0, 0, 0.15)',
        'shadow_2': '0px 4px 14px 0px rgba(0, 0, 0, 0.08)',
        'shadow_3': '0px 10px 44px 0px rgba(0, 0, 0, 0.1)',
        'shadow_4': '0px 14px 24px 0px rgba(0, 0, 0, 0.15)',



      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      }
    },
  },
  plugins: [],
}

