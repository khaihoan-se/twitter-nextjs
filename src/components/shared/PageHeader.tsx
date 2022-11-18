/** @format */

import classNames from 'classnames'
import React from 'react'

interface SectionProps {
   className?: string
   children?: React.ReactNode
}

const PageHeader = React.forwardRef<HTMLDivElement, SectionProps>(
   ({ children, className }, ref) => {
      return (
         <div
            ref={ref}
            className={classNames(
               'sticky z-40 top-0 bg-bg-page-header backdrop-blur-md',
               className
            )}>
            {children}
         </div>
      )
   }
)

PageHeader.displayName = 'Page'

export default React.memo(PageHeader)
