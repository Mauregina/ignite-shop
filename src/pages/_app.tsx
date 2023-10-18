import type { AppProps } from 'next/app'

import { createContext, useState } from 'react'

import { globalStyles } from '@/styles/global'

import { Container } from '@/styles/pages/app'
import { Header } from '@/components/Header'

interface Cart {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

interface CartContextType {
  cart: Cart[]
  totalQuantityCart: number
}

export const CartContext = createContext({} as CartContextType)

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<Cart[]>([])
  const totalQuantityCart = cart.length

  return (
    <Container>
      <CartContext.Provider value={{ cart, totalQuantityCart }}>
        <Header />
        <Component {...pageProps} />
      </CartContext.Provider>
    </Container>
  )
}
