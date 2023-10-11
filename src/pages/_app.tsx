import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import logo from '../assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <img src={logo.src} alt="" />
      </header>
      <Component {...pageProps} />
    </div>
  )
}
