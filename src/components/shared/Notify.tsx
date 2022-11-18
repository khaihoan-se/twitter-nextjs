/** @format */

import React from 'react'

interface NotifyType {
   message: string
}
const Notify: React.FC<NotifyType> = ({ message }) => {
   return (
      <div className="min-h-[40px] bg-main-color text-white py-[10px] px-[15px] rounded-md fixed bottom-10 left-1/2 translate-x-[-50%] z-50 whitespace-nowrap">
         <span>{message}</span>
      </div>
   )
}

export default Notify
