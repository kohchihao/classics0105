import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from '@chakra-ui/react';

// Chakra v1 shipped this system stack. v3 prefixes it with Inter, which this
// app does not load, so keep the previous family exactly.
const systemFont =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const config = defineConfig({
  globalCss: {
    html: {
      color: 'gray.800',
      bg: 'white',
    },
    // v3 preflight sets svg { display: block }, which stacks inline icons
    // above their labels. v1 icons sat on the text baseline.
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  },
  theme: {
    // v1 breakpoints were em-based. lg was 62em (992px), not v3's 1024px.
    breakpoints: {
      sm: '30em',
      md: '48em',
      lg: '62em',
      xl: '80em',
      '2xl': '96em',
    },
    tokens: {
      fonts: {
        heading: { value: systemFont },
        body: { value: systemFont },
      },
      colors: {
        black: { value: '#000000' },
        gray: {
          50: { value: '#F7FAFC' },
          100: { value: '#EDF2F7' },
          200: { value: '#E2E8F0' },
          300: { value: '#CBD5E0' },
          400: { value: '#A0AEC0' },
          500: { value: '#718096' },
          600: { value: '#4A5568' },
          700: { value: '#2D3748' },
          800: { value: '#1A202C' },
          900: { value: '#171923' },
        },
        blue: {
          50: { value: '#ebf8ff' },
          100: { value: '#bee3f8' },
          200: { value: '#90cdf4' },
          300: { value: '#63b3ed' },
          400: { value: '#4299e1' },
          500: { value: '#3182ce' },
          600: { value: '#2b6cb0' },
          700: { value: '#2c5282' },
          800: { value: '#2a4365' },
          900: { value: '#1A365D' },
        },
        teal: {
          50: { value: '#E6FFFA' },
          100: { value: '#B2F5EA' },
          200: { value: '#81E6D9' },
          300: { value: '#4FD1C5' },
          400: { value: '#38B2AC' },
          500: { value: '#319795' },
          600: { value: '#2C7A7B' },
          700: { value: '#285E61' },
          800: { value: '#234E52' },
          900: { value: '#1D4044' },
        },
      },
    },
    semanticTokens: {
      shadows: {
        xl: {
          value: {
            _light:
              '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            _dark:
              '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    recipes: {
      button: defineRecipe({
        base: {
          borderWidth: '0',
          fontWeight: 'semibold',
          borderRadius: 'md',
          lineHeight: '1.2',
        },
        variants: {
          size: {
            md: {
              h: '10',
              minW: '10',
              // Drop textStyle "sm". It sets line-height to 1.25rem (20px)
              // after the base 1.2, so the label sits off the v1 19.2px line.
              textStyle: 'none',
              fontSize: 'md',
              px: '4',
              gap: '2',
              lineHeight: '1.2',
              _icon: {
                width: '1em',
                height: '1em',
              },
            },
          },
        },
      }),
      link: defineRecipe({
        base: {
          display: 'inline',
          gap: '0',
          color: 'inherit',
          textDecoration: 'none',
          borderRadius: '0',
          cursor: 'pointer',
          transition: 'all 0.15s ease-out',
          _hover: {
            textDecoration: 'underline',
          },
        },
        variants: {
          variant: {
            plain: {
              color: 'inherit',
              _hover: {
                textDecoration: 'underline',
              },
            },
          },
        },
      }),
    },
  },
});

export const system = createSystem(defaultConfig, config);
