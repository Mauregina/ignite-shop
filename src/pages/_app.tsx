import type { AppProps } from 'next/app'

import { createContext, useState } from 'react'

import { globalStyles } from '@/styles/global'

import { Container } from '@/styles/pages/app'
import { Header } from '@/components/Header'

interface CartItem {
  id: string
  name: string
  imageUrl: string
  price: number
  priceFormatted: string
  description: string
  defaultPriceId: string
}

interface CartContextType {
  cart: CartItem[]
  totalQuantityCart: number
  totalValueCartFormatted: string
  updateCart: (item: CartItem) => void
  removeItem: (id: string) => void
}

export const CartContext = createContext({} as CartContextType)

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<CartItem[]>([])
  const totalQuantityCart = cart.length

  const totalValueCart = cart.reduce((total, item) => total + item.price, 0)
  const totalValueCartFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalValueCart)

  function updateCart(item: CartItem) {
    setCart((state) => [...state, item])
  }

  function removeItem(id: string) {
    setCart((state) => state.filter((i) => i.id !== id))
  }

  return (
    <Container>
      <CartContext.Provider
        value={{
          cart,
          totalQuantityCart,
          totalValueCartFormatted,
          updateCart,
          removeItem,
        }}
      >
        <Header />
        <Component {...pageProps} />
      </CartContext.Provider>
    </Container>
  )
}
