import type { Preview } from "@storybook/react";
import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import theme from '../src/constants/theme';

export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: theme.light,
        },
        defaultTheme: 'light',
        Provider: ThemeProvider,
    })
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: '^on.*' },
  },
};

export default preview;
