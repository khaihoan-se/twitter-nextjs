/** @format */

import '@/styles/index.css'
import type { AppProps } from 'next/app'
import BaseLayout from '@/components/layouts/BaseLayout'
import React from 'react'
import store from '@/contexts/store'
import { Provider } from 'react-redux'
// import { appWithTranslation } from "next-i18next";
// import nextI18nextConfig from "next-i18next.config";

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

// export default appWithTranslation(App, nextI18nextConfig)
