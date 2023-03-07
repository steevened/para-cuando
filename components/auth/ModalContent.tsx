import Link from 'next/link';
import React from 'react';
import ModalContainer from './ModalContainer';

interface ModalProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  passwordAction: string;
  btnText: string;
  contentFor: 'login' | 'register';
  redirectTo: string;
  handleSubmit: any;
}

export default function ModalContent({
  title,
  subtitle,
  children,
  btnText,
  passwordAction,
  redirectTo,
  contentFor,
  handleSubmit,
}: ModalProps) {
  return (
    <ModalContainer>
      <h1 className="mt-[72px] text-3xl font-semibold text-app-grayLighter  leading-5">
        {title}
      </h1>
      <p className="mt-3 text-sm text-app-grayLighter">{subtitle}</p>
      <form className="mt-6">
        {children}
        <div className="mt-2.5 text-xs  text-app-grayLight">
          <p>
            <span className="">.</span>
            {passwordAction}
            <span>
              {contentFor === 'login' && (
                <Link
                  href="#"
                  className="ml-1 font-medium border-b text-app-yellow border-app-yellow"
                >
                  Recupérala Aqui
                </Link>
              )}
            </span>
          </p>
        </div>
        <button
          type="submit"
          onClick={contentFor === 'login' ? handleSubmit : null}
          className=" w-full text-app-black font-semibold rounded-md text-base px-5 py-2.5 text-center bg-app-yellow mt-7"
        >
          {btnText}
        </button>
        <div className="w-full mt-4 mb-10 text-center">
          <Link
            href={contentFor === 'login' ? '/auth/register' : '/auth/login'}
            className="text-sm text-center border-b border-app-yellow text-app-yellow"
          >
            {redirectTo}
          </Link>
        </div>
      </form>
    </ModalContainer>
  );
}
