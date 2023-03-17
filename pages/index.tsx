import Hero from '@/components/home/Hero';
import Main from '@/components/home/Main';
import Layout from '@/components/layouts/Layout';
import useModalStore from '@/store/loginModal';
import Head from 'next/head';
import type { ReactElement } from 'react';
import { Toaster } from 'react-hot-toast';
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
      <Toaster />
      <Hero />
      <Main />
      {isLoginModalOpen && <ModalForm />}
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
