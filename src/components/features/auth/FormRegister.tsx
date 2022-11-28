/** @format */

import React from 'react'
import Link from 'next/link'
import Button from '@/components/shared/Button'
import AppleIcon from '@/components/icons/login/AppleIcon'
import GoogleIcon from '@/components/icons/login/GoogleIcon'

const FormRegister: React.FC = () => {
   return (
      <React.Fragment>
         <div className='py-12 min-w-[364px] max-w-[364px] px-8 m-auto bg-bg-color'>
            <div className='pb-5'>
               <h1 className='text-text-color-medium leading-9 text-[31px] font-bold'><span>Join Twitter today</span></h1>
            </div>
            <Button
               label='Sign up with Google'
               borderColor='border-border-color-button-login'
               Icon={GoogleIcon}
               className='h-[42px] flex items-center justify-center mt-3 mb-5'
               iconClassName='min-h-[18px] w-[18px] min-w-[18px] mr-1'
               backgroundColor='bg-white'
               colorText='text-[#0f1419]'
               weightText='font-normal'
            />
               <Button 
               label='Sign up with Apple'
               borderColor='border-border-color-button-login'
               Icon={AppleIcon}
               className='h-[42px] flex items-center justify-center mb-3 mt-5'
               iconClassName='min-h-[18px] w-[18px] min-w-[18px] mr-1'
               backgroundColor='bg-white'
               colorText='text-[#0f1419]'
            />
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

            <div className='w-full min-w-[36px] min-h-[36px] my-3'>
               {/* <Button className='w-full h-full bg-bg-button-next-color rounded-full'>
                  <div className='text-text-button-next-color text-[15px] font-bold'>
                     <span>Sign up with phone or email</span>
                  </div>
               </Button> */}
               <Button 
                  label='Sign up with phone or email'
                  backgroundColor='bg-bg-button-next-color'
                  colorText='text-text-button-next-color'
               />
            </div>

            <div className='text-[13px] text-text-color-normal'>
               By signing up, you agree to the 
               <Link href='/'><span className='text-main-color mx-[2px]'>Terms of Service</span></Link>
               and
               <Link href='/'><span className='text-main-color mx-[2px]'>Privacy Policy</span></Link>
               ,including
               <Link href='/'><span className='text-main-color mx-[2px]'>Cookie Use.</span></Link>
            </div>

            <div className='mt-10 text-text-color-normal text-[15px] font-normal'>
               <span>Have an account already?
                  <span className='text-main-color ml-1 hover:underline cursor-pointer'>Log in</span>
               </span>
            </div>
         </div>   
      </React.Fragment>
   )
}

export default React.memo(FormRegister)