/** @format */

import React, { useEffect } from 'react'
import isHotKey from "is-hotkey";
import classNames from 'classnames';
import Typography from '../Typography';

interface IconProps {
   className?: string
}
export interface BaseButtonProps
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
   classLabel?: string
}

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
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
            disabled={disabled}
            onClick={(e) => {
               if (disabled) return;
     
               onClick?.(e);
            }}
            className={classNames(
               'min-w-[36px] min-h-[36px] rounded-full border-[1px] outline-none overflow-hidden px-4 flex items-center justify-center',
               maxWidth && 'w-full',
               maxHeight && 'h-full',
               borderColor ? borderColor : 'border-transparent',
               backgroundColor ? backgroundColor : 'bg-transparent',
               sizeText ? sizeText : 'text-[15px]',
               colorText ? colorText : 'text-text-color-medium',
               weightText ? weightText : 'font-bold',
               bgHoverColor ? `hover:bg-${bgHoverColor}` : null,
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
         </button>
      </React.Fragment>
   )
})

BaseButton.defaultProps = {
   disabled: false,
   maxWidth: true,
}

BaseButton.displayName = 'BaseButton'

export default React.memo(BaseButton)
