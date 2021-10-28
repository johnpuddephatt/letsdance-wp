const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      'safelist.txt',
      './app/**/*.php',
      './resources/**/*.{php,vue,js}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
    },
    extend: {
      colors: {
        blue: '#3e23e9',
        cyan: '#b0eee1',
        pink: '#fecdd3',
      },
      transitionDuration: {
        0: '0ms',
      },
      transitionDelay: {
        0: '0ms',
      },
      scale: {
        101: '1.01',
      },
      animation: {
        'rotate-hue': 'huerotation 2s linear infinite',
      },
      fontFamily: {
        sans: ['Karla', ...defaultTheme.fontFamily.sans],
        serif: ['Miller Display', ...defaultTheme.fontFamily.serif],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: 400,
            },
          },
        },
        light: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: '#ffffff',
            },
            h1: {
              color: '#ffffff',
            },
            strong: {
              color: '#ffffff',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
