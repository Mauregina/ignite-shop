import { CartItem } from '@/interfaces/CartItem'
import { ActionTypes } from './actions'

export function cartReducer(state: CartItem[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      return [...state, action.payload.item]
    }
    case ActionTypes.DELETE_ITEM:
      return state.filter((i) => i.id !== action.payload.id)
    default:
      return state
  }
}
