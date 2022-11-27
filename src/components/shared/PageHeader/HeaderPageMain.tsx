/** @format */

import classNames from 'classnames'
import React from 'react'

interface HeaderPageMainProps {
   className?: string
   children: React.ReactNode
}
const HeaderPageMain = React.forwardRef<HTMLDivElement, HeaderPageMainProps>(
   (props, ref) => {
      const { className, children } = props
      return (
         <React.Fragment>
            <div ref={ref} className='sticky top-[-0.5px] z-30'>
               <div className={classNames('min-h-[53px] bg-bg-page-header backdrop-blur-md', className)}>
                  {children}
               </div>
            </div>
         </React.Fragment>
      )
   }
)

HeaderPageMain.displayName = 'HeaderPageMain'

export default React.memo(HeaderPageMain)
