/** @format */

import EyeClose from '@/components/icons/login/EyeClose'
import EyeOpen from '@/components/icons/login/EyeOpen'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import React, { useState } from 'react'

interface FromPasswordProps {
   email?: string;
   handleLogin?: any;
   handleChangeUser?: any
}
const FormPassword: React.FC<FromPasswordProps> = ({ email, handleLogin, handleChangeUser }) => {
   const [ showPassword, setShowPassword ] = useState<boolean>(false)

   return (
      <div className='w-full h-full mx-auto flex flex-col bg-bg-color'>
         <div className='px-20'>
            <div className='text-[31px] text-text-color-medium font-bold my-5'>
               <span>Enter your password</span>
            </div>
            <div className='py-2'>
               <div className='bg-bg-color-input p-2 rounded'>
                  <label className='text-text-color-normal text-[14px]'>Phone, email, or username</label>
                  <div className='text-[17px] text-text-color-medium mt-[2px]'>
                     <span>{email}</span>
                  </div>
               </div>
            </div>

            <div>
               <div className='relative'>
                  <Input
                     label='Password'
                     type={showPassword ? 'text' : 'password'}
                     name='password'
                     onChange={handleChangeUser}
                  />
                  <div className='right-3 absolute top-1/2 translate-y-[-50%] cursor-pointer z-50' onClick={() => setShowPassword(!showPassword)}>
                     {showPassword ? <EyeClose className='w-[22px] h-[22px] text-text-color-medium' /> : <EyeOpen className='w-[22px] h-[22px] text-text-color-medium' />}
                  </div>
               </div>
               <span className='text-main-color hover:underline cursor-pointer'>Forgot password?</span>
            </div>
         </div>
         <div className='px-20 mt-48'>
            <div className='my-6 min-w-[52px] min-h-[52px]'>
               <Button 
                  shortcutKey='enter' 
                  onClick={handleLogin} 
                  label='Log in'
                  backgroundColor='bg-bg-button-next-color'
                  colorText='text-text-button-next-color'
                  className='h-[52px] px-8'
               />
            </div>

            <div className='mb-6 text-text-color-normal'>
               Don't have an account?
               <span className='ml-1 text-main-color hover:underline cursor-pointer'>Sign up</span>
            </div>
         </div>
      </div>
   )
}

export default FormPassword
