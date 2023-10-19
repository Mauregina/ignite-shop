import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.5)',
})

export const DialogContent = styled(Dialog.Content, {
  minWidth: '32rem',
  width: '30rem',
  height: '100vh',
  padding: '3rem',

  position: 'fixed',
  top: 0,
  right: 0,
  background: '$gray2',

  h2: {
    fontSize: '$lg',
    color: '$gray5',
    marginTop: '1rem',
    marginBottom: '2rem',
  },

  display: 'flex',
  flexDirection: 'column',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray3',
})

export const CartContent = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
})

export const ProductsContainer = styled('div', {
  flex: 1,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '1rem',
})

export const ProductContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '2rem',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 95,
  height: 95,
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
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '1rem',

  h1: {
    fontSize: '$md',
    color: '$gray4',
  },

  span: {
    display: 'block',
    fontSize: '$md',
    color: '$gray5',
  },

  button: {
    background: 'none',
    border: 0,
    color: '$green',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$xs',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
})

export const Total = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: '0.25rem',

  marginBottom: '3rem',
})

export const Quantity = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  span: {
    '&:last-child': {
      fontSize: '$md',
    },
  },
})

export const Value = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  strong: {
    fontSize: '$md',

    '&:last-child': {
      fontSize: '$xl',
    },
  },
})

export const CheckoutButton = styled('button', {
  width: '100%',
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
})
