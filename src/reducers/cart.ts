interface CartItem {
  id: string
  name: string
  imageUrl: string
  price: number
  priceFormatted: string
  description: string
  defaultPriceId: string
}

export function cartReducer(state: CartItem[], action: any) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload.item]
    case 'DELETE_ITEM':
      return state.filter((i) => i.id !== action.payload.id)
    default:
      return state
  }
}
