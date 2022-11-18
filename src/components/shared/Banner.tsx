/** @format */

import React from 'react'
import Image from './Image'

interface BannerProps {
   url?: string
}
const Banner: React.FC<BannerProps> = ({ url }) => {
   return (
      <React.Fragment>
         <div className="outline-none cursor-pointer relative">
            <div className="block overflow-hidden">
               <div className='pb-[33.3333%] w-full block'></div>
               <div className='h-full w-full absolute inset-0'>
                  <div className='basis-auto absolute inset-0 overflow-hidden hover:opacity-95 bg-slate-400'>
                     {url === '' ? (<div className='no_banner_user absolute inset-0'></div>) : (
                        <Image  
                           src={url ? url : ''}
                           alt="avatar"
                           fill={true}
                           className='w-full h-full min-w-full max-w-full min-h-full max-h-full object-cover'
                        />
                     )}
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default React.memo(Banner)
