interface IButtons extends React.ComponentPropsWithoutRef<'button'> {
  size?: 'sm' | 'md';
}

const Button: React.FC<IButtons> = ({ children, className }) => {
  return (
    <button
      className={`px-2 h-[30px] bg-white border sm:px-5 rounded-3xl text-2 text-app-gray whitespace-nowrap border-app-gray w-full ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
