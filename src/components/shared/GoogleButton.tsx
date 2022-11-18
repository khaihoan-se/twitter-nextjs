/** @format */

import classNames from 'classnames'
import React from 'react'
import GoogleIcon from '../icons/login/GoogleIcon'
import Button from './Button'

interface GoogleButtonProps {
   className?: string
}
const GoogleButton: React.FC<GoogleButtonProps> = ({ className }) => {
   return (
      <Button className={classNames(
         'border-[1px] border-border-color-button-login rounded-full bg-white',
         className
      )}>
         <div className='w-full flex items-center justify-center'>
            <div className='min-h-[18px] w-[18px] min-w-[18px] mr-1'>
               <GoogleIcon className='w-full h-full' />
            </div>
            <div className='text-[#0f1419]'>
               <span>Sign up with Google</span>
            </div>
         </div>
      </Button>
   )
}

export default GoogleButton
