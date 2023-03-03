import { forwardRef } from 'react';

interface InterfaceInput extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, InterfaceInput>(
  ({ label, className, ...inputProps }, ref) => {
    return (
      <label className="relative">
        <input
          {...inputProps}
          ref={ref}
          className={`w-full px-5 py-2 duration-100 border peer border-app-grayDark rounded-xl focus:ring-1 focus:ring-app-blue focus:outline-none  ${className}`}
        />
        <span
          className={`absolute text-base cursor-text text-app-grayDark peer-active:-top-[25px] whitespace-nowrap left-3 -top-[4px] bg-white p-1 duration-200 peer-focus:-top-[25px] peer-focus:text-sm ease-in-out ${
            (inputProps.value || inputProps.defaultValue) &&
            '-top-[25px] text-sm'
          }`}
        >
          {label}
        </span>
        {/* {error && <span className="text-sm text-red-500">{error.message}</span>} */}
      </label>
    );
  }
);

Input.displayName = 'Input';

export default Input;

// import React, { useEffect, useRef, useState } from 'react';
// interface InterfaceInput extends React.ComponentPropsWithoutRef<'input'> {
//   label: string;
// }

// export const Input: React.FC<InterfaceInput> = React.forwardRef(
//   ({ label, className, ...inputProps }, _ref) => {
//     const refContainer = useRef<any>(null);
//     const [inputValue, setInputValue] = useState('');
//     useEffect(() => {
//       if (refContainer) {
//         setInputValue(refContainer.current.value);
//       }
//     }, [refContainer]);
//     return (
//       <label className="relative">
//         <input
//           ref={refContainer}
//           {...inputProps}
//           className={`w-full px-5 py-2 duration-100 border peer border-app-grayDark rounded-xl focus:ring-1 focus:ring-app-blue focus:outline-none ${className}`}
//         />
//         <span
//           className={`absolute text-base cursor-text text-app-grayDark peer-active:-top-[25px] whitespace-nowrap left-3 -top-[4px] bg-white p-1 duration-200 peer-focus:-top-[25px] peer-focus:text-sm ease-in-out ${
//             (inputValue || refContainer?.current?.value) &&
//             '-top-[25px] text-sm'
//           }`}
//         >
//           {label}
//         </span>
//       </label>
//     );
//   }
// );

// Input.displayName = 'Input';
