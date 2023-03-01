interface InInput extends React.ComponentPropsWithoutRef<'input'> {
  id: string;
  type: string;
  placeholder?: string;
}

export function Input({
  id,
  type,
  placeholder,
  className,
  ...inputProps
}: InInput) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      {...inputProps}
      className={`w-full h-14 text-base font-normal text-white border-app-grayLighter border-[1.5px] rounded-md bg-transparent px-4 mt-2 placeholder:text-app-gray ${className}`}
    />
  );
}
