/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "var(--white)",
      black: "var(--black)",
      // background: "var(--background)", // Superseded
      // foreground: "var(--foreground)", // Superseded
      primary: {
        50: "var(--primary-50)",
        100: "var(--primary-100)",
        200: "var(--primary-200)",
        300: "var(--primary-300)",
        400: "var(--primary-400)",
        500: "var(--primary-500)",
        600: "var(--primary-600)",
        700: "var(--primary-700)",
        800: "var(--primary-800)",
        900: "var(--primary-900)",
      },
      secondary: {
        50: "var(--secondary-50)",
        100: "var(--secondary-100)",
        200: "var(--secondary-200)",
        300: "var(--secondary-300)",
        400: "var(--secondary-400)",
        500: "var(--secondary-500)",
        600: "var(--secondary-600)",
        700: "var(--secondary-700)",
        800: "var(--secondary-800)",
        900: "var(--secondary-900)",
      },
      neutral: {
        50: "var(--neutral-50)",
        100: "var(--neutral-100)",
        200: "var(--neutral-200)",
        300: "var(--neutral-300)",
        400: "var(--neutral-400)",
        500: "var(--neutral-500)",
        600: "var(--neutral-600)",
        700: "var(--neutral-700)",
        800: "var(--neutral-800)",
        900: "var(--neutral-900)",
      },

      // Semantic color groups using CSS variables from globals.css
      background: {
        primary: 'var(--background-primary)',
        secondary: 'var(--background-secondary)',
        tertiary: 'var(--background-tertiary)',
      },
      text: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
      },
      border: {
        primary: 'var(--border-primary)',
        secondary: 'var(--border-secondary)',
      },
      button: {
        primary: {
          base: 'var(--button-primary-base-bg)', // Background color
          text: 'var(--button-primary-base-text)', // Text color
          hover: 'var(--button-primary-hover-bg)', // Background color on hover
        },
        secondary: {
          base: 'var(--button-secondary-base-bg)',
          text: 'var(--button-secondary-base-text)',
          hover: 'var(--button-secondary-hover-bg)',
        },
        outline: {
          base: 'var(--button-outline-base-text)', // This is the text color
          hover: 'var(--button-outline-hover-bg)', // This is the background color on hover
          border: 'var(--button-outline-base-border)', // Border color
        },
      },
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.text.secondary'), // Was var(--tw-prose-body)
            '[class~="lead"]': {
              color: theme('colors.text.tertiary'), // Was var(--tw-prose-lead)
            },
            a: {
              color: theme('colors.primary.600'), // Was var(--tw-prose-links)
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.primary.700'),
              },
            },
            strong: {
              color: theme('colors.text.primary'), // Was var(--tw-prose-bold)
              fontWeight: '600',
            },
            'ol[type="A"]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a"]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="A" s]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a" s]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="I" s]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i" s]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="1"]': {
              '--list-counter-style': 'decimal',
            },
            'ol > li': {
              position: 'relative',
            },
            'ol > li::before': {
              content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
              position: 'absolute',
              fontWeight: '400',
              color: theme('colors.text.tertiary'), // Was var(--tw-prose-counters)
            },
            'ul > li': {
              position: 'relative',
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.border.primary'), // Was var(--tw-prose-bullets)
              borderRadius: '50%',
            },
            hr: {
              borderColor: theme('colors.border.secondary'), // Was var(--tw-prose-hr)
              borderTopWidth: 1,
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: theme('colors.text.tertiary'), // Was var(--tw-prose-quotes)
              borderLeftWidth: '0.25rem',
              borderLeftColor: theme('colors.border.primary'), // Was var(--tw-prose-quote-borders)
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            'blockquote p:first-of-type::before': {
              content: 'open-quote',
            },
            'blockquote p:last-of-type::after': {
              content: 'close-quote',
            },
            h1: {
              color: theme('colors.text.primary'), // Was var(--tw-prose-headings)
              fontWeight: '800',
            },
            'h1 strong': {
              color: theme('colors.text.primary'), // Ensure consistency
              fontWeight: '900',
            },
            h2: {
              color: theme('colors.text.primary'), // Was var(--tw-prose-headings)
              fontWeight: '700',
            },
            'h2 strong': {
              color: theme('colors.text.primary'),
              fontWeight: '800',
            },
            h3: {
              color: theme('colors.text.primary'), // Was var(--tw-prose-headings)
              fontWeight: '600',
            },
            'h3 strong': {
              color: theme('colors.text.primary'),
              fontWeight: '700',
            },
            h4: {
              color: theme('colors.text.primary'), // Was var(--tw-prose-headings)
              fontWeight: '600',
            },
            'h4 strong': {
              color: theme('colors.text.primary'),
              fontWeight: '700',
            },
            'figure > *': {
              margin: '0',
            },
            figcaption: {
              color: theme('colors.text.tertiary'), // Was var(--tw-prose-captions)
            },
            code: {
              color: theme('colors.primary.700'), // Was var(--tw-prose-code), made it a bit darker primary
              fontWeight: '600',
              backgroundColor: theme('colors.background.tertiary'), // Added subtle background to code elements
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
            },
            'code::before': {
              content: '""', // Removed backticks for inline code to avoid double backticks with pre/code
            },
            'code::after': {
              content: '""', // Removed backticks
            },
            'a code': { // Link code should inherit link color
              color: theme('colors.primary.600'),
              backgroundColor: theme('colors.primary.50'), // Subtle bg for linked code
            },
            pre: {
              color: theme('colors.neutral.800'),         // Was var(--tw-prose-pre-code) -> light theme text on light bg
              backgroundColor: theme('colors.neutral.100'), // Was var(--tw-prose-pre-bg) -> light theme bg
              overflowX: 'auto',
              fontWeight: '400',
              padding: theme('spacing.4'), // Added padding
              borderRadius: theme('borderRadius.md'), // Added border radius
            },
            '.dark pre': { // Specific overrides for pre in dark mode
                color: theme('colors.neutral.200'),
                backgroundColor: theme('colors.neutral.800'),
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: 'inherit',
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
            'pre code::before': {
              content: 'none',
            },
            'pre code::after': {
              content: 'none',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
              marginTop: '2em',
              marginBottom: '2em',
            },
            thead: {
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.border.secondary'), // Was var(--tw-prose-th-borders)
            },
            'thead th': {
              color: theme('colors.text.primary'), // Was var(--tw-prose-headings)
              fontWeight: '600',
              verticalAlign: 'bottom',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.border.primary'), // Was var(--tw-prose-td-borders)
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tbody td': {
              verticalAlign: 'baseline',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}; 