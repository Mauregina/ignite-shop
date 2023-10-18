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
})

export const CartImage = styled(Handbag, {
  color: '$gray5',
})
