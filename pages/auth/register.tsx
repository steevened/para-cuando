import Button from '@/components/buttons/Button';
import Head from 'next/head';
import Link from 'next/link';

export default function register() {
  return (
    <>
      <Head>
        <title>Sign Up - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <div className="flex flex-col items-center justify-start h-screen gap-10 pt-10 text-white bg-red-600 ">
        <Link href="/">
          <Button>Página principal</Button>
        </Link>
        <h1 className="title-1 ">Sign Up</h1>
        <div className="flex flex-col justify-start mt-13 ml-11 border-y-2 border-x-2 rounded-2xl border-app-gray bg-app-black/70">
          <h1 className=" pb-4 font-sans not-italic font-semibold text-3xl  text-app-grayLighter">
            Todos votamos :)
          </h1>
          <p className="pb-10 font-sans not-italic font-normal text-sm text-app-grayLighter ">
            Registrate para ingresar
          </p>
          <form>
            <div className="pb-1">
              <label className="font-semibold text-sm not-italic">Email</label>
              <input
                type="email"
                placeholder="ejemplo@mail.com"
                className="w-109 h-14 p-4 block mb-2 text-base font-normal text-app-gray bg-app-black/70 border-app-gray border-y-2 border-x-2 rounded-md"
              ></input>
            </div>
            <div className="">
              <label className="font-semibold text-sm not-italic text-app-grayLighter">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Erik"
                className="w-53 h-14 p-4 block mb-2 text-base font-normal text-app-gray bg-app-black/70 border-app-gray border-y-2 border-x-2 rounded-md"
              ></input>
            </div>
            <div className="">
              <label className="font-semibold text-sm not-italic text-app-grayLighter">
                Apellido
              </label>
              <input
                type="text"
                placeholder="Perez"
                className=" w-53 h-14 p-4 block mb-2 text-base font-normal text-app-gray bg-app-black/70 border-app-gray border-y-2 border-x-2 rounded-md"
              ></input>
            </div>
            <div className="">
              <label className="font-semibold text-sm not-italic text-app-grayLighter">
                Contraseña
              </label>
              <input
                type="password"
                className=" w-109 h-14 p-4 block mb-2 text-base font-normal text-app-grayLighter bg-app-black/70 border-app-gray border-y-2 border-x-2 rounded-md"
              ></input>
            </div>
            <p className="pb-10 font-sans not-italic font-normal text-sm text-app-grayLight ">
              La contraseña debe tener mayúsculas, minúsculas, números
            </p>

            <button
              type="submit"
              className=" w-76 h-11 text-app-black font-semibold rounded-lg text-base px-5 py-2.5 text-center bg-app-yellow "
            >
              Crear cuenta
            </button>
            <p>
              <a href="#" className="font-normal text-sm text-app-yellow">
                O iniciar sesión
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
