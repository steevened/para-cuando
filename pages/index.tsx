import Hero from '@/components/home/Hero';
import Layout from '@/components/layouts/Layout';
import { PublicationsData } from '@/lib/helpers';
import { Types } from '@/lib/interfaces/publicationTypes/publicationTypes.interface';
import { Publications } from '@/lib/interfaces/publications/publications.interface';
import useModalStore from '@/store/loginModal';
import { GetStaticProps } from 'next';

import MainContent from '@/components/home/MainContent';
import Head from 'next/head';
import type { ReactElement } from 'react';
import ModalForm from '../components/Forms/ModalForm';
import type { NextPageWithLayout } from './_app';

interface Props {
  publicationTypes: Types;
  publications: Publications;
}

const Page: NextPageWithLayout<Props> = ({
  publicationTypes,
  publications,
}) => {
  const { isLoginModalOpen } = useModalStore();

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
      <MainContent publications={publications} />
      {isLoginModalOpen && <ModalForm />}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // all publications
  const publications = await PublicationsData.getAllPublications();
  // publication by ID

  // publication types
  const publicationTypes = await PublicationsData.getPublicationTypesData();

  return {
    props: { publicationTypes, publications },
  };
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
