/** @format */

import ClientOnly from '@/components/shared/ClientOnly'
import Page from '@/components/shared/Page'
import PageHeader from '@/components/shared/PageHeader'
import Search from '@/components/shared/Search'
import TrendRight from '@/components/shared/TrendRight'
import { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import SetingIcon from '@/components/icons/SetingOutlineIcon'
import BanneEvent from '@/components/shared/BanneEvent'
import TrendList from '@/components/shared/TrendList'
import TrendBoxLogin from '@/components/shared/TrendBoxLogin'
import ThumkModuleLogin from '@/components/shared/ThumkModuleLogin'
import FormLogin from '@/components/features/auth/FormLogin'
import { LoginTypes } from '@/types'
import ModalAuth from '@/components/features/auth/ModalAuth'
import CloseIcon from '@/components/icons/CloseIcon';
import Logo from '@/components/shared/Logo';
import FormRegister from '@/components/features/auth/FormRegister'
import Notify from '@/components/shared/Notify'
import FormPassword from '@/components/features/auth/FormPassword'
import AuthApi from '@/api/authApi'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { dispatchLogin } from '@/contexts/actions/authAction'

const initialState = { email: '', password: '' }

const LoginPage: NextPage = () => {
   const dispatch = useDispatch()
   const router = useRouter();
   const [ showLogin, setShowLogin ] = useState<boolean>(false);
   const [ notify, setNotify ] = useState<boolean>(false);
   const [ tab, setTab ] = useState<number>(2);
   const [ user, setUser ] = useState<LoginTypes>(initialState);

   const [firstLogin, setFirstLogin] = useLocalStorage<boolean>('firstLogin', false);

   const handleShowLogin = (event: any) => {
      event.stopPropagation()
      document.body.style.overflowY = 'hidden'
      setTab(1)
      setShowLogin(true)
   }
   const handleShowRegister = (event: any) => {
      event.stopPropagation()
      document.body.style.overflowY = 'hidden'
      setTab(2)
      setShowLogin(true)
   }

   const handleChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUser({...user, [event.target.name]:event.target.value })
   }  
   
   const handleCheckEmail = async (e: any) => {
      try {
         const { checkemail }: any = await AuthApi.checkEmail({ email: user.email })
         if(checkemail) {
            setTab(2)
         } else {
            setNotify(true)
            setTimeout(() => {
               setNotify(false)
            }, 3000)
         }
      } catch (error) {
         console.log(error);
      }
   }

   const handleLogin = async () => {
      try {
         await AuthApi.login({ email: user.email, password: user.password })
         setFirstLogin(true)
         dispatch(dispatchLogin())
         setShowLogin(false)
         document.body.style.overflowY = 'auto'
         router.push('/home')
      } catch (error) {
         console.log(error);
      }
   }

   const renderAuth = (cout: number) => {
      if(cout === 1) return <FormLogin handleChangeUser={handleChangeUser} handleCheckEmail={handleCheckEmail} />
      if(cout === 2) return <FormPassword email={user.email} handleChangeUser={handleChangeUser} handleLogin={handleLogin} />
      if(cout === 3) return <FormRegister />
   }

   return (
      <React.Fragment>
         <Head>
            <title>Explore / Twitter</title>
         </Head>
         <ClientOnly>
            <Page>
               <PageHeader className='h-[53px]'>
                  <div className='flex items-center justify-between px-4 h-full'>
                     <div className='flex-1'>
                        <Search className='min-h-[32px] h-[58px] flex items-center flex-col py-2 mr-3' />
                     </div>
                     <div className='min-w-[56px] min-h-[32px] h-full flex items-center justify-end'>
                        <div className='min-w-[36px] min-h-[36px] bg-transparent outline-none rounded-full hover:bg-bg-color-header-hover flex items-center justify-center cursor-pointer'>
                           <SetingIcon className='w-5 h-5' />
                        </div>
                     </div>
                  </div>
               </PageHeader>
               <BanneEvent />
               <TrendList className='mt-2 rounded-none bg-bg-color mb-[100px]' />
            </Page>
            <TrendRight className='max-h-[500px] sticky top-0'>
               <TrendBoxLogin />
            </TrendRight>
            <ThumkModuleLogin handleShowLogin={handleShowLogin} handleShowRegister={handleShowRegister} />
            {showLogin && (
               <ModalAuth>
                     <div className='h-[53px] flex items-center justify-between w-full px-4 relative'>
                        <div className='cursor-pointer bg-transparent outline-none min-w-[36px] min-h-[36px] rounded-full flex items-center justify-center hover:bg-bg-color-header-hover'
                           onClick={() => {
                              setTab(1)
                              document.body.style.overflowY = 'auto'
                              setShowLogin(false)
                           }}
                        >
                           <CloseIcon className='w-[20px] h-[20px] text-text-color-medium' />
                        </div>
                        <div className='absolute left-1/2 translate-x-[-50%] min-w-[32px] flex items-center justify-center'>
                           <Logo className='h-[2rem] text-formlogin-logo-color' />
                        </div>
                        <div></div>
                     </div>

                     <div className='max-w-[600px] w-full mx-auto shrink grow'>
                        {renderAuth(tab)}
                     </div>
               </ModalAuth>
            )}
            {notify && <Notify message="Sorry, we couldn't find your account." />}
         </ClientOnly>
      </React.Fragment>
   )
}

export default LoginPage
