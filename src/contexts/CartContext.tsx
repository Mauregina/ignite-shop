import { ReactNode, createContext, useReducer } from 'react'

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

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer((state: CartItem[], action: any) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return [...state, action.payload.item]
      case 'DELETE_ITEM':
        return state.filter((i) => i.id !== action.payload.id)
      default:
        return state
    }
  }, [])

  const totalQuantityCart = cart.length
  const totalValueCart = cart.reduce((total, item) => total + item.price, 0)
  const totalValueCartFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalValueCart)

  function updateCart(item: CartItem) {
    dispatch({
      type: 'ADD_ITEM',
      payload: { item },
    })
  }

  function removeItem(id: string) {
    dispatch({
      type: 'DELETE_ITEM',
      payload: { id },
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantityCart,
        totalValueCartFormatted,
        updateCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}