/** @format */

import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '@/components/shared/Logo'
import TweetButton from '../icons/heades/TweetButton'
import CardUser from '../shared/CardUser'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { MENU_HEADER_LISTS_AUTH, MENU_HEADER_LISTS } from '@/constants'
import MenuItem from '../shared/MenuItem'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import MoreIcon from '../icons/heades/MoreIcon'
import { useCookies } from 'react-cookie'
import { dispatchGetUser, dispatchLogout } from '@/contexts/actions/authAction'
import { useRouter } from 'next/router'
import useLocalStorage from '@/hooks/useLocalStorage'

const Header = () => {
   const router = useRouter()
   const dispatch = useDispatch();
   const { isLogged, user } = useSelector((state: any) => state.auth)
   const [showLogout, setShowLogout] = useState<boolean>(false)
   const [cookies, setCookie, removeCookie] = useCookies(['token']);
   const [firstLogin, setFirstLogin] = useLocalStorage<boolean>('firstLogin', false);

   const handleLogout = () => {
      localStorage.clear()
      removeCookie("token")
      dispatch(dispatchLogout())
      dispatch(dispatchGetUser([]))
      router.push('/')
   }
   return (
      <header className='header md:grow grow-0 items-end flex md:justify-end justify-start z-10 select-none bg-bg-color'>
         <div className='xl:w-[275px] sm:w-[88px] w-[68px]'>
            <div className='h-full fixed top-0'>
               <div className='overflow-y-auto flex flex-col justify-between h-full xl:w-[275px] sm:w-[88px] w-[68px] px-3'>
                  {/* Top */}
                  <div className='items-start'>
                     <div className='max-w-full py-[2px]'>
                        <h1 className='min-w-[32px] self-stretch items-center cursor-pointer flex grow'>
                           <Link href='/'>
                              <span className='min-w-[52px] min-h-[52px] cursor-pointer flex items-center justify-center hover:bg-hover-maincl-color rounded-full font-bold text-[15px]'>
                                 <Logo className='h-8 w-8 text-main-color' />
                              </span>
                           </Link>
                        </h1>
                     </div>
                     <div className='w-full'>
                        {isLogged ? (
                           <nav>
                              {MENU_HEADER_LISTS.map(item => (
                                 item.page === 'Lists' ? (
                                    <MenuItem href={`/${user.username}/lists`} key={item.page} username={user.username}>
                                       {({ isActive }) => (
                                          <div className='flex items-center grow w-full'>
                                             <div className='flex items-center p-[12px] hover:bg-bg-color-header-hover rounded-full'>
                                                   <div>
                                                      {isActive ? <IconComponent Icon={item.activeIcon} /> : <IconComponent Icon={item.icon} /> }
                                                   </div>
                                                   <div className={classNames(
                                                      'mr-[16px] ml-[15px] text-[20px] text-tt-text-color xl:block hidden',
                                                      isActive && 'font-bold'
                                                   )}>
                                                      <span>{item.page}</span>
                                                   </div>
                                             </div>
                                          </div>
                                       )}
                                    </MenuItem>
                                 ) : item.page === 'Profile' ? (
                                    <MenuItem href={`/${user.username}`} key={item.page} username={user.username}>
                                       {({ isActive }) => (
                                          <div className='flex items-center grow w-full'>
                                             <div className='flex items-center p-[12px] hover:bg-bg-color-header-hover rounded-full'>
                                                   <div>
                                                      {isActive ? <IconComponent Icon={item.activeIcon} /> : <IconComponent Icon={item.icon} /> }
                                                   </div>
                                                   <div className={classNames(
                                                      'mr-[16px] ml-[15px] text-[20px] text-tt-text-color xl:block hidden',
                                                      isActive && 'font-bold'
                                                   )}>
                                                      <span>{item.page}</span>
                                                   </div>
                                             </div>
                                          </div>
                                       )}
                                    </MenuItem>
                                 ) : (
                                    <MenuItem href={item.path} key={item.page}>
                                       {({ isActive }) => (
                                          <div className='flex items-center grow w-full'>
                                             <div className='flex items-center p-[12px] hover:bg-bg-color-header-hover rounded-full'>
                                                   <div>
                                                      {isActive ? <IconComponent Icon={item.activeIcon} /> : <IconComponent Icon={item.icon} /> }
                                                   </div>
                                                   <div className={classNames(
                                                      'mr-[16px] ml-[15px] text-[20px] text-tt-text-color xl:block hidden',
                                                      isActive && 'font-bold'
                                                   )}>
                                                      <span>{item.page}</span>
                                                   </div>
                                             </div>
                                          </div>
                                       )}
                                    </MenuItem>
                                 )
                              ))}
                              <div>
                                 <div className='flex items-center grow w-full cursor-pointer'>
                                    <div className='flex items-center p-[12px] hover:bg-bg-color-header-hover rounded-full'>
                                          <div>
                                             <MoreIcon className='w-[1.75rem] h-[1.75rem]' />
                                          </div>
                                          <div className={classNames(
                                             'mr-[16px] ml-[15px] text-[20px] text-tt-text-color xl:block hidden',
                                          )}>
                                             <span>More</span>
                                          </div>
                                    </div>
                                 </div>
                              </div>
                           </nav>
                        ) : (
                           <nav>
                              {MENU_HEADER_LISTS_AUTH.map(item => (
                                 <MenuItem href={item.path} key={item.page}>
                                    {({ isActive }) => (
                                       <div className='flex items-center grow w-full'>
                                          <div className='flex items-center p-[12px] hover:bg-bg-color-header-hover rounded-full'>
                                                <div>
                                                   {isActive ? <IconComponent Icon={item.activeIcon} /> : <IconComponent Icon={item.icon} /> }
                                                </div>
                                                <div className={classNames(
                                                   'mr-[16px] ml-[15px] text-[20px] text-tt-text-color xl:block hidden',
                                                   isActive && 'font-bold'
                                                )}>
                                                   <span>{item.page}</span>
                                                </div>
                                          </div>
                                       </div>
                                    )}
                                 </MenuItem>
                              ))}
                           </nav>
                        )}
                     </div>
                     {isLogged && (
                        <div className='xl:w-[90%] w-[80%] my-[4px] mt-2'>
                           <div className='bg-main-color hover--button--color min-w-[52px] min-h-[52px] cursor-pointer p-0 rounded-full flex items-center justify-center text-[17px] text-white font-bold'>
                              <span className='xl:block hidden'>Tweet</span>
                              <TweetButton className='w-[24px] h-[24px] text-white xl:hidden block' />
                           </div>
                        </div>
                     )}
                  </div>
                  {/* Bottom */}
                  {isLogged && (
                     <div className='my-[12px] flex items-center sm:justify-between justify-center sm:p-[12px] p-0 rounded-full w-full relative hover:bg-bg-color-header-hover cursor-pointer'
                        onClick={handleLogout}
                     >
                        <div>
                           <CardUser url={user.avatar} name={user.fullname} email={user.username} isHidden={true} />
                        </div>
                        <div className='xl:block hidden'>
                           <BiDotsHorizontalRounded className='text-[20px]' />
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </header>
   )
}

interface IconProps {
   className?: string; 
}
interface IconComponentProps {
   Icon: React.ComponentType<IconProps>;
}
export const IconComponent: React.FC<IconComponentProps> = ({ Icon }) => {
   return <Icon className='w-[1.75rem] h-[1.75rem]' />
}

export default React.memo(Header)
