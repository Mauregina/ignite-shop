import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { HomeContainer, Product } from '@/styles/pages/home'

import camisa1 from '../assets/camisas/1.png'
import camisa2 from '../assets/camisas/2.png'
import camisa3 from '../assets/camisas/3.png'
import camisa4 from '../assets/camisas/4.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({ slides: { perView: 3, spacing: 48 } })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camisa1} alt={''} width={520} height={480} />
        <footer>
          <strong>Camisa 1</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa2} alt={''} width={520} height={480} />
        <footer>
          <strong>Camisa 2</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa3} alt={''} width={520} height={480} />
        <footer>
          <strong>Camisa 3</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa4} alt={''} width={520} height={480} />
        <footer>
          <strong>Camisa 4</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
