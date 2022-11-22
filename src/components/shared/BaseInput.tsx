/** @format */

import classNames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react'

// type BaseInput = React.HTMLProps<HTMLInputElement> & React.HTMLProps<HTMLTextAreaElement> & {
//    label: string;
//    type: 'INPUT' | 'TEXTAREA';
//    classNameInput?: string;
// }
interface BaseInput extends React.HTMLProps<HTMLInputElement> {
   label: string;
   type: 'INPUT' | 'TEXTAREA';
   classNameInput?: string;
}

const BaseInput = React.forwardRef<HTMLInputElement, BaseInput>((props, ref) => {
   const { label, type, classNameInput, ...inputProps } = props;
   const [force, setForce] = useState<boolean>(inputProps.defaultValue !== '' ? true : false)
   const [forceBD, setForceBD] = useState<boolean>(false)
   const handleForce = (event: any) => {
      event.stopPropagation()
      setForce(true)
   }
   useEffect(() => {
      document.addEventListener('click', () => {
         setForce(inputProps.defaultValue !== '' ? true : false)
         setForceBD(false)
      })
   }, [force, inputProps.defaultValue])

   const BaseInputInput = useMemo(() => {
      return (
         <input ref={ref} {...inputProps} className={classNames(
            'text-left resize-none appearance-none bg-transparent outline-none w-full z-30',
            classNameInput
         )} />
      )
   }, [])
   const BaseInputTextarea = useMemo(() => {
      return (
         // @ts-ignore
         <textarea ref={ref} {...inputProps} className={classNames(
            'text-left resize-none appearance-none bg-transparent outline-none w-full z-30',
            classNameInput
         )}>
         </textarea>
      )
   }, [])

   const rendeBaseInput = () => {
      switch(type) {
         case 'INPUT':
            return BaseInputInput
         case 'TEXTAREA':
            return BaseInputTextarea
         default:
            return BaseInputInput
      }
   }

   return (
      <React.Fragment>
         <label className={classNames(
            'flex-row border-[1px] border-border-color-button-login rounded flex',
            forceBD && 'border-[2px] border-main-color',
         )} onClick={handleForce} onFocus={() => setForceBD(true)}>
            <div className='shrink grow flex flex-col relative'>
               <div className='h-full w-full justify-between flex-row absolute'>
                  <div className={classNames(
                     'break-words min-w-0 px-2 max-w-full truncate',
                     force ? 'pt-2 text-[13px] leading-4 font-normal' : 'pt-4 leading-6 text-[17px] font-normal',
                     forceBD ? 'text-main-color' : 'text-text-color-normal'
                  )}>
                     <span className='break-words min-w-0'>{label}</span>
                  </div>
               </div>
               <div className='mt-4 pt-3 pb-2 shrink grow flex-row px-2 overflow-hidden flex'>
                  <div className='leading-6 text-text-color-medium text-[17px] items-center w-full font-normal break-words min-w-0 flex'>
                     {rendeBaseInput()}
                  </div>
               </div>
            </div>
         </label>
         <div className="flex-row px-2 flex">
            <div className="pt-[2px] pr-5 flex-col flex-1 flex"></div>
         </div>
      </React.Fragment>
   )
})

BaseInput.displayName = 'BaseInput'

export default React.memo(BaseInput)
