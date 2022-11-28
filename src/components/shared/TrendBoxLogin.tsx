/** @format */

import Link from 'next/link'
import React from 'react'
import AppleIcon from '../icons/login/AppleIcon'
import GoogleIcon from '../icons/login/GoogleIcon'
import Button from './Button'
import Typography from './Typography'

const TrendBoxLogin = () => {
   return (
      <div className='border-[1px] border-bd-color rounded-2xl mb-4'>
         <div className='px-4 py-3 font-bold text-[20px] text-text-color-medium'>
            <Typography variant='span' label='New to Twitter?' />
         </div>
         <div className='px-4 text-[13px] text-text-color-normal'>
            <Typography variant='span' label='Sign up now to get your own personalized timeline!' />
         </div>
         <div className='mx-4 my-2'>
            <Button
               label='Sign up with Google'
               borderColor='border-border-color-button-login'
               Icon={GoogleIcon}
               className='h-[40px] flex items-center justify-center my-3'
               iconClassName='min-h-[18px] w-[18px] min-w-[18px] mr-1'
               backgroundColor='bg-white'
               colorText='text-[#0f1419]'
               weightText='font-normal'
            />
            <Button 
               label='Sign up with Apple'
               borderColor='border-border-color-button-login'
               Icon={AppleIcon}
               className='h-[40px] flex items-center justify-center my-3'
               iconClassName='min-h-[18px] w-[18px] min-w-[18px] mr-1'
               backgroundColor='bg-white'
               colorText='text-[#0f1419]'
            />
            <Button
               label='Sign up with phone or email'
               className='h-[40px] my-3'
               borderColor='border-border-button-forgot-color'
            />
            {/* <Button className='border-[1px] border-border-color-button-login w-[300px] h-[40px] mb-3 rounded-full px-4 bg-white'>
               <div className='text-[15px] font-bold text-[#0f1419] flex items-center justify-center grow'>
                  <span className='max-w-full truncate'>Sign up with phone or email</span>
               </div>
            </Button> */}
         </div>
         <div className='px-4 mb-4 text-text-color-normal font-normal text-[13px] leading-4'>
            By signing up, you agree to the 
            <Link href='/'><span className='text-main-color hover:underline ml-[2px]'>Terms of Service</span></Link> and 
            <Link href='/'><span className='text-main-color hover:underline ml-[2px]'>Privacy Policy</span></Link>, including
            <Link href='/'><span className='text-main-color hover:underline ml-[2px]'>Cookie Use</span></Link>.
         </div>
      </div>
   )
}

export default React.memo(TrendBoxLogin)
