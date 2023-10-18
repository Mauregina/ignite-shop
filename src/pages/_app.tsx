import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'

import { globalStyles } from '@/styles/global'

import logo from '../assets/logo.svg'
import { CartContent, CartImage, Container, Header } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={'/'} prefetch={false}>
          <Image src={logo} alt="" />
        </Link>
        <Link href={'/'} prefetch={false}>
          <CartContent>
            <CartImage size={24} />
          </CartContent>
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
