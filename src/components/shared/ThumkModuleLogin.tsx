/** @format */

import React from 'react'
import Button from './Button'
import BaseButton from './Button/BaseButton';
// import { useTranslation } from 'next-i18next'
interface ThumkModuleLoginProps {
   onOpenLogin?: () => void;
   onOpenResgiter?: ()=> void;
}
const ThumkModuleLogin: React.FC<ThumkModuleLoginProps> = ({ onOpenLogin, onOpenResgiter }) => {
   // const {t} = useTranslation()
   return (
      <React.Fragment>
         <div className='flex justify-center py-3 fixed left-0 right-0 bottom-0 bg-main-color z-40'>
            <div className='flex justify-center w-full'>
               <div className='w-[275px]'></div>
               <div className='flex items-center justify-between w-[999px]'>
                  <div>
                     <div className='text-white font-bold text-[23px]'>
                        <span>Don’t miss what’s happening</span>
                     </div>
                     <div className='text-[13px] font-normal text-white'>
                        <span>People on Twitter are the first to know.</span>
                     </div>
                  </div>
                  <div className='mx-4 flex items-center'>
                     <BaseButton
                        label='Log in'
                        borderColor='border-white'
                        colorText='text-white'
                        className='h-[40px] mx-2'
                        onClick={onOpenLogin}
                        maxWidth={false}
                     />
                     <BaseButton
                        label='Sign up'
                        borderColor='border-white'
                        colorText='text-[#0f1419]'
                        backgroundColor='bg-white'
                        className='h-[40px] mx-2'
                        onClick={onOpenResgiter}
                        maxWidth={false}
                     />
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default React.memo(ThumkModuleLogin)
