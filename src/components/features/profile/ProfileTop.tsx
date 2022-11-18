/** @format */

import Banner from '@/components/shared/Banner'
import { UserType } from '@/types'
import React from 'react'
import ProfileTopAvatar from './ProfileTopAvatar'
import ProfileTopInfo from './ProfileTopInfo'

interface ProfileTopProps {
   data: UserType
}
const ProfileTop: React.FC<ProfileTopProps> = ({ data }) => {
   return (
      <React.Fragment>
         <Banner url={data?.banner} />
         <div className="mb-4 pt-3 px-4">
            <ProfileTopAvatar url={data?.avatar} idUser={data?._id} />
            <ProfileTopInfo data={data} />
         </div>
         <div>Profile Top</div>
      </React.Fragment>
   )
}

export default React.memo(ProfileTop)
