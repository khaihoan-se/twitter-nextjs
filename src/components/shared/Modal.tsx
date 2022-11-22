/** @format */

import React from 'react'

interface SectionProps {
   className?: string
   children?: React.ReactNode
}

const Modal = React.forwardRef<HTMLDivElement, SectionProps>(
   ({ children, className }, ref) => {
      return (
         <div ref={ref} className="bg-bg-modal-login fixed inset-0 z-40">
            <div className="w-full h-full flex items-center justify-center relative">
               {children}
            </div>
         </div>
      )
   }
)

Modal.displayName = 'Modal'

export default React.memo(Modal)
