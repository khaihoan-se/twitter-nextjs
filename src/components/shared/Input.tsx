/** @format */

import React from 'react'

interface Icon {
   className?: string;
}
interface InputProps extends React.HTMLProps<HTMLInputElement> {
   label?: string;
   RightIcon?: React.ComponentType<Icon>;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
   const { label, RightIcon, ...inputProps } = props   
   return (
      <div className='w-full px-0 py-3'>
         <div className='login--input flex-row flex rounded border-[1px] border-[#cfd9de]'>
            <label className='grow shrink relative'>
               <input
                  ref={ref} 
                  placeholder='&nbsp;'
                  className='focus--input z-40 pt-3 pb-2 mt-4 shrink grow flex-row px-3 overflow-hidden flex relative text-left bg-transparent outline-none w-full border-none text-text-color-medium leading-6 text-[17px] items-center font-normal'
                  {...inputProps}
               />
               <div className='label--input rounded h-full justify-between flex-row w-full absolute text-text-color-normal pt-5 inset-0 leading-4 text-[17px] font-normal px-2 max-w-full truncate'>
                  <span>{label}</span>
               </div>
            </label>
         </div>
      </div>
   )
})

Input.displayName = "Input";

export default React.memo(Input);
