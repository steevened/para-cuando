import { useState } from 'react';

export default function InputGroup({ inputFiles, className }: any) {
  return (
    <div
      className={`flex w-full h-full gap-3 px-4 py-5 border border-app-grayDark rounded-xl ${className}`}
    >
      {inputFiles.map((inputFile: any) => (
        <Label key={inputFile.id} inputFile={inputFile} />
      ))}
    </div>
  );
}

const Label = ({ inputFile, ...props }: any) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  // const [field, meta] = useField(props);

  const handleFileChange = (e: any) => {
    const file = e.target.files[e.target.files.length - 1];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // console.log({ field, meta });

  return (
    <label
      key={inputFile?.id}
      htmlFor={`img-${inputFile?.id}`}
      // htmlFor={props.id || props.name}
      className="relative w-[105px] h-[123px]"
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
        name={`img-${inputFile?.id}`}
        accept="image/*"
        id={`img-${inputFile?.id}`}
        className="hidden"
        onChange={handleFileChange}
        // {...field}
        // {...props}
      />
      {!imagePreview && <AddIcon />}
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
        className="w-6 h-6"
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
