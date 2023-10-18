import Image from 'next/image'
import Link from 'next/link'

import { useContext } from 'react'

import logo from '../../assets/logo.svg'

import { CartContent, CartCount, CartImage, HeaderContainer } from './styles'
import { CartContext } from '@/pages/_app'

export function Header() {
  const { totalQuantityCart } = useContext(CartContext)
  const isCartEmpty = totalQuantityCart === 0

  return (
    <HeaderContainer>
      <Link href={'/'} prefetch={false}>
        <Image src={logo} alt="" />
      </Link>
      <CartContent>
        {isCartEmpty ? (
          <CartImage size={24} />
        ) : (
          <>
            <Link href={'/'} prefetch={false}>
              <CartImage size={24} />
            </Link>
            <CartCount>{totalQuantityCart}</CartCount>
          </>
        )}
      </CartContent>
    </HeaderContainer>
  )
}
