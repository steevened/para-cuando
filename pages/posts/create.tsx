import Input from '@/components/create/Input';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import logo from '../../public/create/logo.svg';

interface FormData {
  title: string;
}

export default function Create() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleBack = () => {
    router.back();
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
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
          <button className="text-app-blue " onClick={handleBack}>
            Back
          </button>
          <div className="relative w-full h-2 overflow-hidden duration-300 rounded-full bg-app-grayLight mt-11 after:absolute after:bg-app-blue after:w-1/2 after:inset-y-0" />
          <h2 className="title-2 text-app-blackLight mt-11">Publicación</h2>
          <p className="mt-2 subtitle-2 text-app-grayDark">
            Información básica
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-11">
            <Input
              {...register('title')}
              label="Titulo de la publicación"
              error={errors.title}
            />
          </form>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-start h-screen gap-10 pt-10 text-white bg-white">
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
      </div> */}
    </>
  );
}
