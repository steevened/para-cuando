import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
}

const ButtonSave = ({ children, className, ...btnProps }: ButtonProps) => {
  return (
    <button
      {...btnProps}
      className={`bg-app-blue text-app-grayLighter py-[13.5px] px-6 leading-5 text-[16px] font-semibold rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonSave;
