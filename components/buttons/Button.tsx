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
      } border sm:px-5 duration-200 rounded-3xl text-2 text-app-gray whitespace-nowrap  min-w-full  ${
        !className ? ' border-app-gray' : className
      } `}
    >
      {children}
    </button>
  );
};

export default Button;
