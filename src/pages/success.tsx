import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import { GetServerSideProps } from 'next'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

import {
  ImageContainer,
  ProductsContainer,
  SuccessContainer,
} from '@/styles/pages/success'

interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
    quantity: number
  }[]
  hideCart: boolean
}

export default function Success({ customerName, products }: SuccessProps) {
  const totalQuantity = products.reduce((total, item) => {
    return (total += item.quantity)
  }, 0)

  return (
    <>
      <Head>
        <title>Compra efetuada| Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra Efetuada!</h1>
        <ProductsContainer>
          {products.map((item, index) => (
            <ImageContainer key={index}>
              <Image src={item.imageUrl} alt={''} width={120} height={110} />
            </ImageContainer>
          ))}
        </ProductsContainer>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {totalQuantity}{' '}
          {totalQuantity === 1 ? 'camiseta' : 'camiseta(s)'} já está à caminho
          da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
    ? session.customer_details.name
    : ''
  const products = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product
    return {
      name: product.name,
      imageUrl: product.images[0],
      quantity: item.quantity,
    }
  })

  return {
    props: {
      customerName,
      products,
      hideCart: true,
    },
  }
}
