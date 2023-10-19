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

export const CartContent = styled('div', {})

export const ProductsList = styled('div', {})

export const Total = styled('div', {})

export const CheckoutButton = styled('button', {})
