import BtnNext from '@/components/buttons/BtnNext';
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import InputGroup from '../InputFiles/InputGroup';

interface ITipos {
  name: string;
  id: number;
}

const tipos: ITipos[] = [
  { name: 'Marcas y tiendas', id: 1 },
  { name: 'Artistas y conciertos', id: 2 },
  { name: 'Torneos', id: 3 },
];

interface ICategorie {
  name: string;
  id: number;
}

const categories: ICategorie[] = [
  {
    name: 'Ropa y accesorios',
    id: 1,
  },
  {
    name: 'Deportes',
    id: 2,
  },
  {
    name: 'Conciertos',
    id: 3,
  },
  {
    name: 'Meet & Greet',
    id: 4,
  },
  {
    name: 'E-Sports',
    id: 5,
  },
  {
    name: 'Pop - Rock',
    id: 6,
  },
  {
    name: 'Tecnología',
    id: 7,
  },
  {
    name: 'Hogar - Decoración',
    id: 8,
  },
  {
    name: 'Abastecimiento',
    id: 9,
  },
];

interface IInputFles {
  name: string;
  id: number;
}

const inputFiles: IInputFles[] = [
  { name: 'img-1', id: 1 },
  { name: 'img-2', id: 2 },
  { name: 'img-3', id: 3 },
];

export default function TwoStepsForm({
  steps,
  setSteps,
}: {
  steps: number;
  setSteps: any;
}) {
  return (
    <Formik
      initialValues={{
        title: '',
        type: '',
        category: '',
        recomendation: '',
        reference: '',
        files: [],
        // 'img-1': '',
        // 'img-2': '',
        // 'img-3': '',
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .max(15, 'Máximo 15 carácteres')
          .required('Required'),
        type: Yup.string().required('Required'),
        category: Yup.string().required('Required'),
        recomendation: Yup.string().required('Required'),
        reference: Yup.string().required('Required'),
        // 'img-1': Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="mt-11">
        {steps === 1 ? (
          <>
            <TextInput
              label="Titulo de la publicación"
              name="title"
              type="text"
            />
            <SelectInput label="Tipo" name="type" className="mt-6">
              <option value="" disabled>
                Tipo
              </option>
              {tipos.map((tipo) => (
                <option key={tipo.id} value={tipo.name}>
                  {tipo.name}
                </option>
              ))}
            </SelectInput>

            <SelectInput label="Categoria" name="category" className="mt-6">
              <option value="" disabled>
                Categoria
              </option>
              {categories.map((categorie) => (
                <option key={categorie.id} value={categorie.name}>
                  {categorie.name}
                </option>
              ))}
            </SelectInput>

            <TextArea
              label="¿Por qué lo recomiendas?"
              name="recomendation"
              type="text"
              className="mt-6"
            />
            <div className="mt-4">
              <TextInput
                label="Link de referencia"
                name="reference"
                type="text"
              />
            </div>
            <div className="flex justify-center w-full mt-11">
              <BtnNext
                // disabled={!isValid}
                onClick={() => setSteps(2)}
                // type={'button'}
                className=""
              >
                Siguiente
              </BtnNext>
            </div>
          </>
        ) : (
          <>
            <InputGroup inputFiles={inputFiles} className="mt-6" />
            <div className="flex justify-center w-full mt-11">
              <BtnNext
                // onClick={() => setSteps(2)}
                // type="submit"
                className=""
              >
                Publicar
              </BtnNext>
            </div>
          </>
        )}
      </Form>
    </Formik>
  );
}

function TextInput({ label, className, ...props }: any) {
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
          className={`w-full px-5 py-2 duration-100 border peer rounded-xl focus:ring-1 focus:ring-app-blue border-app-grayDark ${
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
}

function SelectInput({ className, ...props }: any) {
  const [field, meta] = useField(props);

  return (
    <div className={`relative ${className}`}>
      <select
        className={`w-full px-5 py-2 duration-100 bg-transparent border appearance-none peer rounded-xl border-app-grayDark text-base text-app-grayDark ${
          meta.touched && meta.error
            ? 'border-red-500'
            : '  focus:outline-none border-app-blue'
        }`}
        {...field}
        {...props}
      />
      <span className={`absolute -translate-y-1/2 right-4 top-1/2 `}>
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
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </div>
  );
}

function TextArea({ label, className, ...props }: any) {
  const [field, meta] = useField(props);

  return (
    <div className={`relative ${className}`}>
      <label
        className="absolute px-2 text-base -translate-y-1/2 bg-white text-app-grayDark left-4"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        className={`border border-app-grayDark rounded-xl h-28 p-4 focus:ring-1 focus:ring-app-blue  w-full ${
          meta.touched && meta.error
            ? 'border-red-500'
            : '  focus:outline-none border-app-blue'
        }`}
      />

      {/* {meta.touched && meta.error ? <div>{meta.error}</div> : null} */}
    </div>
  );
}
