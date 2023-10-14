import { GetServerSideProps } from 'next'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from '@/lib/stripe'

import { HomeContainer, Product } from '@/styles/pages/home'

import camisa1 from '../assets/camisas/1.png'
import camisa2 from '../assets/camisas/2.png'
import camisa3 from '../assets/camisas/3.png'
import camisa4 from '../assets/camisas/4.png'

import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({ slides: { perView: 3, spacing: 48 } })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product className="keen-slider__slide" key={product.id}>
          <Image src={product.imageUrl} alt={''} width={520} height={480} />
          <footer>
            <strong>{product.name}</strong>
            <span>R$ {product.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount! / 100,
    }
  })

  console.log(products)

  return {
    props: {
      products,
    },
  }
}
