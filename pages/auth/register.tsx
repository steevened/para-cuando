import Button from '@/components/buttons/Button';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import x1button from '../../public/authLogin/cil_x-circle.svg';

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
        <Image src={x1button} alt="close button" />
        <div className="flex flex-col justify-start mt-13 ml-11 border-y-2 border-x-2 rounded-2xl border-app-gray bg-app-black/70">
          <h1 className="pt-11 font-sans not-italic font-semibold text-3xl  text-app-grayLighter">
            Todos votamos :)
          </h1>
          <p className="pt-5 font-sans not-italic font-normal text-sm text-app-grayLighter ">
            Registrate para ingresar
          </p>
          <form>
            <div className="">
              <div className="pt-6 pb-2">
                <label className=" font-semibold text-sm not-italic">
                  Email
                </label>
              </div>

              <input
                type="email"
                placeholder="ejemplo@mail.com"
                className="w-109 h-14 block text-base font-normal text-app-gray bg-app-black/70 border-app-gray border-y-2 border-x-2 rounded-md"
              ></input>
            </div>
            <div className="pt-1 flex ">
              <div className="">
                <div className="pb-2">
                  <label className="font-semibold text-sm not-italic text-app-grayLighter">
                    Nombre
                  </label>
                </div>

                <input
                  type="text"
                  placeholder="Erik"
                  className="w-53 h-14 block text-base font-normal text-app-gray bg-app-black/70 border-app-gray border-y-2 border-x-2 rounded-md"
                ></input>
              </div>
              <div className="pl-2">
                <div className="pb-2">
                  <label className="font-semibold text-sm not-italic text-app-grayLighter">
                    Apellido
                  </label>
                </div>

                <input
                  type="text"
                  placeholder="Perez"
                  className=" w-53 h-14 block text-base font-normal text-app-gray bg-app-black/70 border-app-gray border-y-2 border-x-2 rounded-md"
                ></input>
              </div>
            </div>
            <div className="">
              <div className="pb-2">
                <label className="font-semibold text-sm not-italic text-app-grayLighter">
                  Contraseña
                </label>
              </div>

              <input
                type="password"
                className=" w-109 h-14 block text-base font-normal text-app-grayLighter bg-app-black/70 border-app-gray border-y-2 border-x-2 rounded-md"
              ></input>
            </div>
            <p className="pt-2 pb-8 font-sans not-italic font-normal text-sm text-app-grayLight ">
              La contraseña debe tener mayúsculas, minúsculas, números
            </p>

            <button
              type="submit"
              className=" w-76 h-11 text-app-black font-semibold rounded-lg text-base text-center bg-app-yellow "
            >
              Crear cuenta
            </button>
            <p className="pt-5">
              <Link
                href="/auth/login"
                className="font-normal text-sm text-app-yellow"
              >
                O iniciar sesión
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
