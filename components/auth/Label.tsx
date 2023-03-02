interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  htmlFor: string;
  labelText: string;
  className?: string;
  children: React.ReactNode;
}

export default function Label({
  htmlFor,
  labelText,
  className,
  children,
  ...labelProps
}: LabelProps) {
  return (
    <label
      {...labelProps}
      htmlFor={htmlFor}
      className={`text-sm not-italic font-semibold text-white ${className}}`}
    >
      <p>{labelText}</p>
      {children}
    </label>
  );
}
