import Button from '@/components/buttons/Button';
import Head from 'next/head';
import Link from 'next/link';

export default function create() {
  return (
    <>
      <Head>
        <title>Crear Publicación - Para Cuándo</title>
      </Head>
      <div className="flex flex-col items-center justify-start h-screen gap-10 pt-10 bg-white text-white">
        <Link href="/">
          <Button>Página principal</Button>
        </Link>
        <h1 className="title-1">Crear publicación</h1>

        <div>
          <h2 className="not-italic font-medium text-xl text-app-blue">
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
                className="w-76 h-14 block text-base font-normal text-app-grayLighter bg-app-black/80 border-app-grayLighter border-y-2 border-x-2 rounded-md"
              ></input>
            </div>
            <div className="pt-7 flex">
              <div className="pr-5 relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Marcas y tiendas</option>
                  <option>Artistas y conciertos</option>
                  <option>Torneos</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
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
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center  text-gray-700">
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
                className="w-155 h-29 block text-base font-normal text-app-grayLighter bg-app-black/80 border-app-grayLighter border-y-2 border-x-2 rounded-md"
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
                className="w-76 h-14 block text-base font-normal text-app-grayLighter bg-app-black/80 border-app-grayLighter border-y-2 border-x-2 rounded-md"
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
        </div>
      </div>
    </>
  );
}
