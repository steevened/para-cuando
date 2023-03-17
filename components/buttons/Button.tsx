interface IButtons extends React.ComponentPropsWithoutRef<'button'> {
  toggleSection?: number;
}

const Button: React.FC<IButtons> = ({
  children,
  className,
  toggleSection,
  ...btnProps
}) => {
  return (
    <button
      {...btnProps}
      className={`px-2 h-[30px] ${
        !toggleSection ? 'bg-white' : ''
      } border sm:px-5 rounded-3xl text-2 text-app-gray whitespace-nowrap border-app-gray min-w-full ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
