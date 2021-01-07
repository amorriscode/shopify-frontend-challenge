import { QueryClient, QueryClientProvider } from 'react-query'

import { NominationsProvider } from '../context/NominationsContext'

import '../styles/globals.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NominationsProvider>
        <Component {...pageProps} />
      </NominationsProvider>
    </QueryClientProvider>
  )
}

export default MyApp
