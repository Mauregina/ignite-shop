import Image from 'next/image'
import Link from 'next/link'

import { useContext } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import logo from '../../assets/logo.svg'

import {
  CartButton,
  CartContent,
  CartCount,
  CartImage,
  HeaderContainer,
} from './styles'

import { Cart } from '@/components/Cart'
import { CartContext } from '@/contexts/CartContext'

export function Header() {
  const { totalQuantityCart } = useContext(CartContext)
  const isCartEmpty = totalQuantityCart === 0

  return (
    <HeaderContainer>
      <Link href={'/'} prefetch={false}>
        <Image src={logo} alt="" />
      </Link>

      {isCartEmpty ? (
        <CartContent>
          <CartImage size={24} />
        </CartContent>
      ) : (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <CartButton>
              <CartImage size={24} />
              <CartCount>{totalQuantityCart}</CartCount>
            </CartButton>
          </Dialog.Trigger>
          <Cart />
        </Dialog.Root>
      )}
    </HeaderContainer>
  )
}
