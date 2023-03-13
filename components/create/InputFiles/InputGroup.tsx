import { useField, useFormikContext } from 'formik';
import { useState } from 'react';

interface IInputFiles {
  name: string;
  id: number;
}

interface InputGroupProps {
  inputFiles: IInputFiles[];
  className?: string;
}

export default function InputGroup({ inputFiles, className }: InputGroupProps) {
  const { setFieldValue } = useFormikContext();

  return (
    <div
      className={`flex w-full h-full gap-3 md:gap-6 px-4 py-5 border border-app-grayDark rounded-xl ${className}`}
    >
      {inputFiles.map((inputFile: any) => (
        <Label
          key={inputFile.id}
          inputFile={inputFile}
          setFieldValue={setFieldValue}
        />
      ))}
    </div>
  );
}

interface LabelProps {
  inputFile: IInputFiles;
  setFieldValue: any;
}
const Label = ({ inputFile, setFieldValue }: LabelProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [field, meta] = useField(inputFile.name);

  console.log(imagePreview);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setFieldValue(`images[${inputFile.id - 1}]`, file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <label
      key={inputFile?.id}
      htmlFor={inputFile.name}
      className="relative w-[105px] md:w-[177px] h-[123px] md:h-[206px]"
      style={
        imagePreview
          ? {
              backgroundImage: `url(${imagePreview})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      <input
        type="file"
        name={inputFile.name}
        accept="image/*"
        id={inputFile.name}
        className="hidden"
        onChange={(e) => {
          handleFileChange(e);
          // field.onChange(e);
        }}
      />
      {!imagePreview && <AddIcon />}
      {/* {meta.touched && meta.error ? <div>{meta.error}</div> : null} */}
    </label>
  );
};

const AddIcon = () => {
  return (
    <span className="absolute inset-0 flex items-center justify-center bg-app-grayLight">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-app-blue"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </span>
  );
};
