import { CartItem } from '@/interfaces/CartItem'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
}

export function addItemAction(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: { item },
  }
}

export function deleteItemAction(id: string) {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: { id },
  }
}
