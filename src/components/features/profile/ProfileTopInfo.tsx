/** @format */

import BirthDateIcon from '@/components/icons/profile/BirthDateIcon'
import CalendarIcon from '@/components/icons/profile/CalendarIcon'
import LinkIcon from '@/components/icons/profile/LinkIcon'
import LocationIcon from '@/components/icons/profile/LocationIcon'
import CardName from '@/components/shared/CardName'
import { UserType } from '@/types'
import { changeText, shortenedLink } from '@/utils'
import Link from 'next/link'
import React from 'react'
import ReactHtmlParser from 'react-html-parser'

interface ProfileTopInfoProps {
   data: UserType
}
const ProfileTopInfo: React.FC<ProfileTopInfoProps> = ({ data }) => {
   return (
      <React.Fragment>
         
         <div className="mt-[4px] mb-3">
            <CardName
               username={data?.username}
               fullname={data?.fullname}
               classFullname="text-[20px] leading-6 font-extrabold"
               claassUsername="text-[15px] leading-5 font-normal"
            />
         </div>

         <div className='mb-3 block'>
            <div className='text-[15px] font-normal leading-5 break-words min-w-0'>
               {/* {changeText(data?.bio)} */}
               {ReactHtmlParser(changeText(data?.bio))}
            </div>
            <div className='text-[13px] leading-4 font-normal text-main-color mt-[4px] cursor-pointer hover:underline'>
               <span>Translate bio</span>
            </div>
         </div>

         <div className='mb-3 block'>
            <div className='leading-3 text-text-color-medium font-normal text-[15px] break-words min-w-0'>
               {data.location && (
                  <span className='text-text-color-normal mr-3 break-words min-w-0 inline-block'>
                     <LocationIcon className='mr-[4px] text-text-color-normal align-text-bottom relative max-w-full h-[1.25em] break-words inline' />
                     <span className='break-words min-w-0 truncate'>{data?.location}</span>
                  </span>
               )}
               {data.link && (
                  <Link href={data?.link} target="_blank" passHref className='text-text-color-normal mr-3 break-words min-w-0 inline-block'>
                     <LinkIcon className='mr-[4px] text-text-color-normal align-text-bottom relative max-w-full h-[1.25em] break-words inline' />
                     <span className='break-words min-w-0 text-main-color truncate hover:underline'>{shortenedLink(data.link)}</span>
                  </Link>
               )}
               <span className='text-text-color-normal mr-3 break-words min-w-0 inline-block'>
                  <BirthDateIcon className='mr-[4px] text-text-color-normal align-text-bottom relative max-w-full h-[1.25em] break-words inline' />
                  <span className='break-words min-w-0 truncate'>Born April 2, 2000</span>
               </span>
               <span className='text-text-color-normal mr-3 break-words min-w-0 inline-block'>
                  <CalendarIcon className='mr-[4px] text-text-color-normal align-text-bottom relative max-w-full h-[1.25em] break-words inline' />
                  <span className='break-words min-w-0 truncate'>Joined June 2022</span>
               </span>
            </div>
         </div>

         <div className='flex-wrap flex-row flex-1 flex'>
            <div className='mr-5'>
               <span className='text-[14px] leading-4 text-text-color-medium font-bold'>7,555</span>
               <span className='text-[14px] leading-4 text-text-color-normal ml-1'>Following</span>
            </div>
            <div className='mr-5'>
               <span className='text-[14px] leading-4 text-text-color-medium font-bold'>479.4K</span>
               <span className='text-[14px] leading-4 text-text-color-normal ml-1'>Followers</span>
            </div>
         </div>
      </React.Fragment>
   )
}

export default ProfileTopInfo
