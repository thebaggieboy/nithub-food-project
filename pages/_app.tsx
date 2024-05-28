
import type { AppProps } from 'next/app'
import Layout from "../components/Layout"

import Providers from '../state/Providers';
import usePreviousRoute from '../hooks/usePreviousRoute'
import { HistoryProvider } from "../context/HistoryContext"

function App({ Component, pageProps }: AppProps) {

  const route = usePreviousRoute()
  

  return (
    <>
  
        <HistoryProvider value={route}>
          <Providers>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Providers>
        </HistoryProvider>

   


    </>

  )
}



export default App

