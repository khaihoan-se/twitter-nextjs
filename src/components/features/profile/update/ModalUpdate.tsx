/** @format */

import AuthApi from '@/api/authApi';
import UserApi from '@/api/userApi';
import CloseIcon from '@/components/icons/CloseIcon';
import CamaraIcon from '@/components/icons/profile/CamaraIcon';
import Banner from '@/components/shared/Banner'
import BaseInput from '@/components/shared/BaseInput';
import Button from '@/components/shared/Button';
import Image from '@/components/shared/Image';
import { dispatchGetUser } from '@/contexts/actions/authAction';
import { debounce } from '@/utils';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux'

interface ModalUpdateProps {
   setIsOpen: (value: boolean) => void;

}

const ModalUpdate: React.FC<ModalUpdateProps> = ({ setIsOpen }) => {
   const dispatch = useDispatch()
   const { user } = useSelector((state: any) => state.auth)
   const [cookies, setCookie] = useCookies(['token']);
   const [fullname, setFullname] = useState(user.fullname)
   const [bio, setBio] = useState(user.bio)
   const [location, setLocation] = useState(user.location)
   const [link, setLink] = useState(user.link)

   const handleShowModalEdit = (event: any) => {
      event.stopPropagation();
      document.body.style.overflowY = 'auto';
      setIsOpen(false)
   }
   const handleChangeFullname = debounce((event: React.ChangeEvent<HTMLInputElement>) =>{
      setFullname(event.target.value)
   }, 500)
   const handleChangeBio = debounce((event: React.ChangeEvent<HTMLInputElement>) =>{
      setBio(event.target.value)
   }, 500)
   const handleChangeLocation = debounce((event: React.ChangeEvent<HTMLInputElement>) =>{
      setLocation(event.target.value)
   }, 500)
   const handleChangeLink = debounce((event: React.ChangeEvent<HTMLInputElement>) =>{
      setLink(event.target.value)
   }, 500)

   const handleSubmitUpdate = async (event: any) => {
      try {
         event.stopPropagation();
         const res: any = await AuthApi.refreshToken()         
         setCookie('token', res.accessToken)
         const data = await UserApi.updateUser(res.accessToken, {fullname, bio, location, link} , user._id)
         dispatch(dispatchGetUser(data))
         document.body.style.overflowY = 'auto';
         setIsOpen(false)
         console.log(data);
      } catch (error) {
         console.log(error);
      }
   }   
   
   return (
      <React.Fragment>
         <div className='sm:min-h-[400px] min-h-full max-w-[80vw] max-h-[90vh] sm:h-[650px] h-full sm:min-w-[600px] min-w-full overflow-hidden z-50 shrink flex flex-col'>
            <div className='bg-bg-color sm:rounded-2xl rounded-none shrink grow overflow-y-scroll'>
               <div className='max-w-[600px] shrink grow w-full mx-auto'>
                  <div className='shrink grow flex flex-col rounded-tr-2xl'>
                     {/* Header Modal Edit */}
                     <div className='h-[53px] max-w-[600px] flex items-center justify-center flex-row w-full px-4 mx-auto sticky top-0 z-50 bg-bg-page-header backdrop-blur-lg'>
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
                           <Button className='min-h-[32px] w-full px-4 bg-bg-color-button-trands hover:bg-bg-color-hover-button-trands text-text-color-button-trands rounded-full flex items-center justify-center text-[15px] font-bold'
                              onClick={handleSubmitUpdate}
                           >
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
                                 <div className='button_edit_icon relative'>
                                    <CamaraIcon className='w-5 h-5 text-white cursor-pointer' />
                                    <input type='file' className='absolute inset-0 w-full h-full opacity-0 cursor-pointer' />
                                 </div>
                                 <div className='button_edit_icon'>
                                    <CloseIcon className='w-5 h-5 text-white' />
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* Avatar */}
                        <div className='max-w-[8rem] mt-[-3rem] ml-[1rem] w-1/4 flex justify-center bg-bg-color border-[2px] border-bg-color overflow-hidden rounded-full flex-col relative'>
                           <div className='flex-col border-[2px] border-transparent flex rounded-full relative'>
                              <div className='grow relative'>
                                 <div className='block h-full w-full overflow-visible'>
                                    <div className='pb-[100%] w-full block'></div>
                                    <div className='h-full w-full absolute inset-0 block'>
                                       <div className='translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 w-full h-full absolute overflow-visible block'>
                                          <div className='pb-[-100%] w-full block'></div>
                                          <div className='w-full h-full absolute inset-0 block overflow-hidden cursor-pointer'>
                                             <div className='absolute rounded-full overflow-hidden w-full h-full'>
                                                {user.avatar && <Image  
                                                   src={user?.avatar}
                                                   alt="avatar"
                                                   fill={true}
                                                   className='w-full h-full min-w-full max-w-full min-h-full max-h-full object-cover'
                                                />}
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className='bg_rgba_03 h-full w-full absolute top-0 rounded-full'></div>
                                 <div className='opacity-75 justify-center items-center flex flex-col h-full w-full absolute top-0'>
                                    <div className='button_edit_icon relative'>
                                       <CamaraIcon className='w-5 h-5 text-white cursor-pointer' />
                                       <input type='file' className='absolute inset-0 w-full h-full opacity-0 cursor-pointer' />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* Name */}
                        <div className='py-3 px-4'>
                           <BaseInput 
                              type='INPUT' 
                              label='Name'
                              maxLength={50} 
                              name='fullname' 
                              defaultValue={fullname} 
                              onChange={handleChangeFullname}    
                           />
                        </div>
                        <div className='py-3 px-4'>
                           <BaseInput 
                              type='TEXTAREA' 
                              label='Bio'
                              classNameInput='min-h-[75px]'
                              name='bio'
                              defaultValue={bio}
                              maxLength={160}
                              onChange={handleChangeBio}
                           />
                        </div>
                        <div className='py-3 px-4'>
                           <BaseInput 
                              type='INPUT' 
                              maxLength={30} 
                              name='location' 
                              label='Location' 
                              defaultValue={location} 
                              onChange={handleChangeLocation} 
                           />
                        </div>
                        <div className='py-3 px-4'>
                           <BaseInput type='INPUT' maxLength={100} name='link' label='Website' defaultValue={link} onChange={handleChangeLink} />
                        </div>
                        <div className='py-3 px-4'>
                           <div className='flex flex-row items-center'>
                              <div className='text-text-color-normal font-normal text-[15px] leading-5 break-words min-w-0'>
                                 <span>Birth date</span>
                              </div>
                              <div className='text-text-color-normal font-normal text-[15px] leading-5 break-words min-w-0 px-1'>
                                 <span>·</span>
                              </div>
                              <div className='text-main-color font-normal text-[15px] leading-5 break-words min-w-0 hover:underline cursor-pointer'>
                                 <span>Edit</span>
                              </div>
                           </div>
                           <div className='leading-6 text-[20px] text-text-color-medium font-normal break-words min-w-0'>
                              <span>{user.birth ? user.birth : 'Add your date of birth'}</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default React.memo(ModalUpdate)
