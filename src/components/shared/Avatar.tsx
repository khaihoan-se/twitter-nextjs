import React, { useState } from 'react'
import Image from '@/components/shared/Image'
import classNames from 'classnames'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
   src: string
   className?: string
}

const Avatar: React.FC<AvatarProps> = ({ src, className }) => {
   const [isLoadFailed, setIsLoadFailed] = useState(false)

   const handleImageError = () => {
      setIsLoadFailed(true)
   }

   return (
      <div
         className={classNames(
            'shrink-0 relative w-10 h-10 rounded-full',
            className
         )}>
         <Image
            onError={handleImageError}
            src={isLoadFailed ? '/fallback_profile.png' : src}
            alt="avatar"
            fill={true}
            className="rounded-full"
            priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
         />
      </div>
   )
}

export default React.memo(Avatar)