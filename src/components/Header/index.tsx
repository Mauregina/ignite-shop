import Image from 'next/image'
import Link from 'next/link'

import { useContext, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import logo from '../../assets/logo.svg'

import {
  CartButton,
  CartContent,
  CartCount,
  CartImage,
  HeaderNonCart,
  HeaderWithCart,
} from './styles'

import { Cart } from '@/components/Cart'
import { CartContext } from '@/contexts/CartContext'

interface HeaderProps {
  isCartVisible: boolean
}

export function Header({ isCartVisible }: HeaderProps) {
  const { totalQuantityCart } = useContext(CartContext)

  const [isCartOpen, setIsCartOpen] = useState(false)

  const isCartEmpty = totalQuantityCart === 0

  return (
    <>
      {isCartVisible ? (
        <HeaderWithCart>
          <Link href={'/'} prefetch={false}>
            <Image src={logo} alt="" />
          </Link>
          {isCartEmpty ? (
            <CartContent>
              <CartImage size={24} />
            </CartContent>
          ) : (
            <Dialog.Root onOpenChange={(isOpen) => setIsCartOpen(isOpen)}>
              <Dialog.Trigger asChild>
                <CartButton>
                  <CartImage size={24} />
                  <CartCount>{totalQuantityCart}</CartCount>
                </CartButton>
              </Dialog.Trigger>
              {isCartOpen && <Cart />}
            </Dialog.Root>
          )}
        </HeaderWithCart>
      ) : (
        <HeaderNonCart>
          <Image src={logo} alt="" />
        </HeaderNonCart>
      )}
    </>
  )
}
