import BtnNext from '@/components/buttons/BtnNext';
import {
  createPublication,
  uploadImgPublication,
} from '@/lib/services/publications/publications.services';
import { Form, Formik, useField } from 'formik';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';
import InputGroup from '../InputFiles/InputGroup';
import TextInput from '../TextInput';

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

interface Props {
  tags: any;
  types: any;
  steps: number;
  setSteps: (_n: number) => void;
}

const TwoStepsForm: FC<Props> = ({ steps, setSteps, tags, types }) => {
  console.log(tags);
  const router = useRouter();

  const firstValidationSchema = Yup.object({
    title: Yup.string().required('Required'),
    publications_types_id: Yup.number().required('Required'),
    tags: Yup.number().required('Required'),
    description: Yup.string().required('Required'),
    reference_link: Yup.string().required('Required'),
  });

  const lastValidationSchema = Yup.object({
    title: Yup.string().required('Required'),
    publications_types_id: Yup.number().required('Required'),
    tags: Yup.number().required('Required'),
    description: Yup.string().required('Required'),
    reference_link: Yup.string().required('Required'),
    images: Yup.array().test(
      'at least one image',
      'At least one image is required',
      (arr) => {
        return arr && arr.some((image) => image !== null);
      }
    ),
  });

  return (
    <Formik
      initialValues={{
        title: '',
        publications_types_id: null,
        tags: null,
        description: '',
        reference_link: '',
        images: [null, null, null],
      }}
      validationSchema={
        steps === 1 ? firstValidationSchema : lastValidationSchema
      }
      onSubmit={async (values, { setSubmitting }) => {
        if (steps === 1) {
          setSteps(2);
          setSubmitting(false);
        } else {
          const { tags, images, ...resValues } = values;
          const tagsArr = [Number(tags)];
          const formValues = {
            ...resValues,
            tags: tagsArr,
            content: 'default',
          };

          // const toasterPromise = toast.promise(createPublication(formValues), {
          //   error: 'Intente nuevamente',
          //   loading: 'Cargando...',
          //   success: 'Publicación creada!',
          // });

          try {
            // const response = await toasterPromise;
            // console.log(response);
            const response = await createPublication(formValues);
            try {
              const imagesArr = images.filter((image) => image !== null);
              const image = imagesArr[0];
              const formData = new FormData();
              if (image !== null) {
                formData.append('image', image);
              } else {
                console.log('no formData');
              }
              const imageUploaded = toast.promise(
                uploadImgPublication(formData, response.data.publication_id),
                {
                  error: 'Intente nuevamente',
                  loading: 'Cargando...',
                  success: 'Publicación creada!',
                }
              );
              const res = await imageUploaded;
              console.log(res);
            } catch (error) {
              console.log(error);
            }
          } catch (error) {
            console.log(error);
          }

          // -----
          router.push('/');
          setSubmitting(false);
        }
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
            <div className="flex flex-col gap-5 sm:flex-row">
              <SelectInput
                label="Tipo"
                name="publications_types_id"
                className="w-full mt-6"
              >
                <option value="" disabled>
                  Tipo
                </option>
                {types?.map((tipo: any) => (
                  <option key={tipo.id} value={tipo.id}>
                    {tipo.name}
                  </option>
                ))}
              </SelectInput>

              <SelectInput
                label="Categoria"
                name="tags"
                className="w-full mt-6"
              >
                <option value="" disabled>
                  Categoria
                </option>
                {tags?.map((categorie: any) => (
                  <option key={categorie.id} value={categorie.id}>
                    {categorie.name}
                  </option>
                ))}
              </SelectInput>
            </div>
            <TextArea
              label="¿Por qué lo recomiendas?"
              name="description"
              type="text"
              className="mt-6"
            />
            <div className="mt-4">
              <TextInput
                label="Link de referencia"
                name="reference_link"
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
              <BtnNext className="">Publicar</BtnNext>
            </div>
          </>
        )}
      </Form>
    </Formik>
  );
};

// -----------------------------------------waste----------------------------------------------

function SelectInput({ className, ...props }: any) {
  const [field, meta] = useField(props);

  // console.log({ field, meta });

  return (
    <div className={`relative ${className}`}>
      <select
        defaultValue=""
        className={`w-full px-5 py-2 duration-100 bg-transparent border appearance-none peer rounded-xl border-app-grayDark text-base text-app-grayDark ${
          meta.touched && meta.error
            ? 'border-red-500'
            : '  focus:outline-none border-app-blue'
        }`}
        {...field}
        {...props}
      />
      <span
        className={`absolute -translate-y-1/2 right-2 top-1/2 peer-active:rotate-180 duration-200`}
      >
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

export default TwoStepsForm;
