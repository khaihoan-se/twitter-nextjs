/** @format */

import React from 'react'
import Image from '../Image'

const EventBanner = () => {   
   return (
      <React.Fragment>
         <div className="h-[350px] bg-slate-700 relative">
            <Image src='/img/banne_event.jpg' priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill alt="avatar" className='md:object-fill object-cover' />
            <div className='w-full h-full flex justify-end absolute inset-0 py-3 px-4 flex-col z-30'>
               <div className='text-[13px] text-white font-bold'>
                  <span>Genshin Impact</span>
               </div>
               <div className='text-[20px] text-white font-bold my-1'>
                  <span>COP27: How the world is doing on climate targets and what to expect at this year’s climate summit</span>
               </div>
            </div>
            <div className='banner__overlay absolute inset-0 z-20'></div>
         </div>
      </React.Fragment>
   )
}

export default React.memo(EventBanner)
