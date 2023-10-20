import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'

import { Container } from '@/styles/pages/app'
import { Header } from '@/components/Header'

import { CartContextProvider } from '@/contexts/CartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const isCartVisible = !pageProps.hideCart

  return (
    <Container>
      <CartContextProvider>
        <Header isCartVisible={isCartVisible} />
        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}
