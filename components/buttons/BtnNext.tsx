import { useFormikContext } from 'formik';
import { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'button'> {
  // disabled?: boolean;
  className?: string;
}
export default function BtnNext({ className, ...BtnProps }: Props) {
  const { isValid, dirty, handleSubmit, setTouched } = useFormikContext();

  const handleFinalSubmit = () => {
    setTouched({});
    // handleSubmit();
  };

  return (
    <button
      disabled={!isValid || !dirty}
      type={!isValid || !dirty ? 'button' : 'submit'}
      onClick={BtnProps.onClick ? BtnProps.onClick : handleFinalSubmit}
      className={`${
        !isValid || !dirty ? 'disabled' : 'bg-app-blue'
      } ${className} py-2 px-4 rounded-3xl text-white text-base font-semibold focus:ring-[3px] duration-200 `}
      {...BtnProps}
    />
  );
}
