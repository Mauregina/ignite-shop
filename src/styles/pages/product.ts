import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
})

export const Load = styled('div', {
  maxWidth: 1180,
  margin: '0 auto',
  height: 656,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray4',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray4',
  },

  button: {
    marginTop: 'auto',
    background: '$green',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      background: '$greenlight',
    },
  },
})
