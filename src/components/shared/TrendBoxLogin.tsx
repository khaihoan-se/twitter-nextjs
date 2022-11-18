/** @format */

import Link from 'next/link'
import React from 'react'
import AppleButton from './AppleButton'
import Button from './Button'
import GoogleButton from './GoogleButton'

const TrendBoxLogin = () => {
   return (
      <div className='border-[1px] border-bd-color rounded-2xl mb-4'>
         <div className='px-4 py-3 font-bold text-[20px] text-text-color-medium'>
            <span>New to Twitter?</span>
         </div>
         <div className='px-4 text-[13px] text-text-color-normal'>
            <span>Sign up now to get your own personalized timeline!</span>
         </div>
         <div className='mx-4 my-2'>
            <GoogleButton className='w-[300px] max-w-[400px] min-w-min h-[40px] mb-3' />
            <AppleButton className='w-[300px] max-w-[400px] min-w-min h-[40px] mb-3' />
            <Button className='border-[1px] border-border-color-button-login w-[300px] h-[40px] mb-3 rounded-full px-4 bg-white'>
               <div className='text-[15px] font-bold text-[#0f1419] flex items-center justify-center grow'>
                  <span className='max-w-full truncate'>Sign up with phone or email</span>
               </div>
            </Button>
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

export default TrendBoxLogin
