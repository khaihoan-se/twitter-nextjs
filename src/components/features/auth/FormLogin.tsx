/** @format */

import Input from '@/components/shared/Input';
import React from 'react';
import Button from '@/components/shared/Button';
import GoogleIcon from '@/components/icons/login/GoogleIcon';
import AppleIcon from '@/components/icons/login/AppleIcon';
import Typography from '@/components/shared/Typography';

interface FormLoginProps {
  handleChangeUser: any;
  handleCheckEmail?: any;
}
const FormLogin: React.FC<FormLoginProps> = ({
  handleChangeUser,
  handleCheckEmail,
}) => {
  return (
    <React.Fragment>
      <div className="py-12 sm:min-w-[364px] min-w-full max-w-[364px] px-8 m-auto bg-bg-color">
        <div className="pb-5">
          <h1 className="text-text-color-medium leading-9 text-[31px] font-bold">
            <Typography variant='span' label='Sign in to Twitter' />
          </h1>
        </div>
        <Button 
          label='Sign up with Google'
          borderColor='border-border-color-button-login'
          Icon={GoogleIcon}
          className='h-[42px] flex items-center justify-center mt-3 mb-5'
          iconClassName='min-h-[18px] w-[18px] min-w-[18px] mr-1'
          backgroundColor='bg-white'
          colorText='text-[#0f1419]'
          weightText='font-normal'
        />
         <Button 
          label='Sign up with Apple'
          borderColor='border-border-color-button-login'
          Icon={AppleIcon}
          className='h-[42px] flex items-center justify-center mb-3 mt-5'
          iconClassName='min-h-[18px] w-[18px] min-w-[18px] mr-1'
          backgroundColor='bg-white'
          colorText='text-[#0f1419]'
        />
        <div className="md:w-[300px] w-full max-w-[380px] my-1">
          <div className="flex-row mx-[-4px] my-[4px] flex items-center">
            <div className="mx-1 justify-center basis-0 min-w-0 flex-1">
              <div className="bg-[#2f3336] h-[1px]"></div>
            </div>
            <div className="font-normal text-[15px]">
              <span>Or</span>
            </div>
            <div className="mx-1 justify-center basis-0 min-w-0 flex-1">
              <div className="bg-[#2f3336] h-[1px]"></div>
            </div>
          </div>
        </div>

        <Input
          label="Phone, email, or username"
          name="email"
          onChange={handleChangeUser}
        />
        <Button
          backgroundColor='bg-bg-button-next-color'
          colorText='text-text-button-next-color'
          className='my-3'
          shortcutKey='enter'
          label="Next"
          onClick={handleCheckEmail}
        />
        <Button
          label='Forgot password?'
          className='my-3'
          borderColor='border-border-button-forgot-color'
        />

        <div className="mt-10 text-text-color-normal text-[15px] font-normal">
          <span>
            Don't have an account?
            <span className="text-main-color ml-1 hover:underline cursor-pointer">
              Sign up
            </span>
          </span>   
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(FormLogin);
