import TwoStepsForm from '@/components/create/Forms/TwoStepsForm';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import logo from '../../public/create/logo.svg';

export default function Create() {
  const [steps, setSteps] = useState(1);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Crear Publicación - Para Cuándo</title>
      </Head>

      <div className="flex flex-col h-full min-h-screen sm:flex-row">
        <div className="pb-5 bg-app-blue w-full sm:max-w-[255px] ">
          <div className="relative h-full app-container ">
            <Image
              src={logo}
              alt="para cuando logo"
              className="pt-8 mx-auto sm:pt-24 "
            />
            <h1 className="mt-8 title-3 text-app-yellow sm:pt-10 sm:w-1/2">
              ¡Bienvenido, creador!
            </h1>
            <p className="mt-6 text-white text-1">
              A continuación puedes completar la info de la marca, artista o
              torneo que quieres cerca.
            </p>
            <p className="absolute hidden text-white text-1 bottom-6 sm:block">
              Ayuda
            </p>
          </div>
        </div>
        <div className="mt-6 text-xl sm:mt-2 app-container ">
          <button
            className="text-app-blue "
            onClick={() => {
              steps === 1 ? handleBack() : setSteps(steps - 1);
            }}
          >
            Back
          </button>
          <div className="w-full max-w-[620px] mx-auto">
            <div
              className={`relative w-full h-2 overflow-hidden  rounded-full bg-app-grayLight mt-11 border`}
            >
              <div
                className={`absolute inset-y-0  transition-all duration-300 bg-app-blue ${
                  steps === 1 ? 'w-1/2' : 'w-full'
                }`}
              />
            </div>
            <h2 className="title-2 text-app-blackLight mt-11">
              {steps === 1 ? 'Publicación' : 'Fotos'}
            </h2>
            <p className="mt-2 subtitle-2 text-app-grayDark">
              {steps === 1
                ? 'Información básica'
                : 'Selecciona máximo tres fotos para crear una galería'}
            </p>
            <TwoStepsForm steps={steps} setSteps={setSteps} />
          </div>
        </div>
      </div>
    </>
  );
}
