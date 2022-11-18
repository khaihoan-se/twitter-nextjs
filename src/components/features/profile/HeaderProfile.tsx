/** @format */

import ArrowLeft from '@/components/icons/profile/ArrowLeft'
import { useRouter } from 'next/router'
import React from 'react'

interface HeaderProfileProps {
   username?: string
   fullname?: string
}

const HeaderProfile: React.FC<HeaderProfileProps> = ({ username, fullname }) => {
   const router = useRouter()
   return (
      <React.Fragment>
         <div className='z-[2] cursor-pointer relative'>
            <div className='z-[2] h-[53px]'>
               <div>
                  <div className='bg-bg-page-header backdrop-blur-md h-[53px]'>
                     <div className='h-[53px] items-center justify-center flex flex-row w-full px-4 mx-auto'>
                        {/* Icon */}
                        <div className='min-h-[36px] min-w-[56px] self-stretch bg-transparent flex items-center'>
                           <div className='min-w-[36px] min-h-[36px] bg-transparent outline-none rounded-full hover:bg-bg-color-header-hover flex items-center justify-center cursor-pointer'
                              onClick={() => router.back()}
                           >
                              <ArrowLeft className='w-5 h-5 text-text-color-medium' />
                           </div>
                        </div>
                        {/* name */}
                        <div className='flex justify-center h-full shrink grow flex-col'>
                           <div className='flex items-start shrink flex-col'>
                              <h2 className='leading-6 text-[20px] shrink text-text-color-medium font-bold break-words min-w-0 py-[2px] truncate max-w-full'>
                                 <div className='outline-none shrink max-w-full inline-flex'>
                                    <div className='outline-none items-center shrink flex-row max-w-full inline-flex'>
                                       <div className='outline-none shrink max-w-full inline-flex'>
                                          <div className='items-center shrink flex-row max-w-full inline-flex'>
                                             <span className='whitespace-nowrap shrink text-text-color-medium font-bold items-center break-words flex min-w-0 overflow-hidden'>
                                                <span className='break-words min-w-0 shrink max-w-full truncate'>
                                                   <span className='break-words min-w-0 shrink'>{fullname}</span>
                                                </span>
                                             </span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                              </h2>
                           </div>
                        </div>

                        <div className='min-w-[56px] min-h-[32px] self-stretch flex justify-center items-end flex-col'></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default HeaderProfile
