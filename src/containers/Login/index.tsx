/** @format */

import EventBanner from '@/components/shared/EventBanner'
import PageHeader from '@/components/shared/PageHeader/index'
import Page from '@/components/shared/Page'
import TrendRight from '@/components/shared/TrendRight'
import React, { useCallback, useState } from 'react'
import TrendList from '@/components/shared/TrendList'
import TrendBoxLogin from '@/components/shared/TrendBoxLogin'
import ThumkModuleLogin from '@/components/shared/ThumkModuleLogin'
import BaseModal from '@/components/shared/BaseModal'
import ModalFormLogin from '@/components/features/auth/ModalFormLogin'
import AuthApi from '@/api/authApi'
import Notify from '@/components/shared/Notify'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useDispatch } from 'react-redux'
import { dispatchLogin } from '@/contexts/actions/authAction'
import { useRouter } from 'next/router'

const initialState = { email: '', password: '' }

const LoginContainer: React.FC = () => {
   const dispatch = useDispatch()
   const router = useRouter()
   const [showModalLogin, setShowModalLogin] = useState<boolean>(false)
   const [ user, setUser ] = useState(initialState);
   const [ table, setTable ] = useState<number>(1)
   const [notify, setNotify] = useState<string>('')
   const [firstLogin, setFirstLogin] = useLocalStorage<boolean>('firstLogin', false);
   const handleToggleModalFormLogin = useCallback((key: string) => {
      if(key === 'open/login') {
         document.body.style.overflowY = 'hidden'
         setShowModalLogin(true)
         setTable(1)
      }
      if(key === 'open/resgiter') {
         document.body.style.overflowY = 'hidden'
         setShowModalLogin(true)
         setTable(3)
      }
      if(key === 'close') {
         document.body.style.overflowY = 'auto'
         setShowModalLogin(false)
      }
   }, [])
   const onCheckEmail = async () => {
      try {
         const { checkemail }: any = await AuthApi.checkEmail({ email: user.email })
         if(checkemail) {
            setTable(2)
         } else {
            setNotify("Sorry, we couldn't find your account.")
            setTimeout(() => {
               setNotify('')
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
         setShowModalLogin(false)
         document.body.style.overflowY = 'auto'
         router.push('/home')
      } catch (error: any) {
         setNotify(error.response.data.message)
         setTimeout(() => {
            setNotify('')
         }, 3000)
      }
   }
   return (
      <React.Fragment>
         <Page>
            {/* Fix Header re-render */}
            <PageHeader.HeaderPageExplore />
            <EventBanner />
            <TrendList className='mt-2 rounded-none bg-bg-color mb-[100px]' />            
         </Page>
         <TrendRight>
            <TrendBoxLogin />
         </TrendRight>
         <ThumkModuleLogin 
            onOpenLogin={() => handleToggleModalFormLogin('open/login')} 
            onOpenResgiter={() => handleToggleModalFormLogin('open/resgiter')} 
         />
         <BaseModal 
            isOpen={showModalLogin}
            bgFixed='bg-bg-modal-login'
         >
            <ModalFormLogin 
               formData={user} 
               onChange={setUser} 
               coutTable={table} 
               onClose={() => handleToggleModalFormLogin('close')}
               onCheckEmail={onCheckEmail}
               onSubmit={handleLogin}
            />
         </BaseModal>
         {notify !== '' && <Notify message={notify} />}

      </React.Fragment>
   )
}

export default LoginContainer

