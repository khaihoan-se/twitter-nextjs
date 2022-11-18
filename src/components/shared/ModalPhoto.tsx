/** @format */

import classNames from 'classnames'
import React from 'react'
import CloseIcon from '../icons/CloseIcon';
import Image from './Image';

interface ModalPhotoProps {
   url: string;
   className?: string;
   setShowAvatar: any;
}
const ModalPhoto: React.FC<ModalPhotoProps> = ({ url, className, setShowAvatar }) => {   
   return (
      <React.Fragment>
         <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50">
            <div className='flex items-center justify-center absolute left-0 top-0 p-3 z-50'>
               <div className='min-w-[36px] min-h-[36px] rounded-full bg-slate-800 flex items-center justify-center z-50 cursor-pointer'
                  onClick={() => setShowAvatar(false)}
               >
                  <CloseIcon className='w-5 h-5 text-white' />
               </div>
            </div>
            <div id='bg' className="color-auttt w-full h-full z-40 absolute inset-0"></div>
            <div className={classNames(
               'z-50',
               className
            )}>
               {url && <Image
                  src={url}
                  alt="avatar"
                  fill={true}
                  className='w-full h-full min-w-full max-w-full min-h-full max-h-full object-cover'
               />}
            </div>
         </div>
      </React.Fragment>
   )
}

export default React.memo(ModalPhoto)
