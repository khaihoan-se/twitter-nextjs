/** @format */

import classNames from 'classnames'
import React from 'react'

interface SectionProps {
   className?: string
   children?: React.ReactNode
}

const Page = React.forwardRef<HTMLDivElement, SectionProps>(
   ({ children, className }, ref) => {
      return (
         <div
            ref={ref}
            className={classNames(
               'md:max-w-[600px] w-full min-h-[100vh] bg-tt-bg-color mr-0 ml-0 border-l-[1px] border-r-[1px] border-bd-color bg-bg-color',
               className
            )}>
            {children}
         </div>
      )
   }
)

Page.displayName = 'Page'

export default React.memo(Page)
