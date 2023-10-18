import { Handbag } from 'phosphor-react'
import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',

  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  color: '$gray4',
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const Footer = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  borderRadius: 6,
  padding: '2rem',
  background: 'rgba(0, 0, 0, 0.6)',

  transform: 'translateY(100%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',
})

export const ProductDetail = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '0.20rem',

  strong: {
    fontSize: '$lg',
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green',
  },
})

export const CartContent = styled('div', {
  borderRadius: 6,
  background: '$green',
  padding: '0.5rem',
})

export const CartImage = styled(Handbag, {
  color: '$white',
})
