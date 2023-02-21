import Children from '@/lib/interfaces/components.interface';

interface Props extends Children {
  disabled?: boolean;
}
export default function BtnNext({ children, disabled }: Props) {
  return (
    <button
      disabled={disabled ? true : false}
      className={`${
        disabled ? 'disabled' : 'bg-app-blue'
      } py-2 px-4 rounded-3xl text-white text-base font-semibold focus:ring-[3px] duration-200 md:w-[305px]`}
    >
      {children}
    </button>
  );
}
