/**
 * @format
 * @type {import('tailwindcss').Config}
 */

const colors = require('tailwindcss/colors')

module.exports = {
   content: [
      './src/components/**/*.{ts,tsx,js,jsx}',
      './src/pages/**/*.{ts,tsx,js,jsx}',
   ],
   theme: {
      extend: {
         colors: {
            emerald: colors.emerald,
            fuchsia: colors.fuchsia,

            'bg-color': 'var(--bg-color)',
            'text-color-normal': 'var(--text-color-normal)',
            'text-color-medium': 'var(--text-color-medium)',
            'bd-color': 'var(--bd-color)',

            'bg-color-header-hover': 'var(--bg-color-header-hover)',
            'bg-color-header-hover-user': 'var(--bg-color-header-hover-user)',

            'bg-color-input': 'var(--bg-color-input)',
            'bg-color-trends': 'var(--bg-color-trends)',
            'bg-color-trands-hover': 'var(--bg-color-trands-hover)',
            'bg-color-button-trands': 'var(--bg-color-button-trands)',
            'bg-color-hover-button-trands': 'var(--bg-color-hover-button-trands)',
            'text-color-button-trands': 'var(--text-color-button-trands)',

            'main-color': 'var(--main-color)',
            'hover-maincl-color': 'var(--hover-maincl-color)',

            'bg-page-header': 'var(--bg-page-header)',
            'border-color-button-login': 'var(--border-color-button-login)',
            'formlogin-logo-color': 'var(--formlogin-logo-color)',
            'bg-button-next-color': 'var(--bg-button-next-color)',
            'text-button-next-color': 'var(--text-button-next-color)',
            'border-button-forgot-color': 'var(--border-button-forgot-color)',
            'bg-modal-login': 'var(--bg-modal-login)'
         },
      }
   },
   plugins: [
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/typography'),
   ],
}
