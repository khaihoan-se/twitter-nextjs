/** @format */

import classNames from 'classnames'
import React from 'react'
import AppleIcon from '../icons/login/AppleIcon'
import Button from './Button'

interface AppleButtonProps {
   className?: string
}
const AppleButton: React.FC<AppleButtonProps> = ({ className }) => {
   return (
      <Button className={classNames(
         'border-[1px] border-border-color-button-login rounded-full bg-white',
         className
      )}>
         <div className='w-full flex items-center justify-center'>
            <div className='min-h-[18px] w-[18px] min-w-[18px] mr-1'>
               <AppleIcon className='w-full h-full text-[#0f1419]' />
            </div>
            <div className='font-bold text-[15px] text-[#0f1419]'>
               <span>Sign up with Apple</span>
            </div>
         </div>
      </Button>
   )
}

export default AppleButton
