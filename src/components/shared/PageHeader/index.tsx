/** @format */

import SetingIcon from '@/components/icons/SetingOutlineIcon'
import React from 'react'
import Search from '../Search'
import HeaderPageMain from './HeaderPageMain'

const HeaderPageExplore: React.FC = () => {   
   return (
      <React.Fragment>
         <HeaderPageMain>
            <div className="flex items-center justify-between px-4 h-[53px]">
               <div className='flex-1'>
                  <Search className='min-h-[32px] h-[58px] flex items-center flex-col py-2 mr-3' />
               </div>
               <div className='min-h-[32px] min-w-[56px] self-stretch justify-center items-end flex flex-col'>
                  <div className='min-w-[36px] min-h-[36px] bg-transparent outline-none rounded-full hover:bg-bg-color-header-hover flex items-center justify-center cursor-pointer'>
                     <SetingIcon className='w-5 h-5' />
                  </div>
               </div>
            </div>
         </HeaderPageMain>
      </React.Fragment>
   )
}
const HeaderPageHome = () => {
   return <div>HeaderPageHome</div>
}

const PageHeader = {
   HeaderPageExplore: HeaderPageExplore,
   HeaderPageHome: HeaderPageHome,
}

export default PageHeader
