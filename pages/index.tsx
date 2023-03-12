import Hero from '@/components/home/Hero';
import Main from '@/components/home/Main';
import Layout from '@/components/layouts/Layout';
import useModalStore from '@/store/loginModal';
import Head from 'next/head';
import type { ReactElement } from 'react';
import ModalForm from '../components/Forms/ModalForm';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const { isLoginModalOpen } = useModalStore();

  return (
    <>
      <Head>
        <title>Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <Hero />
      <Main />
      {isLoginModalOpen && (
        <div className="fixed top-24 inset-x-0  z-50 mx-5 h-[530px]">
          <ModalForm />
        </div>
      )}
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
