import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      gray1: '#121214',
      gray2: '#202024',
      gray3: '#8D8D99',
      gray4: '#C4C4CC',
      gray5: '#E1E1E6',
      white: '#FFFFFF',
      green: '#00875F',
      greenlight: '#00B37E',
    },

    fontSizes: {
      sm: '0.875rem',
      xs: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
