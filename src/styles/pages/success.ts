import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray5',
  },

  p: {
    fontSize: '$xl',
    color: '$gray4',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    fontSize: '$lg',
    color: '$green',
    marginTop: '5rem',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$greenlight',
    },
  },
})

export const ProductsContainer = styled('div', {
  marginTop: '4rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
