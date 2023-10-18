import Image from 'next/image'
import Link from 'next/link'

import logo from '../../assets/logo.svg'

import { CartContent, CartCount, CartImage, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link href={'/'} prefetch={false}>
        <Image src={logo} alt="" />
      </Link>
      <CartContent>
        <Link href={'/'} prefetch={false}>
          <CartImage size={24} />
        </Link>
        <CartCount>1</CartCount>
      </CartContent>
    </HeaderContainer>
  )
}
