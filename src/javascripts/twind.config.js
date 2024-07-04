import { setup } from 'twind';
import { tw, css, theme } from 'twind/css';
import * as colors from 'twind/colors';

setup({
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      scOrange: colors.orange,
    },
    preflight: {
      // Import external stylesheet
      '@import': `url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap')`,
      // Declare font face
      '@font-face': [
        {
          fontFamily: 'Proxima Nova',
          fontWeight: '400',
          src: 'url(/fonts/proxima-nova/400-regular.woff) format("woff")',
        },
        {
          fontFamily: 'Proxima Nova',
          fontWeight: '500',
          src: 'url(/fonts/proxima-nova/500-medium.woff) format("woff")',
        },
      ],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: {
    btn: `
      py-2 px-4
      font-semibold
      rounded-lg shadow-md
      focus:(outline-none ring(2 indigo-400 opacity-75))
    `,
    'btn-indigo': `btn bg-indigo(500 hover:700) text-white`,
  },
});

(function setupGlobalStyles() {
  const globalStyles = css({
    ':global': {
      a: css`@apply text-green-500`,
      'a:hover': css`@apply text-red-500`,
      '.hello': css`@apply font-bold text-red-600`,
      table: {
        td: css`@apply bg-gray-500 border pd-2`,
        th: css`@apply bg-red-500 border pd-2`
      },
      button: {
        color: theme('colors.scOrange')
      }
    }
  });

  document.body.className = tw(globalStyles);
})();
