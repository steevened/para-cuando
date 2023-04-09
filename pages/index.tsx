import Hero from '@/components/home/Hero';
import Layout from '@/components/layouts/Layout';
import { PublicationsData } from '@/lib/helpers';
import { Types } from '@/lib/interfaces/publicationTypes/publicationTypes.interface';
import { GetStaticProps } from 'next';

import MainContent from '@/components/home/MainContent';
import { AuthModalContext } from '@/context';
import Head from 'next/head';
import { ReactElement, useContext } from 'react';
import ModalForm from '../components/Forms/ModalForm';
import type { NextPageWithLayout } from './_app';

interface Props {
  publicationTypes: Types;
}

const Page: NextPageWithLayout<Props> = ({ publicationTypes }) => {
  const { isAuthModalShowed } = useContext(AuthModalContext);

  return (
    <>
      <Head>
        <title>Para Cuándo</title>
        <meta
          name="description"
          content="Descubre lo más deseado en tu ciudad"
        />
      </Head>
      <Hero publicationTypes={publicationTypes} />
      <MainContent />
      {isAuthModalShowed && <ModalForm />}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // all publications
  // const publications = await PublicationsData.getAllPublications();
  // publication by ID

  // publication types
  const publicationTypes = await PublicationsData.getPublicationTypesData();

  return {
    props: { publicationTypes },
  };
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
