import type { AppProps } from 'next/app'

import { createContext, useState } from 'react'

import { globalStyles } from '@/styles/global'

import { Container } from '@/styles/pages/app'
import { Header } from '@/components/Header'

interface CartItem {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

interface CartContextType {
  cart: CartItem[]
  totalQuantityCart: number
  updateCart: (item: CartItem) => void
}

export const CartContext = createContext({} as CartContextType)

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<CartItem[]>([])
  const totalQuantityCart = cart.length

  function updateCart(item: CartItem) {
    setCart((state) => [...state, item])
  }

  return (
    <Container>
      <CartContext.Provider value={{ cart, totalQuantityCart, updateCart }}>
        <Header />
        <Component {...pageProps} />
      </CartContext.Provider>
    </Container>
  )
}
