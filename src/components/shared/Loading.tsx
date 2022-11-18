/** @format */

import React from 'react'
import Logo from './Logo'

const Loading = () => {
   return (
      <React.Fragment>
         <div className="w-[100vw] h-[100vh] flex items-center justify-center fixed inset-0 z-50">
            <span>
               <Logo className="w-20 h-20 text-[#1d9bf0]" />
            </span>
         </div>
      </React.Fragment>
   )
}

export default Loading
