import Warning from '../atoms/Warning';

interface InInput extends React.ComponentPropsWithoutRef<'input'> {
  id: string;
  type: string;
  placeholder?: string;
  isError?: boolean;
}

export function Input({
  id,
  type,
  placeholder,
  className,
  isError,
  ...inputProps
}: InInput) {
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...inputProps}
        className={`w-full h-14 text-base font-normal text-white border-app-grayLighter border-[1.5px] rounded-md bg-transparent px-4 mt-2 placeholder:text-app-gray ${className} `}
      />
      {type === 'email' && isError && (
        <span className="absolute top-11 right-4">
          <Warning />
        </span>
      )}
    </>
  );
}
