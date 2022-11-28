/** @format */

import React from 'react'
import CardUser from './CardUser'
import Link from 'next/link'
import Button from './Button'
import BaseButton from './Button'

const FollowList = () => {
   return (
      <div className="mb-4 bg-bg-color-trends rounded-2xl">
         <section>
            <div className='px-4 py-3 text-[20px] text-text-color-medium font-extrabold'>
               <span>Who to follow</span>
            </div>
            <div>
               <div className='flex items-center justify-between px-4 py-3 hover:bg-bg-color-trands-hover cursor-pointer'>
                  <CardUser name='Genshin Impact' email='genshinimpact.vi' isHidden={false} classAvatar='w-12 h-12' />
                  {/* <Button className='button__follow'>
                     <span>Follow</span>
                  </Button> */}
                  <BaseButton
                     label='Follow'
                     maxWidth={false}
                     backgroundColor='bg-bg-color-button-trands'
                     bgHoverColor='bg-bg-color-hover-button-trands'
                     colorText='text-text-color-button-trands'
                  />
               </div>
               <div className='flex items-center justify-between px-4 py-3 hover:bg-bg-color-trands-hover cursor-pointer'>
                  <CardUser name='Genshin Impact' email='genshinimpact.vi' isHidden={false} classAvatar='w-12 h-12' />
                  <BaseButton
                     label='Follow'
                     maxWidth={false}
                     backgroundColor='bg-bg-color-button-trands'
                     bgHoverColor='bg-bg-color-hover-button-trands'
                     colorText='text-text-color-button-trands'
                  />
               </div>
               <div className='flex items-center justify-between px-4 py-3 hover:bg-bg-color-trands-hover cursor-pointer'>
                  <CardUser name='Genshin Impact' email='genshinimpact.vi' isHidden={false} classAvatar='w-12 h-12' />
                  <BaseButton
                     label='Follow'
                     maxWidth={false}
                     backgroundColor='bg-bg-color-button-trands'
                     bgHoverColor='bg-bg-color-hover-button-trands'
                     colorText='text-text-color-button-trands'
                  />
               </div>
            </div>
            <div className='px-4 py-3 hover:bg-bg-color-trands-hover cursor-pointer hover:rounded-b-2xl'>
               <Link href='/i/connect_people'>
                  <div className='text-main-color text-[15px] font-normal'>
                     <span>Show more</span>
                  </div>
               </Link>
            </div>
         </section>
      </div>
   )
}

export default FollowList
