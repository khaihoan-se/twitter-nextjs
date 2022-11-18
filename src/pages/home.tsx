/** @format */

import HeadNewIcon from '@/components/icons/home/HeadNewIcon'
import ClientOnly from '@/components/shared/ClientOnly'
import FollowList from '@/components/shared/FollowList'
import Page from '@/components/shared/Page'
import PageHeader from '@/components/shared/PageHeader'
import Search from '@/components/shared/Search'
import TrendList from '@/components/shared/TrendList'
import TrendRight from '@/components/shared/TrendRight'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const HomePage: NextPage = () => {
   return (
      <React.Fragment>
         <Head>
            <title>Home / Twitter</title>
         </Head>
         <ClientOnly>
            <Page>
               <PageHeader className='h-[53px]'>
                  <div className='h-[53px] max-w-[600px] flex items-center justify-between px-4'>
                     <div className='flex items-start'>
                        <h2 className='text-text-color-medium text-[20px] font-bold break-words'>
                           <span>Home</span>
                        </h2>
                     </div>
                     <div className='min-w-[36px] min-h-[36px] bg-transparent outline-none rounded-full hover:bg-bg-color-header-hover flex items-center justify-center cursor-pointer'>
                        <HeadNewIcon className='w-5 h-5' />
                     </div>
                  </div>
               </PageHeader>
               <div>Home Page | NextJs Twitter <Link href='/'><span className='text-main-color'>Login!</span></Link></div>
            </Page>
            <TrendRight className='min-h-[1477px]'>
               <Search className='mb-3 w-[350px] min-h-[32px] h-[58px] z-50 flex items-center flex-col fixed top-0 py-2 bg-bg-color' />
               <div className='h-[53px]'></div>
               <TrendList className='bg-bg-color-trends'
                  classShowMore='hover:rounded-b-2xl'
               />
               <FollowList />
            </TrendRight>
         </ClientOnly>
      </React.Fragment>
   )
}

export default HomePage
