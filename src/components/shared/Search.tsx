/** @format */

import React from 'react'
import SearchIcon from '../icons/trends/SearchIcon'

interface SearchProps {
   className?: string;
}
//mb-3 w-[350px] min-h-[32px] h-[58px] z-50 flex items-center flex-col fixed top-0 py-2 bg-bg-color
const Search: React.FC<SearchProps> = ({ className }) => {
   return (
      <div className={className}>
         <div className='items-stretch basis-0 grow flex w-full bg-bg-color-input rounded-full'>
            <div className='flex'>
               <SearchIcon className='pl-3 min-w-[32px] text-text-color-normal' />
            </div>
            <input type="text" className='bg-transparent ml-3 placeholder:text-text-color-normal w-full' placeholder='Search Twitter' />
         </div>
      </div>
   )
}

export default React.memo(Search)
