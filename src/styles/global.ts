import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: '$gray1',
    color: '$gray4',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
})
