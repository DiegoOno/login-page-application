import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query'

import { LoginContextProider } from '@/context/loginContext'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  
  return(
    <QueryClientProvider client={queryClient}>
      <LoginContextProider>
        <Component {...pageProps} />
      </LoginContextProider>
    </QueryClientProvider>
  )
}
