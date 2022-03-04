// https://tailwindcss.com/docs/installation#create-your-configuration-file
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      container: {
        center: true,
        margin: 'auto',
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px'
        }
      },
      colors: {
        'dodger-blue': {
          '50': '#ecf4ff',
          '100': '#ddeaff',
          '200': '#c2d8ff',
          '300': '#9cbdff',
          '400': '#7596ff',
          '500': '#4766ff',
          '600': '#3647f5',
          '700': '#2a37d8',
          '800': '#2531ae',
          '900': '#263289',
        },
      },
      maxWidth: {
        60: '60%'
      }
    }
  },
  variants: {},
  plugins: [],
  future: {}
}
