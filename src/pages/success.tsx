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
        <title>Success | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Purchase Successful!</h1>
        <ProductsContainer>
          {products.map((item, index) => (
            <ImageContainer key={index}>
              <Image src={item.imageUrl} alt={''} width={120} height={110} />
            </ImageContainer>
          ))}
        </ProductsContainer>
        <p>
          <strong>{customerName}</strong>, your purchase of {totalQuantity}{' '}
          {totalQuantity === 1 ? 'shirt' : 'shirt(s)'} is already on the way to
          your home.
        </p>

        <Link href="/">Return to catalog</Link>
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
