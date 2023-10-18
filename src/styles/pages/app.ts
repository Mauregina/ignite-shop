import { Handbag } from 'phosphor-react'
import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CartContent = styled('div', {
  borderRadius: 6,
  background: '$gray2',
  padding: '0.5rem',

  position: 'relative',
})

export const CartImage = styled(Handbag, {
  color: '$gray3',
})

export const CartCount = styled('span', {
  width: '1.25rem',
  height: '1.25rem',

  position: 'absolute',

  top: '-25%',
  right: '-25%',
  background: '$green',
  color: '$white',
  borderRadius: '50%',
  fontSize: '$sm',
  fontWeight: 'bold',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
