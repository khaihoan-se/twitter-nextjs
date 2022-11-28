/** @format */

import React, { useEffect, useState } from 'react'
import isHotKey from "is-hotkey";
import classNames from 'classnames';
import Typography from '../Typography';

interface IconProps {
   className?: string
}
export interface ButtonProps
   extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
   Icon?: React.ComponentType<IconProps>;
   iconClassName?: string;
   onClick?: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null
   ) => void;
   shortcutKey?: string;
   isLoading?: boolean;
   label?: React.ReactNode;
   className?: string;
   disabled?: boolean;
   maxWidth?: boolean;
   maxHeight?: boolean;
   borderColor?: string;
   backgroundColor?: string;
   sizeText?: string;
   colorText?: string;
   weightText?: string;
   bgHoverColor?: string;
   classLabel?: string;
   isSubText?: boolean;
   subText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
   const { 
      children, 
      label, 
      onClick, 
      disabled, 
      shortcutKey, 
      maxWidth, 
      maxHeight, 
      borderColor, 
      backgroundColor, 
      className, 
      sizeText, 
      colorText,
      weightText,
      bgHoverColor,
      iconClassName,
      isLoading,
      Icon,
      classLabel,
      isSubText,
      subText,
      ...rest
   } = props;

   useEffect(() => {
      if (!shortcutKey) return;

      const handleShortcutKey = (e: KeyboardEvent) => {
        if (isHotKey(shortcutKey, { byKey: true })(e)) {
          onClick?.(null);
        }
      };

      window.addEventListener("keypress", handleShortcutKey);

      return () => {
        window.removeEventListener("keypress", handleShortcutKey);
      };
   }, [onClick, shortcutKey]);

   // If class name contains 'w-' or 'h-' then override default className
   const iconClass =
   !iconClassName?.includes("w-") || !iconClassName?.includes("h-")
   ? classNames("w-6 h-6", iconClassName)
   : iconClassName;
   
   
   return (
      <React.Fragment>
         <button
            ref={ref}
            disabled={disabled}
            onClick={(e) => {
               if (disabled) return;
     
               onClick?.(e);
            }}
            className={classNames(
               'min-w-[36px] min-h-[36px] rounded-full border-[1px] outline-none px-4 flex items-center justify-center relative',
               maxWidth && 'w-full',
               maxHeight && 'h-full',
               borderColor ? borderColor : 'border-transparent',
               backgroundColor ? backgroundColor : 'bg-transparent',
               sizeText ? sizeText : 'text-[15px]',
               colorText ? colorText : 'text-text-color-medium',
               weightText ? weightText : 'font-bold',
               bgHoverColor ? `hover:${bgHoverColor}` : null,
               isSubText ? 'hover__cha' : 'overflow-hidden',
               className
            )}
            {...rest}
         >  
            {isLoading ? (
               <div>Loading</div>
            ) : (
               Icon && <Icon className={iconClass} />
            )}
            {
               label && (
                  <Typography 
                     variant='span' 
                     label={label ?? children} 
                     className={classNames(
                        'truncate max-w-full', 
                        classLabel
                     )} 
                  />
               )
            }
            {isSubText && (
               <Typography
                  className='hover__con hidden absolute top-[37px] left-1/2 translate-x-[-50%] text-[11px] text-white bg-slate-800 px-[4px] py-[1px] rounded-sm'
                  label={subText} 
                  variant='span' 
               />
            )}
         </button>
      </React.Fragment>
   )
})

Button.defaultProps = {
   disabled: false,
   maxWidth: true,
}

Button.displayName = 'Button'

export default React.memo(Button)
