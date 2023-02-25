import Children from '@/lib/interfaces/components.interface';

const Button: React.FC<Children> = ({ children }) => {
  return (
    <button className="px-2 py-3 bg-white border sm:px-5 rounded-3xl text-2 text-app-gray whitespace-nowrap border-app-gray">
      {children}
    </button>
  );
};

export default Button;
