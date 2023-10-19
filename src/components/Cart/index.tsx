import * as Dialog from '@radix-ui/react-dialog'
import {
  CartContent,
  CheckoutButton,
  CloseButton,
  DialogContent,
  Overlay,
  ProductsList,
  Total,
} from './styles'
import { X } from 'phosphor-react'

export function Cart() {
  return (
    <Dialog.Portal>
      <Overlay />
      <DialogContent>
        <CloseButton>
          <X weight="bold" size={24} />
        </CloseButton>
        <Dialog.Title>Sacola de compras</Dialog.Title>
        <CartContent>
          <ProductsList>
            <div>Item1</div>
            <div>Item2</div>
          </ProductsList>
          <Total>Total</Total>
          <CheckoutButton />
        </CartContent>
      </DialogContent>
    </Dialog.Portal>
  )
}
