import type { Preview } from "@storybook/react";
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Override the default dark theme
      dark: {
        appBg: '#1a1a1a',
        appContentBg: '#1a1a1a',
        barBg: '#1a1a1a',
        brandTitle: 'CAESAR OOH MEDIA',
        brandUrl: '/',
      },
      // Override the default light theme
      light: {
        appBg: '#ffffff',
        appContentBg: '#ffffff',
        barBg: '#ffffff',
        brandTitle: 'CAESAR OOH MEDIA',
        brandUrl: '/',
      },
      // Set the initial theme
      current: 'light',
      // Enable dark mode features
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
      stylePreview: true,
    },
  },
};

export default preview; 