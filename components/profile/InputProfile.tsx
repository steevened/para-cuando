interface IInputProfile extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
  className?: string;
}

export default function InputProfile({
  label,
  className,
  ...InputProps
}: IInputProfile) {
  return (
    <label
      className={`relative ${className}`}
      htmlFor={InputProps.id || InputProps.name}
    >
      <input
        {...InputProps}
        className={`w-full px-5 py-2 duration-100 border peer rounded-xl focus:ring-1 focus:ring-app-blue focus:outline-none border-app-grayDark `}
        type="text"
      />
      <span
        className={`absolute text-base cursor-text text-app-grayDark peer-active:-top-[10px] whitespace-nowrap left-4  bg-white px-1 rounded-none duration-200 peer-focus:-top-[10px] peer-focus:text-sm ease-in-out truncate pointer-events-none ${
          InputProps.value ? '-top-[10px] text-sm' : 'top-2'
        }`}
      >
        {label}
      </span>
    </label>
  );
}
