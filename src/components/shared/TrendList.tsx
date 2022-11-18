/** @format */

import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

interface TrendList {
   className?: string;
   classShowMore?: string;
}
const TrendList: React.FC<TrendList> = ({ className, classShowMore }) => {
   const arr = [1,2,3,4,5,6,7,8,9,10]
   return (
      <div className={classNames(
         'mb-4 rounded-2xl',
         className
      )}>
         <section>
            <div className='px-4 py-3 text-[20px] text-text-color-medium font-extrabold'>
               <span>Trends for you</span>
            </div>
            <div>
               {arr.map(item => (
                  <div key={item} className='flex items-center justify-between px-4 py-3 hover:bg-bg-color-trands-hover cursor-pointer'>
                     <div>
                        <div className='text-text-color-normal text-[13px] font-normal break-words'>
                           <span>Trending in Vietnam</span>
                        </div>
                        <div className='text-[15px] font-bold mt-1 text-text-color-medium break-words'>
                           <span>#GenshinImpact</span>
                        </div>
                        {/* 169K Tweets */}
                        <div className='text-text-color-normal text-[13px] font-normal break-words'>
                           <span>169K Tweets</span>
                        </div>
                     </div>
                     <div className='text-text-color-normal w-10 h-10 cursor-pointer rounded-full flex items-center justify-center bg-transparent hover:bg-hover-maincl-color hover:text-main-color'>
                        <BiDotsHorizontalRounded className='w-[1.25em] h-[1.25em]' />
                     </div>
                  </div>
               ))}
            </div>
            <div className={classNames(
               'px-4 py-3 hover:bg-bg-color-trands-hover cursor-pointer',
               classShowMore
            )}>
               <Link href='/i/trends'>
                  <div className='text-main-color text-[15px] font-normal'>
                     <span>Show more</span>
                  </div>
               </Link>
            </div>
         </section>
      </div>
   )
}

export default React.memo(TrendList)
