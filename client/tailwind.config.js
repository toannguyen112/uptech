/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './Layout//**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      'max-xl': { max: '1439px' },
      'max-lg': { max: '1023px' },
      'max-md': { max: '767px' },
      'max-sm': { max: '639px' },
      'max-xs': { max: '424px' },
    },

    extend: {
      colors: {
        primary: '#004EEB',
        secondary: '#0647C9',
        gradient: 'rgba(0, 53, 158, 1)',
        job: 'rgba(22, 38, 112, 1)',
        gray: {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        },
        orange: {
          "100": "#FE6F00",
          "100": "#ff6f00",
          "200": "#db5f00",
        },
        prime: "#4F46E5",
        blue: {
          masstricht: '#0A1B51',
          navy: '#162670',
          fdx: '#0647C9',
          light: '#0960D3',
          cyan: '#0999E8',
        },
      },

      typography: {
        DEFAULT: {
          css: {
            color: '#666',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },

      backgroundImage: {

        'banner_it': "url('/images/services/it.png')",
        'banner_christopher': "url('/images/services/christopher.png')",
        'banner_Quote_section': "url('/images/services/Quote_section.png')",
        'banner_bottom_3': "url('/images/services/banner_bottom_3.png')",
        'banner_layout_2': "url('/images/services/banner_layout_2.png')",
        'banner_layout_3': "url('/images/services/banner_layout_3.png')",
        'banner-home': "url('/images/banner_home.png')",
        'job-modal': "url('/images/jobs/job-modal.png')",
        'banner_service_footer': "url('/images/services/banner_bottom.png')",
        'banner-service': "url('/images/services/banner_service.png')",
        'banner-job-become': "url('/images/jobs/become.png')",
        'step': "url('/images/jobs/step.png')",
        'banner-about': "url('/images/about/banner_about.png')",
        'banner-blog-detail': "url('/images/blogs/banner-blog-detail.png')",
        'banner-view': "url('/images/views/banner_view.png')",
        'banner-project': "url('/images/projects/banner_project.png')",
        'banner_footer_home': "url('/images/home/Quote.png')",
        'christopher-burns': "url('/images/home/christopher-burns.png')",
        'gradient': "linear-gradient(280.5deg, #002B81 4.55%, #00359E 63.21%, #155EEF 117.82%)",
        'project-banner': "linear-gradient(280.59deg, #00359E 4.54 %, #155EEF 100 %)"
      },

      boxShadow: {
        0: '0px 4px 10px rgba(82, 82, 82, 0.15)',
        1: '0px 4px 20px rgba(0, 0, 0, 0.15)',
        "lang": "0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05)",
        "dropdown": '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'input': '0px 1px 2px rgba(16, 24, 40, 0.05)'

      },

      aspectRatio: {
        '4/3': '4 / 3',
        '2/1': '2 / 1',
        '3/1': '3 / 1',
      },

      fontFamily: {
        display: ['Graphik'],
        sans: [
          'SVN-Gilroy',
          'Roboto',
          'Averta',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '4.5rem',
          xl: '5rem',
        },
      },
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('flowbite-typography'),
      // require('@tailwindcss/typography'),
    ],
  },
}
