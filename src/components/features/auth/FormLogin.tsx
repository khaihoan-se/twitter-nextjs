/** @format */

import AppleButton from '@/components/shared/AppleButton'
import GoogleButton from '@/components/shared/GoogleButton'
import Input from '@/components/shared/Input'
import React from 'react'
import Button from '@/components/shared/Button'

interface FormLoginProps {
   handleChangeUser: any;
   handleCheckEmail: any
}
const FormLogin: React.FC<FormLoginProps> = ({ handleChangeUser, handleCheckEmail }) => {
   return (
      <React.Fragment>
         <div className='py-12 min-w-[364px] max-w-[364px] px-8 m-auto bg-bg-color'>
            <div className='pb-5'>
               <h1 className='text-text-color-medium leading-9 text-[31px] font-bold'><span>Sign in to Twitter</span></h1>
            </div>
            <GoogleButton className='w-full my-2 h-[42px]' />
            <AppleButton className='w-full h-[42px] my-2' />
            <div className='md:w-[300px] w-full max-w-[380px] my-1'>
               <div className='flex-row mx-[-4px] my-[4px] flex items-center'>
                  <div className='mx-1 justify-center basis-0 min-w-0 flex-1'>
                     <div className='bg-[#2f3336] h-[1px]'></div>
                  </div>
                  <div className='font-normal text-[15px]'>
                     <span>Or</span>
                  </div>
                  <div className='mx-1 justify-center basis-0 min-w-0 flex-1'>
                     <div className='bg-[#2f3336] h-[1px]'></div>
                  </div>
               </div>
            </div>

            <Input 
               label='Phone, email, or username'
               name='email'
               onChange={handleChangeUser}
            />
            
            <div className='w-full min-w-[36px] min-h-[36px] my-3'>
               <Button className='w-full h-full bg-bg-button-next-color rounded-full' onClick={handleCheckEmail}>
                  <div className='text-text-button-next-color text-[15px] font-bold'>
                     <span>Next</span>
                  </div>
               </Button>
            </div>

            <div className='w-full min-w-[36px] min-h-[36px] my-3'>
               <Button className='bg-transparent w-full h-full rounded-full border-[1px] border-border-button-forgot-color'>
                  <div className='text-text-color-medium text-[15px] font-bold'>
                     <span>Forgot password?</span>
                  </div>
               </Button>
            </div>

            <div className='mt-10 text-text-color-normal text-[15px] font-normal'>
               <span>Don't have an account?
                  <span className='text-main-color ml-1 hover:underline cursor-pointer'>Sign up</span>
               </span>
            </div>
         </div>     
      </React.Fragment>
   )
}

export default FormLogin