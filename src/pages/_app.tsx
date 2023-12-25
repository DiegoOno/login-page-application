import { LoginContextProider } from '@/context/loginContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <LoginContextProider>
      <Component {...pageProps} />
    </LoginContextProider>
  )
}
