import Hero from '@/components/home/Hero';
import Main from '@/components/home/Main';
import Layout from '@/components/layouts/Layout';
import { getPublicationTypesData } from '@/lib/helpers';
import { Types } from '@/lib/interfaces/publicationTypes/publicationTypes.interface';
import useModalStore from '@/store/loginModal';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import type { ReactElement } from 'react';
import ModalForm from '../components/Forms/ModalForm';
import type { NextPageWithLayout } from './_app';

interface Props {
  publicationTypes: Types;
}

const Page: NextPageWithLayout<Props> = ({ publicationTypes }) => {
  const { isLoginModalOpen } = useModalStore();

  return (
    <>
      <Head>
        <title>Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <Hero publicationTypes={publicationTypes} />
      <Main />
      {isLoginModalOpen && <ModalForm />}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const publicationTypes = await getPublicationTypesData();

  return {
    props: { publicationTypes },
  };
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
