/** @format */

import '@/styles/index.css'
import type { AppProps } from 'next/app'
import BaseLayout from '@/components/layouts/BaseLayout'
import React from 'react'
import store from '@/contexts/store'
import { Provider } from 'react-redux'

function App({ Component, pageProps }: AppProps) {
   const getLayout =
      // @ts-ignore
      Component.getLayout || ((page) => <BaseLayout>{page}</BaseLayout>)

   return (
      <Provider store={store}>
         <React.Fragment>
            {getLayout(<Component {...pageProps} />)}
         </React.Fragment>
      </Provider>
   )
}

export default App
