import classNames from 'classnames'
import React from 'react'
import Avatar from './Avatar'
import CardName from './CardName'

interface CardUserProps {
   name: string
   email: string
   url?: string
   isHidden?: boolean
   classAvatar?: string
}
const CardUser: React.FC<CardUserProps> = ({
   name,
   email,
   url,
   isHidden,
   classAvatar,
}) => {
   return (
      <div className="flex items-center">
         <div>
            <Avatar
               src={url ? url : '/img/benner_login_242000.png'}
               className={classAvatar}
            />
         </div>
         <div
            className={classNames(
               'mx-[12px] max-w-[129px] overflow-hidden',
               isHidden ? 'xl:block hidden' : ''
            )}>
            <CardName
               fullname={name}
               username={email}
               classFullname="max-w-full shrink text-[15px] whitespace-nowrap truncate font-bold leading-5"
               claassUsername="max-w-full shrink text-[15px] whitespace-nowrap truncate font-normal leading-5"
            />
         </div>
      </div>
   )
}

export default React.memo(CardUser)