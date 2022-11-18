/** @format */

import React from 'react'
import Button from './Button'

interface ThumkModuleLoginProps {
   handleShowLogin?: any;
   handleShowRegister?: any
}
const ThumkModuleLogin: React.FC<ThumkModuleLoginProps> = ({ handleShowLogin, handleShowRegister }) => {   
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
                     <div>
                        <Button className='border-[1px] border-white text-white px-4 h-[40px] rounded-full font-bold' 
                           onClick={handleShowLogin}
                        >
                           <span className='max-w-full truncate'>Log in</span>
                        </Button>
                     </div>
                     <div className='ml-3'>
                        <Button className='border-[1px] border-white px-4 h-[40px] rounded-full bg-white text-[#0f1419] font-bold' 
                           onClick={handleShowRegister}
                        >
                           <span className='max-w-full truncate'>Sign up</span>
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default React.memo(ThumkModuleLogin)
