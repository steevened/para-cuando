import BtnSumbit from '@/components/auth/BtnSumbit';
import Hero from '@/components/home/Hero';
import Main from '@/components/home/Main';
import Layout from '@/components/layouts/Layout';
import useModalStore from '@/store/loginModal';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { useState } from 'react';
import ModalContainer from '../components/auth/ModalContainer';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const { isLoginModalOpen, closeLoginModal } = useModalStore();
  const [isLoginFormShowed, setIsLoginFormShowed] = useState<boolean>(false);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <Hero />
      <Main />
      {isLoginModalOpen && (
        // {isLoginFormShowed ? () : ()}

        <div className="fixed top-24 inset-x-0  z-50 mx-5 h-[530px]">
          <ModalContainer>
            <div className="text-white flex flex-col items-center justify-center h-full">
              <h1 className="font-semibold text-[32px] mb-3">
                Todos votamos :)
              </h1>
              <p className="text-1 mb-11">
                Todos los votos son importantes aquí. Para validar el tuyo debes
                tener una cuenta.
              </p>
              <BtnSumbit
                className="mb-6"
                onClick={() => {
                  router.push('/auth/register');
                  closeLoginModal();
                }}
              >
                Crear cuenta
              </BtnSumbit>
              <div className="flex justify-center">
                <button
                  onClick={() => setIsLoginFormShowed(true)}
                  className="text-app-yellow border-b text-center"
                >
                  O inicia sesión
                </button>
              </div>
            </div>
          </ModalContainer>
        </div>
      )}
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
