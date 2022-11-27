/** @format */

import Image from '@/components/shared/Image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import Button from '@/components/shared/Button';
import MessageOutlineeIcon from '@/components/icons/heades/MessageOutlineIcon';
import ModalPhoto from '@/components/shared/ModalPhoto';
import Modal from '@/components/shared/Modal';
import ModalUpdate from './update/ModalUpdate';
import BaseButton from '@/components/shared/Button/BaseButton';

interface ProfileTopAvatarProps {
   url: string;
   idUser: string;
}

const ProfileTopAvatar: React.FC<ProfileTopAvatarProps> = ({ url, idUser }) => {
   const { user } = useSelector((state: any) => state.auth)
   const [showAvatar, setShowAvatar] = useState<boolean>(false)
   const [isModalEdit, setIsModalEdit] = useState<boolean>(false)

   const handleShowModalEdit = (event: any) => {
      event.stopPropagation();
      document.body.style.overflowY = 'hidden';
      setIsModalEdit(true)
   }
   
   return (
      <React.Fragment>
         <div className='flex-wrap flex justify-between items-start flex-row relative'>
            <div className='w-[25%] min-w-[48px] mt-[-15%] mb-3 h-auto overflow-visible block relative z-30'
               onClick={() => setShowAvatar(true)}
            >
               <div className='pb-[100%] w-full block'></div>
               <div className='h-full w-full absolute inset-0 block'>
                  <div className='translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 w-full h-full absolute overflow-visible block'>
                     <div className='pb-[-100%] w-full block'></div>
                     <div className='w-full h-full absolute inset-0 block overflow-hidden cursor-pointer'>
                        <div className='absolute rounded-full overflow-hidden w-full h-full border-[5px] border-bg-color'>
                           {url && <Image  
                              src={url}
                              alt="avatar"
                              fill={true}
                              className='w-full h-full min-w-full max-w-full min-h-full max-h-full object-cover'
                           />}
                           <div className='hover__avatar absolute inset-0 w-full h-full rounded-full'></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='flex justify-start flex-wrap items-end flex-row max-w-full'>
               {user._id === idUser ? (
                  // <Button className='button__edit' onClick={handleShowModalEdit}>
                  //    <span>Edit profile</span>
                  // </Button>
                  <BaseButton 
                     label='Edit profile'
                     backgroundColor='bg-bg-color'
                     bgHoverColor='bg-color-header-hover'
                     colorText='text-text-color-medium'
                     borderColor='border-border-color-button-login'
                     onClick={handleShowModalEdit}
                  />
               ) : (
                  <>
                     <div className='mr-2 mb-3'>
                        <Button className='button__circle'>
                           <span>
                              <BiDotsHorizontalRounded className='w-5 h-5 text-text-color-medium' />
                           </span>
                           <span className='hover__con hidden absolute top-[37px] left-1/2 translate-x-[-50%] text-[11px] text-white bg-slate-800 px-[4px] py-[1px] rounded-sm'>More</span>
                        </Button>
                     </div>
                     <div className='mr-2 mb-3'>
                        <Button className='button__circle'>
                           <span>
                              <MessageOutlineeIcon className='w-5 h-5 text-text-color-medium' />
                           </span>
                           <span className='hover__con hidden absolute top-[37px] left-1/2 translate-x-[-50%] text-[11px] text-white bg-slate-800 px-[4px] py-[1px] rounded-sm'>
                              Message
                           </span>
                        </Button>
                     </div>
                     <div className='mr-2 mb-3'>
                        <Button className='button__follow'>
                           <span>Follow</span>
                        </Button>
                     </div>
                  </>
               )}
            </div>
         </div>
         {showAvatar && <ModalPhoto className='m-[16px] w-[360px] h-[360px] rounded-full overflow-hidden relative' url={url} setShowAvatar={setShowAvatar} />}
         {isModalEdit && (
            <Modal>
               <ModalUpdate setIsOpen={setIsModalEdit} />
            </Modal>
         )}
      </React.Fragment>
   )
}

export default React.memo(ProfileTopAvatar)
