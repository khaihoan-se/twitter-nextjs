/** @format */

import classNames from 'classnames';
import React from 'react'

interface BaseModalProps {
   children?: React.ReactNode,
   className?: string;
   bgFixed?: string;
   isOpen: boolean;
}
const BaseModal = React.forwardRef<HTMLDivElement, BaseModalProps>(
   (props, ref) => {
      const { children, bgFixed, className, isOpen } = props;
      if(isOpen == false) return null
      return (
         <React.Fragment>
            <div className={classNames('w-[100vw] h-full fixed inset-0 z-40 flex items-center justify-center', className)}>
               <div className={classNames(
                  'fixed inset-0 select-none z-40',
                  bgFixed ? bgFixed : 'bg-transparent'
               )}></div>
               <div ref={ref} className='z-50'>{children}</div>
            </div>
         </React.Fragment>
      )
   }
)

BaseModal.displayName = 'BaseModal'

export default React.memo(BaseModal)
