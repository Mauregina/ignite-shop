export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
}

interface CartItem {
  id: string
  name: string
  imageUrl: string
  price: number
  priceFormatted: string
  description: string
  defaultPriceId: string
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
