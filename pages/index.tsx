import Hero from '@/components/home/Hero';
import Layout from '@/components/layouts/Layout';

import MainContent from '@/components/home/MainContent';
import { AuthModalContext } from '@/context';
import Head from 'next/head';
import { ReactElement, useContext } from 'react';
import ModalForm from '../components/Forms/ModalForm';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  const { isAuthModalShowed } = useContext(AuthModalContext);

  // console.log(isAuthModalShowed);

  return (
    <>
      <Head>
        <title>Para Cuándo</title>
        <meta
          name="description"
          content="Descubre lo más deseado en tu ciudad"
        />
      </Head>
      <Hero />
      <MainContent />
      {isAuthModalShowed && <ModalForm />}
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
