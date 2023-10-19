import Image from 'next/image'

import { useContext, useState } from 'react'

import axios from 'axios'

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
  const { cart, totalQuantityCart, totalValueCartFormatted, removeItem } =
    useContext(CartContext)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  function handleRemoveProduct(id: string) {
    removeItem(id)
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        // priceId: product.defaultPriceId,
      })
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com ferramenta de observalidade (Datadog / Sentry)
      setIsCreatingCheckoutSession(false)
    }
  }

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
                  <button onClick={() => handleRemoveProduct(item.id)}>
                    Remover
                  </button>
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
          <CheckoutButton
            onClick={handleBuyProduct}
            disabled={isCreatingCheckoutSession}
          >
            Finalizar compra
          </CheckoutButton>
        </CartContent>
      </DialogContent>
    </Dialog.Portal>
  )
}
