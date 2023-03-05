import { Form, Formik, useField } from 'formik';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as Yup from 'yup';
import BtnNext from '../../components/buttons/BtnNext';
import logo from '../../public/create/logo.svg';

const TextArea = ({ label, className, ...props }: any) => {
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
};

const TextInput = ({ label, className, ...props }: any) => {
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
};

const SelectInput = ({ className, ...props }: any) => {
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
};

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

export default function Create() {
  const [steps, setSteps] = useState(1);
  const router = useRouter();

  // console.log(isValid);

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Crear Publicación - Para Cuándo</title>
      </Head>
      <div className="h-full min-h-screen">
        <div className="pb-5 bg-app-blue">
          <div className="app-container">
            <Image
              src={logo}
              alt="para cuando logo"
              className="pt-8 mx-auto "
            />
            <h1 className="mt-8 title-3 text-app-yellow">
              ¡Bienvenido, creador!
            </h1>
            <p className="mt-6 text-white text-1">
              A continuación puedes completar la info de la marca, artista o
              torneo que quieres cerca.
            </p>
          </div>
        </div>
        <div className="mt-6 text-xl app-container">
          <button
            className="text-app-blue "
            onClick={() => {
              steps === 1 ? handleBack() : setSteps(steps - 1);
            }}
          >
            Back
          </button>
          <div
            className={`relative w-full h-2 overflow-hidden  rounded-full bg-app-grayLight mt-11`}
          >
            <div
              className={`absolute inset-y-0  transition-all duration-300 bg-app-blue ${
                steps === 1 ? 'w-1/2' : 'w-full'
              }`}
            />
          </div>
          <h2 className="title-2 text-app-blackLight mt-11">Publicación</h2>
          <p className="mt-2 subtitle-2 text-app-grayDark">
            Información básica
          </p>

          {steps === 1 ? (
            <Formik
              initialValues={{
                title: '',
                type: '',
                category: '',
                recomendation: '',
                reference: '',
              }}
              validationSchema={Yup.object({
                title: Yup.string()
                  .max(15, 'Máximo 15 carácteres')
                  .required('Required'),
                type: Yup.string().required('Required'),
                category: Yup.string().required('Required'),
                recomendation: Yup.string().required('Required'),
                reference: Yup.string().required('Required'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form className="mt-11">
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
                    className=""
                  >
                    Siguiente
                  </BtnNext>
                </div>
              </Form>
            </Formik>
          ) : (
            <div>hi</div>
          )}
        </div>
      </div>
    </>
  );
}

{
  /* <form className="mt-11">
            <Input label="Titulo de la publicación" />
          </form> */
}

{
  /* <div className="flex flex-col items-center justify-start h-screen gap-10 pt-10 text-white bg-white">
        <Link href="/">
          <Button>Página principal</Button>
        </Link>
        <h1 className="title-1">Crear publicación</h1>

        <div>
          <h2 className="text-xl not-italic font-medium text-app-blue">
            <Link href="/">Back</Link>
          </h2>
          <h1 className="pb-2 title-2 text-app-blackLight">Publicación </h1>
          <p className="pb-8 subtitle-2 text-app-grayDark">
            Información básica
          </p>
          <form>
            <div className="">
              <div className="">
                <label className="text-base not-italic font-normal text-app-grayDark">
                  Título de publicación
                </label>
              </div>
              <input
                type="text"
                className="block text-base font-normal rounded-md w-76 h-14 text-app-grayLighter bg-app-black/80 border-app-grayLighter border-y-2 border-x-2"
              ></input>
            </div>
            <div className="flex pt-7">
              <div className="relative pr-5">
                <select
                  className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Marcas y tiendas</option>
                  <option>Artistas y conciertos</option>
                  <option>Torneos</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <svg
                    width="75"
                    height="13"
                    viewBox="0 0 25 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_285_3092)">
                      <path
                        d="M22.5703 1.77499L12.5703 11.775L2.57031 1.77499L4.34531 -5.72205e-06L12.5703 8.22499L20.7953 -5.72205e-06L22.5703 1.77499Z"
                        fill="#7D7D7D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_285_3092">
                        <rect
                          width="11.775"
                          height="24"
                          fill="white"
                          transform="matrix(0 -1 1 0 0.570312 11.775)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select
                  className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Ropa y accesorios</option>
                  <option>Deportes</option>
                  <option>Conciertos</option>
                  <option>Meet & Greet</option>
                  <option>E-sport</option>
                  <option>Pop - Rock</option>
                  <option>Tecnología</option>
                  <option>Hogar - Decoración </option>
                  <option>Abastecimiento</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center text-gray-700 pointer-events-none">
                  <svg
                    width="75"
                    height="13"
                    viewBox="0 0 25 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_285_3092)">
                      <path
                        d="M22.5703 1.77499L12.5703 11.775L2.57031 1.77499L4.34531 -5.72205e-06L12.5703 8.22499L20.7953 -5.72205e-06L22.5703 1.77499Z"
                        fill="#7D7D7D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_285_3092">
                        <rect
                          width="11.775"
                          height="24"
                          fill="white"
                          transform="matrix(0 -1 1 0 0.570312 11.775)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <div className="">
                <label className="text-base not-italic font-normal text-app-grayDark">
                  Por qué lo recomiendas?
                </label>
              </div>
              <input
                type="text"
                className="block text-base font-normal rounded-md w-155 h-29 text-app-grayLighter bg-app-black/80 border-app-grayLighter border-y-2 border-x-2"
              ></input>
            </div>
            <div className="pt-4 pb-10">
              <div className="">
                <label className="text-base not-italic font-normal text-app-grayDark">
                  Link de referencia
                </label>
              </div>
              <input
                type="text"
                className="block text-base font-normal rounded-md w-76 h-14 text-app-grayLighter bg-app-black/80 border-app-grayLighter border-y-2 border-x-2"
              ></input>
            </div>
            <Link href="/">
              <button
                type="submit"
                className=" w-76 h-11 text-app-black font-semibold rounded-lg text-xs px-5 py-2.5 text-center bg-app-blue "
              >
                Siguiente
              </button>
            </Link>
          </form>
          <h2 className="pb-2 title-2 text-app-blackLight">Fotos</h2>
          <p className="pb-6 subtitle-2 text-app-grayDark">
            Selecciona máximo tres fotos para crear una galería
          </p>
          <div className="flex items-center justify-center h-64 border-2 w-155">
            <label className=" hover:bg-gray-100 hover:border-gray-300">
              <div className="flex items-center justify-center border-2 w-44 h-52">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z"
                    fill="#1B4DB1"
                  />
                </svg>
                <input type="file" className="opacity-0" />
              </div>
            </label>
            <label className=" hover:bg-gray-100 hover:border-gray-300">
              <div className="flex items-center justify-center border-2 w-44 h-52">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z"
                    fill="#1B4DB1"
                  />
                </svg>
                <input type="file" className="opacity-0" />
              </div>
            </label>
            <label className=" hover:bg-gray-100 hover:border-gray-300">
              <div className="flex items-center justify-center border-2 w-44 h-52">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z"
                    fill="#1B4DB1"
                  />
                </svg>
                <input type="file" className="opacity-0" />
              </div>
            </label>
          </div>

          <button
            type="submit"
            className=" w-31 h-12 text-app-black font-semibold rounded-lg text-xs px-5 py-2.5 text-center bg-app-blue "
          >
            Publicar
          </button>
        </div>
      </div> */
}
