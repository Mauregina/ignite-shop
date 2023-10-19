import Image from 'next/image'

import * as Dialog from '@radix-ui/react-dialog'
import {
  CartContent,
  CheckoutButton,
  CloseButton,
  DialogContent,
  ImageContainer,
  Overlay,
  ProductContent,
  ProductDetails,
  ProductsContainer,
  Quantity,
  Total,
  Value,
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
          <ProductsContainer>
            <ProductContent>
              <ImageContainer>
                <Image
                  src="https://files.stripe.com/links/MDB8YWNjdF8xTzBvZEZIZE9yUVc0cnhXfGZsX3Rlc3RfUTdMN3BLaWR4bGxOQmN4NXE1MGViYjdE008b1rJNcV"
                  alt={''}
                  width={95}
                  height={95}
                />
              </ImageContainer>
              <ProductDetails>
                <h1>Camiseta Beyond the Limits</h1>
                <span>R$ 79,90</span>
                <button>Remover</button>
              </ProductDetails>
            </ProductContent>
          </ProductsContainer>
          <Total>
            <Quantity>
              <span>Quantidade</span>
              <span>3 itens</span>
            </Quantity>
            <Value>
              <strong>Valor total</strong>
              <strong>R$ 270,00</strong>
            </Value>
          </Total>
          <CheckoutButton>Finalizar compra</CheckoutButton>
        </CartContent>
      </DialogContent>
    </Dialog.Portal>
  )
}
