/** @format */

import classNames from 'classnames'
import React from 'react'
import { LIST_TRENDS_OTHER } from '@/constants'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import Link from 'next/link'

interface SectionProps {
   className?: string
   children?: React.ReactNode
}

const TrendRight = React.forwardRef<HTMLDivElement, SectionProps>(
   ({ children, className }, ref) => {
      return (
         <div ref={ref} className={classNames(
            'w-[350px] mr-[10px] bg-tt-bg-color lg:block hidden',
            className
         )}>
            <div className={classNames(
               'h-full',
               className //min-h-[1477px] 
            )}>
               <div className='bottom-[-655px] sticky w-[350px]'>
                  <div className='block'>
                     <div className='pt-3 pb-[64px]'>
                        {children}


                        <div className='mb-4'>
                           <nav className='flex-wrap flex flex-row px-4'>
                              {LIST_TRENDS_OTHER.map((item, index) => (
                                 <Link href={item.path} key={index} className='text-text-color-normal pr-3 text-[13px] cursor-pointer hover:underline'>
                                    <span>{item.content}</span>
                                 </Link>
                              ))}
                              <span className='flex items-center text-text-color-normal pr-3 text-[13px] cursor-pointer hover:underline'>
                                 More 
                                 <BiDotsHorizontalRounded className='h-[15px] w-[15px] ml-[2px]' />
                              </span>
                              <span className='text-text-color-normal pr-3 text-[13px]'>© 2022 Twitter, Inc.</span>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
)

TrendRight.displayName = 'Page'

export default React.memo(TrendRight)
