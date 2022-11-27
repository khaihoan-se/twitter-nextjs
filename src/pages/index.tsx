/** @format */

import ClientOnly from '@/components/shared/ClientOnly'
import LoginContainer from '@/containers/Login'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const LoginPage: NextPage = () => {
   return (
      <React.Fragment>
         <Head>
            <title>Explore / Twitter</title>
         </Head>
         <ClientOnly>
            <LoginContainer />
         </ClientOnly>
      </React.Fragment>
   )
}

export default LoginPage
