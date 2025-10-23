/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        even: '0 0 35px -1px rgba(0, 0, 0, 0.1), 0px 1px 1px -1px rgba(0, 0, 0, 0.05)'
      },
      colors: {
        primary: '#ffffff',
        primary2: '#4e4e4e',
        primary3: '#727497',
        primary4: '#6e6e6e',
        secondary: '#51bae7',
        secondary2: '#f6f6f6',
        secondary3: '#a6dcf3',
        secondary4: '#F0FBFF',
        secondary5: '#D9D9D9',
        'secondary-hover': '#61c7f2',
        "checkbox-accent": "#51BAE7",
        "text-color-primary": "#2E2E2E",
        "text-color-second": "#4E4E4E",
        "text-color-third": "#6E6E6E",
        'table-blue': '#F0FBFF',
        success: '#5cbf54',
        danger: '#ff5353',
        warning: '#e39735',
        'color-hash': '#475569',
        'color-ash': '#ccc',
        'color-light-green': '#DBF4DE',
        'color-dark-blue': '#23255C',
        'color-dark-blue-hover': '#1e3a8a',
        'color-sky-blue': '#DBEDF4',
        'color-gray': '#4E4E4E',
        'color-light-gray': '#2E2E2E',
        'color-light-sky': '#F0FBFF',
        'color-green': '#5CBF54',
        'color-green-hover': '#4FAF4F',
        'color-blue': '#51BAE7',
        'color-light-red': '#F6CFD0',
        'color-yellow': '#E39735',
        'color-light-yellow': '#FEEDCD'
      },
      fontWeight: {
        normal: '300'
      },
      fontSize: {
        8: '8px',
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        25: '25px',
        26: '26px',
        32: '32px',
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px'
      },
      animation: {
        'modal-enter': 'modal-enter 0.15s ease-out'
      },
      keyframes: {
        'modal-enter': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
    },
    screens: {
      xsm: '380px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1580px',
      xxxl: '2080px'
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
    }
  ]
}
