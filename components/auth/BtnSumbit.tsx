import React from 'react';

interface BtnSumbitProps extends React.ComponentPropsWithoutRef<'button'> {
  children: string;
  className: string;
}

export default function BtnSumbit({
  children,
  className,
  ...btnProps
}: BtnSumbitProps) {
  return (
    <button
      className={` w-full text-app-black font-semibold rounded-md text-base px-5 py-2.5 text-center bg-app-yellow ${className}`}
      {...btnProps}
    >
      {children}
    </button>
  );
}
