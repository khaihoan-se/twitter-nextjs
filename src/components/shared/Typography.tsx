/** @format */

import classNames from 'classnames';
import React from 'react'

export interface TypographyProps {
   variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span';
   label: React.ReactNode;
   onClick?: () => void;
   className?: string;
}

const mapType = {
   h1: 'h1',
   h2: 'h2',
   h3: 'h3',
   h4: 'h4',
   h5: 'h5',
   h6: 'h6',
   p: 'p',
   span: 'span'
};

const Typography: React.FC<TypographyProps> = ({ 
   label, 
   variant = 'p', 
   className, 
   onClick 
}) => {
   return React.createElement(
      typeof label !== 'string' && typeof label !== 'number'
         ? 'div'
         : mapType[variant] || 'p',
      {
         className: classNames('break-words min-w-0', className),
         onClick: onClick
      },
      label
   )
}

export default React.memo(Typography)
