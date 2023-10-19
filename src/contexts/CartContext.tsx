import { ReactNode, createContext, useReducer } from 'react'

import { CartItem } from '@/interfaces/CartItem'

import { addItemAction, deleteItemAction } from '@/reducers/cart/actions'
import { cartReducer } from '@/reducers/cart/reducer'

interface CartContextType {
  cart: CartItem[]
  totalQuantityCart: number
  totalValueCartFormatted: string
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, [])

  const totalQuantityCart = cart.length
  const totalValueCart = cart.reduce((total, item) => total + item.price, 0)
  const totalValueCartFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalValueCart)

  function addItem(item: CartItem) {
    dispatch(addItemAction(item))
  }

  function removeItem(id: string) {
    dispatch(deleteItemAction(id))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantityCart,
        totalValueCartFormatted,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
