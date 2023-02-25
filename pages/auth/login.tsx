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

        <div className="flex flex-col justify-start  mt-13 ml-11 border-y-2 border-x-2 rounded-2xl border-app-gray bg-app-black/80">
          <h1 className=" pb-4 font-sans not-italic font-semibold text-3xl  text-app-grayLighter">
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
                placeholder="ejemplo@mail.com"
                className="w-76 h-14 p-4 block mb-2 text-base font-normal text-app-grayLighter bg-app-black/80 border-app-grayLighter border-y-2 border-x-2 rounded-md"
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
            <p className="text-xs font-normal text-app-grayLight">
              Olvidaste tu contraseña?{' '}
              <Link href="#" className="font-medium text-app-yellow ">
                Recuperala Aqui
              </Link>
            </p>
            <button
              type="submit"
              className=" w-76 h-11 text-app-black font-semibold rounded-lg text-xs px-5 py-2.5 text-center bg-app-yellow "
            >
              Iniciar Sesion
            </button>
            <p>
              <Link
                href="/auth/register"
                className="font-normal text-sm text-app-yellow"
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
