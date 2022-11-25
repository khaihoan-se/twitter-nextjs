/** @format */

import React from 'react'

export interface BaseButtonProps
   extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
   LeftIcon?: React.ComponentType<{ className: string }>;
   RightIcon?: React.ComponentType<{ className: string }>;
   iconClassName?: string;
   primary?: boolean;
   outline?: boolean;
   onClick?: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null
   ) => void;
   shortcutKey?: string;
   isLoading?: boolean;
   types?: 'DEFAULT' | 'GGLOGIN'
}

const Button = React.forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
   const { types } = props;
   return (
      <React.Fragment>
         {
            types === 'DEFAULT' ? 'DEFAULT' : 'Button'
         }
         <div>Buutton</div>
      </React.Fragment>
   )
})

Button.defaultProps = {
   types: 'DEFAULT'
}

export default Button
