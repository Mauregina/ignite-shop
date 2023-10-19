import Image from 'next/image'

import { useContext } from 'react'

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
import { CartContext } from '@/pages/_app'

export function Cart() {
  const { cart, totalQuantityCart, totalValueCartFormatted } =
    useContext(CartContext)
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
            {cart.map((item) => (
              <ProductContent key={item.id}>
                <ImageContainer>
                  <Image src={item.imageUrl} alt={''} width={95} height={95} />
                </ImageContainer>
                <ProductDetails>
                  <span>{item.name}</span>
                  <strong>{item.priceFormatted}</strong>
                  <button>Remover</button>
                </ProductDetails>
              </ProductContent>
            ))}
          </ProductsContainer>
          <Total>
            <Quantity>
              <span>Quantidade</span>
              <span>{totalQuantityCart} itens</span>
            </Quantity>
            <Value>
              <strong>Valor total</strong>
              <strong>{totalValueCartFormatted}</strong>
            </Value>
          </Total>
          <CheckoutButton>Finalizar compra</CheckoutButton>
        </CartContent>
      </DialogContent>
    </Dialog.Portal>
  )
}
