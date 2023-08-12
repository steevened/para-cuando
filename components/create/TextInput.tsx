import { useField } from 'formik';
import { FC } from 'react';

const TextInput: FC<any> = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label
        className={`relative ${className}`}
        htmlFor={props.id || props.name}
      >
        <input
          {...field}
          {...props}
          className={`w-full px-5 py-2 duration-300 border peer rounded-xl focus:ring-1 focus:ring-app-blue border-app-grayDark ${
            meta.touched && meta.error
              ? 'border-red-500'
              : '  focus:outline-none border-app-blue'
          }`}
        />
        <span
          className={`absolute text-base cursor-text text-app-grayDark peer-active:-top-[25px] whitespace-nowrap left-4  bg-white px-1 rounded-none duration-200 peer-focus:-top-[25px] peer-focus:text-sm ease-in-out truncate pointer-events-none ${
            field.value ? '-top-[25px] text-sm' : '-top-[1px]'
          }`}
        >
          {label}
        </span>
      </label>
      {/* {meta.touched && meta.error ? <div>{meta.error}</div> : null} */}
    </>
  );
};

export default TextInput;
