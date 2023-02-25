import Button from '@/components/buttons/Button';
import Head from 'next/head';
import Link from 'next/link';

export default function login() {
  return (
    <>
      <Head>
        <title>Log In - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <div className="flex flex-col items-center justify-start h-screen gap-10 pt-10 text-white bg-app-blackLight">
        <Link href="/">
          <Button>Página principal</Button>
        </Link>
        <h1 className="title-1 ">Login</h1>

        <div className="flex flex-col justify-start h-screen w-95 h-133 mt-13 ml-11 border-y-2 border-x-2 rounded-2xl border-app-gray bg-app-black/80">
          <h1 className="pb-4 font-sans text-3xl not-italic font-semibold text-app-grayLighter">
            ¡Hola!
          </h1>
          <p className="pb-10 font-sans text-sm not-italic font-normal text-app-grayLighter ">
            Inicie sesion con los datos que ingreso durante su registro
          </p>
          <form>
            <div className="pb-1">
              <label className="text-sm not-italic font-semibold">Email</label>
              <input
                type="email"
                className="block p-4 mb-2 text-base font-normal rounded-md w-76 h-14 text-app-grayLighter bg-app-black/80 border-app-grayLighter border-y-2 border-x-2"
              ></input>
            </div>
            <div className="">
              <label className="text-sm not-italic font-semibold">
                Contraseña
              </label>
              <input
                type="password"
                className="block p-4 mb-2 text-base font-normal rounded-md w-76 h-14 text-app-grayLighter bg-app-black/80 border-app-grayLighter border-y-2 border-x-2"
              ></input>
            </div>
            <p className="text-sm font-light text-app-grayLight">
              Olvidaste tu contraseña?
              <div className="font-medium text-app-yellow ">
                Recuperala Aqui
              </div>
            </p>
            <button
              type="submit"
              className="w-full w-76 h-11 text-app-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-app-yellow "
            >
              Iniciar Sesion
            </button>
            <p>
              <Link
                href="/auth/register"
                className="font-medium text-app-yellow"
              >
                O crear una cuenta aqui
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
