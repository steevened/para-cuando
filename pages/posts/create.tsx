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
    </>
  );
}
