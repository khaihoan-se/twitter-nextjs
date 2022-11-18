/** @format */

import classNames from 'classnames';
import React from 'react'

export interface BaseButtonProps
   extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
   onClick?: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null
   ) => void;
   shortcutKey?: string;
   isLoading?: boolean;
   className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
   (props, ref) => {
      const { children, onClick, shortcutKey, isLoading, className, ...rest } = props
      return (
         <button ref={ref} className={classNames(
            'outline-none min-w-[36px] min-h-[36px]',
            className
         )}
            onClick={onClick}
            {...rest}
         >
            {children}
         </button>
      )
   }
)

Button.displayName = 'Button'
export default Button