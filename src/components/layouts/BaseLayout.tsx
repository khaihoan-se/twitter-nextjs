/** @format */

import React, { ReactNode, useEffect, useState } from 'react'
import Header from '@/components/partials/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import AuthApi from '@/api/authApi';
import { dispatchGetUser, dispatchLogin } from '@/contexts/actions/authAction';
import Loading from '../shared/Loading';

interface BaseLayoutProps {
   children: ReactNode;
   showHeader?: boolean;
   showTrends?: boolean;
}
const BaseLayout: React.FC<BaseLayoutProps> = ({ children, showHeader = true }) => {
   const dispatch = useDispatch()

   const [loading, setLoading] = useState<boolean>(true)

   const auth = useSelector((state: any) => state.auth)

   const [cookies, setCookie] = useCookies(['token']);

   useEffect(() => {
      const firstLogin = localStorage.getItem('firstLogin')
      firstLogin ? (async () => {
         const data: any = await AuthApi.refreshToken()         
         setCookie('token', data.accessToken)
         dispatch(dispatchLogin())
         dispatch(dispatchGetUser(data.user))
         setLoading(false)
      })() : setLoading(false)
   }, [auth.isLogged])

   if(loading) return <Loading />

   return (
      <main className='app light blue'>
         <div className='flex min-h-screen mx-auto bg-bg-color'>
            {showHeader && <Header />}
            <main className='app-content items-start shrink grow'>
               <div className='lg:w-[990px] md:w-[600px] w-full shrink grow'>
                  <div className='flex grow justify-between'>
                     {children}
                  </div>
               </div>
            </main>
         </div>
      </main>
   )
}

export default BaseLayout
