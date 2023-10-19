import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useState, useContext } from 'react'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

import {
  ImageContainer,
  Load,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

import { useRouter } from 'next/router'
import ReactLoading from 'react-loading'
import Head from 'next/head'
import { CartContext } from '../_app'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    priceFormatted: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const router = useRouter()
  const [addingItem, setAddingItem] = useState(false)
  const { isFallback } = useRouter()
  const { updateCart } = useContext(CartContext)

  if (isFallback) {
    return (
      <Load>
        <ReactLoading type="spin" />
      </Load>
    )
  }

  async function handleBuyProduct() {
    setAddingItem(true)
    updateCart(product)
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt={''} width={520} height={480} />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.priceFormatted}</span>

          <p>{product.description}</p>

          <button onClick={handleBuyProduct} disabled={addingItem}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // buscar camisa mais vendida / mais acessados

  return {
    paths: [{ params: { id: 'prod_OoRiU54s15D7xz' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id ? params.id : ''

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price
  const unitAmount = price.unit_amount ? price.unit_amount : 0

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: unitAmount / 100,
        priceFormatted: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(unitAmount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  }
}
