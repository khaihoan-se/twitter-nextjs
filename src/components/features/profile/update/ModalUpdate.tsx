/** @format */

import CloseIcon from '@/components/icons/CloseIcon';
import CamaraIcon from '@/components/icons/profile/CamaraIcon';
import Banner from '@/components/shared/Banner'
import Button from '@/components/shared/Button';
import React from 'react'
import { useSelector } from 'react-redux'

interface ModalUpdateProps {
   setIsOpen: (value: boolean) => void;

}
const ModalUpdate: React.FC<ModalUpdateProps> = ({ setIsOpen }) => {
   const { user } = useSelector((state: any) => state.auth)

   const handleShowModalEdit = (event: any) => {
      event.stopPropagation();
      document.body.style.overflowY = 'auto';
      setIsOpen(false)
   }
   
   return (
      <React.Fragment>
         <div className='sm:min-h-[400px] min-h-full max-w-[80vw] max-h-[90vh] sm:h-[650px] h-full sm:min-w-[600px] min-w-full overflow-hidden z-50 shrink flex flex-col'>
            <div className='bg-bg-color sm:rounded-2xl rounded-none shrink grow overflow-y-scroll'>
               <div className='max-w-[600px] shrink grow w-full mx-auto'>
                  <div className='shrink grow flex flex-col rounded-tr-2xl'>
                     {/* Header Modal Edit */}
                     <div className='h-[53px] max-w-[600px] flex items-center justify-center flex-row w-full px-4 mx-auto'>
                        <div className='min-w-[56px] min-h-[32px] self-stretch flex justify-center items-start flex-col'>
                           <div className='min-w-[36px] min-h-[36px] flex items-center justify-center rounded-full hover:bg-bg-color-header-hover cursor-pointer'
                              onClick={handleShowModalEdit}
                           >
                              <CloseIcon className='w-5 h-5 text-text-color-medium font-bold' />
                           </div>
                        </div>
                        <div className='flex-1 flex h-full grow items-start justify-center flex-col'>
                           <h2 className='leading-6 text-[20px] text-text-color-medium font-bold py-[2px] w-full truncate'>Edit profile</h2>
                        </div>
                        <div className='min-w-[56px] min-h-[32px]'>
                           <Button className='min-h-[32px] w-full px-4 bg-bg-color-button-trands hover:bg-bg-color-hover-button-trands text-text-color-button-trands rounded-full flex items-center justify-center text-[15px] font-bold'>
                              <span>Save</span>
                           </Button>
                        </div>
                     </div>
                     {/* Body Modal Edit */}
                     <div className='pb-[64px]'>
                        {/* Banner */}
                        <div className='max-h-[200px] flex flex-col justify-center overflow-hidden'>
                           <div className='flex h-full flex-col border-[2px] border-transparent border-solid relative'>
                              <Banner url={user.banner} />
                              <div className='bg_rgba_03 absolute inset-0 w-full h-full'></div>
                              {/* Button Upload Banner */}
                              <div className='absolute inset-0 w-full h-full flex items-center justify-center'>
                                 <div className='button_edit_icon'>
                                    <CamaraIcon className='w-5 h-5 text-white' />
                                 </div>
                                 <div className='button_edit_icon'>
                                    <CloseIcon className='w-5 h-5 text-white' />
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* Avatar */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default React.memo(ModalUpdate)
