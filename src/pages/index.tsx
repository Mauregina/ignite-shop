import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

import {
  CartContent,
  CartImage,
  Footer,
  HomeContainer,
  Product,
  ProductDetail,
} from '@/styles/pages/home'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({ slides: { perView: 3, spacing: 48 } })
  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Product className="keen-slider__slide" key={product.id}>
            <Image src={product.imageUrl} alt={''} width={520} height={480} />
            <Footer>
              <ProductDetail>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </ProductDetail>
              <Link href={`product/${product.id}`} prefetch={false}>
                <CartContent>
                  <CartImage size={30} weight="bold" />
                </CartContent>
              </Link>
            </Footer>
          </Product>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    const unitAmount = price.unit_amount ? price.unit_amount : 0

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(unitAmount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
