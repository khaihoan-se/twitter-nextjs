/** @format */

import ClientOnly from '@/components/shared/ClientOnly'
import Page from '@/components/shared/Page'
import TrendRight from '@/components/shared/TrendRight'
import { NextPage } from 'next'
import React from 'react'

const MessagesPage: NextPage = () => {
   return (
      <React.Fragment>
         <ClientOnly>
            <Page>
               <div>MessagesPage Page | NextJs Twitter</div>
            </Page>
            <TrendRight></TrendRight>
         </ClientOnly>
      </React.Fragment>
   )
}

export default MessagesPage
