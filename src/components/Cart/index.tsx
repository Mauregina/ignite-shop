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
import { CartContext } from '@/contexts/CartContext'

export function Cart() {
  const { cart, totalQuantityCart, removeItem } = useContext(CartContext)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const totalValueCart = cart.reduce((total, item) => total + item.price, 0)
  const totalValueCartFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalValueCart)

  function handleRemoveProduct(id: string) {
    removeItem(id)
  }

  async function handleCompletePurchase() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', [
        {
          // priceId: product.defaultPriceId,
          price: 'price_1O0op5HdOrQW4rxWpVuGicgt',
          quantity: 1,
        },
        {
          // priceId: product.defaultPriceId,
          price: 'price_1O0ooTHdOrQW4rxWd40xDd4Z',
          quantity: 2,
        },
      ])
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
            onClick={handleCompletePurchase}
            disabled={isCreatingCheckoutSession}
          >
            Finalizar compra
          </CheckoutButton>
        </CartContent>
      </DialogContent>
    </Dialog.Portal>
  )
}
