import Image from 'next/image'

import { HomeContainer, Product } from '@/styles/pages/home'

import camisa1 from '../assets/camisas/1.png'
import camisa2 from '../assets/camisas/2.png'
import camisa3 from '../assets/camisas/3.png'
import camisa4 from '../assets/camisas/4.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camisa1} alt={''} width={520} height={480} />
        <footer>
          <strong>Camisa 1</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camisa2} alt={''} width={520} height={480} />
        <footer>
          <strong>Camisa 2</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
