/** @format */

import UserApi from '@/api/userApi'
import ArrowLeft from '../../components/icons/profile/ArrowLeft'
import ClientOnly from '@/components/shared/ClientOnly'
import Page from '@/components/shared/Page'
import PageHeader from '@/components/shared/PageHeader'
import TrendRight from '@/components/shared/TrendRight'
import { UserType } from '@/types'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import ProfileTop from '@/components/features/profile/ProfileTop'
import Link from 'next/link'
import FollowList from '@/components/shared/FollowList'
import Head from 'next/head'
import { useSelector } from 'react-redux'

interface ProfilePageProps {
   data: UserType;
}
const ProfilePage: NextPage<ProfilePageProps> = ({ data }) => {
   const router = useRouter()
   const { user } = useSelector((state: any) => state.auth)
   return (
      <React.Fragment>
         <Head>
            {/* Warning: A title element received an array with more than 1 element as children. 
            In browsers title Elements can only have Text Nodes as children. 
            If the children being rendered output more than a single text node in aggregate the browser 
            will display markup and comments as text in the title and hydration will likely fail and fall 
            back to client rendering */}
            {/* <title>{data.fullname} (@{data.username}) / Twitter</title> */}
            <title>{`${data.fullname} (@${data.username}) / Twitter`}</title> {/* Sucess! */}
         </Head>
         <ClientOnly>
            <Page>
               <PageHeader>
                  <div className='flex items-center h-[53px] px-4'>
                     <div className='min-h-[36px] min-w-[56px] self-stretch bg-transparent flex items-center'>
                        <div className='min-w-[36px] min-h-[36px] bg-transparent outline-none rounded-full hover:bg-bg-color-header-hover flex items-center justify-center cursor-pointer'
                           onClick={() => router.back()}
                        >
                           <ArrowLeft className='w-5 h-5 text-text-color-medium' />
                        </div>
                     </div>
                     <div className='flex-1 h-full flex justify-center flex-col grow items-start overflow-hidden'>
                        <div className='py-[2px] w-full'>
                           <h2 className='font-bold text-text-color-medium max-w-full overflow-hidden truncate whitespace-nowrap text-[20px] leading-6 tracking-wide'>{data._id === user._id ? user.fullname : data.fullname}</h2>
                        </div>
                        <div className='text-[13px] text-text-color-normal font-normal'>
                           <span>2,307 Tweets</span>
                        </div>
                     </div>
                     <div className='min-w-[56px] min-h-[32px] self-stretch flex justify-center items-end flex-col'></div>
                  </div>
               </PageHeader>

               <ProfileTop data={data._id === user._id ? user : data} />
               <div className='h-[200vh]'>Profile user | NextJs</div>
               <Link href='/miyase_mahiro'>khaihoaans</Link>
               
            </Page>
            
            <TrendRight className='min-h-[277px]'>
               <FollowList />
            </TrendRight>
         </ClientOnly>
      </React.Fragment>
   )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const { username }: any = params;
   const data: any = await UserApi.getUser(username)
   const foundItem = data.username === username
   if (!foundItem) {
      return {
         redirect: {
            destination: '/404',
            permanent: false
         }
      }
   }
   return { props: { data }, revalidate: 10 }
}

export const getStaticPaths: GetStaticPaths = async () => {
   const data: any = await UserApi.getAllUser()
   const paths = data.map((user: any) => {
      return { params: {username: user.username.toString()} }
   })
   return { paths, fallback: 'blocking' }
}

export default ProfilePage
