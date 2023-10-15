import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79.90</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          eum rerum assumenda repellat adipisci libero quisquam, mollitia iste!
          At modi repellat debitis magni dicta non fuga tempore iste eius eos.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
