/** @format */

import React from 'react'

interface ModalAuthProps {
   children?: React.ReactNode
}

const ModalAuth = React.forwardRef<HTMLDivElement, ModalAuthProps>(
   ({ children }, ref) => {
      return (
         <div ref={ref} className='fixed inset-0 z-40 bg-bg-modal-login'>
            <div className='w-full h-full flex items-center justify-center relative'>
               <div className='bg__module inset-0 fixed z-50'></div>
               <div className='z-50 overflow-hidden sm:rounded-2xl rounded-none bg-bg-color sm:min-h-[400px] min-h-screen sm:max-h-[90vh] max-h-[100vh] max-w-[80vw] sm:min-w-[600px] min-w-full h-[650px] flex flex-col'>
                  {children}
               </div>
            </div>
         </div>
      )
   }
)

ModalAuth.displayName = 'ModalAuth'

export default React.memo(ModalAuth)
