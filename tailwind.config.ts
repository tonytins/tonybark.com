import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '.task-list-item': {
              'list-style-type': 'none'
            },
            '[type="checkbox"]': {
              'border-radius': '5px'
            }
          },
        },
      },
    }
  },

  plugins: [forms, typography]
} satisfies Config;
