/** @format */

import classNames from 'classnames';
import React from 'react'

interface CardNameProps {
   username: string;
   fullname: string;
   classFullname?: string;
   claassUsername?: string;
}
const CardName: React.FC<CardNameProps> = ({ username, fullname, classFullname, claassUsername }) => {
   return (
      <React.Fragment>
         <>
            <div className={classNames(
               'text-text-color-medium',
               classFullname
            )}>
               <span>{fullname}</span>
            </div>
            <div className={classNames(
               'text-text-color-normal',
               claassUsername
            )}>
               <span>@{username}</span>
            </div>
         </>
      </React.Fragment>
   )
}

export default React.memo(CardName)
