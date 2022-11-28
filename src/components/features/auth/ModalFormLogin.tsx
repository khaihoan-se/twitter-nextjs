/** @format */

import CloseIcon from '@/components/icons/CloseIcon'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input';
import Logo from '@/components/shared/Logo'
import { debounce } from '@/utils';
import React, { useMemo } from 'react'
import FormLogin from './FormLogin';
import FormPassword from './FormPassword';
import FormRegister from './FormRegister';

interface ModalFormLoginProps {
   onClose?: () => void;
   coutTable: number;
   formData: any;
   onChange: any;
   onCheckEmail?: () => void;
   onSubmit: () => void
}
const ModalFormLogin: React.FC<ModalFormLoginProps> = ({ onClose, coutTable, formData, onChange, onCheckEmail, onSubmit }) => {
   const handleOnChange = ( event: | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
      onChange({...formData, [event.target.name]:event.target.value})
   }

   const renderTable = () => {
      if(coutTable === 1) return <FormLogin handleChangeUser={handleOnChange} handleCheckEmail={onCheckEmail} />
      if(coutTable === 2) return <FormPassword handleChangeUser={handleOnChange} email={formData.email} handleLogin={onSubmit} />
      if(coutTable === 3) return <FormRegister />
   }
   return (
      <React.Fragment>
         <div className="min-h-[400px] max-w-[80vw] max-h-[100vh] sm:h-[650px] h-[100vh] sm:min-w-[600px] min-w-[100vw] shrink sm:rounded-2xl rounded-none overflow-hidden">
            <div className="shrink grow bg-bg-color w-full h-full">
               <div className='h-[53px] flex items-center justify-between w-full px-4 relative'>
                  <Button
                     Icon={CloseIcon}
                     maxWidth={false}
                     iconClassName='w-5 h-5 text-color-medium'
                     className='px-0'
                     bgHoverColor='bg-bg-color-header-hover'
                     isSubText={true}
                     subText='Close'
                  />
                  <div className='absolute left-1/2 translate-x-[-50%] min-w-[32px] flex items-center justify-center'>
                     <Logo className='h-[2rem] text-formlogin-logo-color' />
                  </div>
                  <div></div>
               </div>
               {renderTable()}
            </div>
         </div>
      </React.Fragment>
   )
}

export default React.memo(ModalFormLogin)
