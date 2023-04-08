import Input from '@/components/Forms/Input';
import { MenuDropDown } from '@/components/categories/homeCategories/MenuDropdown';
import PostCategories from '@/components/categories/homeCategories/PostCategories';
import Main from '@/components/home/Main';
import Layout from '@/components/layouts/Layout';
import {
  getPublicationTypesById,
  getPublicationTypesData,
} from '@/lib/helpers';
import {
  Type,
  Types,
} from '@/lib/interfaces/publicationTypes/publicationTypes.interface';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

interface Props {
  type: Type;
  publicationTypes: Types;
}

const CategoryPage: NextPageWithLayout<Props> = ({
  type,
  publicationTypes,
}) => {
  const { name, description } = type;

  const router = useRouter();

  // const styles = {
  //   backgroundImage: `url(${
  //     slug === 'Marcas y Tiendas'
  //       ? marcas.src
  //       : slug === 'Artistas y Conciertos'
  //       ? artistas.src
  //       : torneos.src
  //   })`,
  // };

  return (
    <>
      <Head>
        <title>{type.name} - Para Cuándo</title>
        <meta name="description" content={description} />
      </Head>
      <section className="relative">
        <div className="bg-center bg-cover h-52 bg-none" />

        <div className="absolute inset-0 px-4 max-w-[940px] mx-auto flex flex-col justify-evenly md:justify-center py-3">
          <nav className="flex text-white subtitle-1" aria-label="Breadcrumb">
            <ul className="inline-flex items-center space-x-1 md:space-x-3 md:mb-6">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center ">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="ml-1">
                <p>{name}</p>
              </li>
            </ul>
          </nav>
          <h1 className="title-1 text-app-yellow md:mb-2">{name}</h1>
          <p className="text-white subtitle-1 md:mb-4">
            {description[0].toUpperCase()}
            {description.slice(1)}
          </p>
        </div>
      </section>
      <div className="relative w-full shadow-shadow1 py-9">
        <div className="flex px-5 max-w-[980px] mx-auto justify-between gap-2 items-center">
          <MenuDropDown publicationTypes={publicationTypes} />
          <div className="hidden md:block md:flex-[1] mr-10 ">
            <PostCategories publicationTypes={publicationTypes} />
          </div>
          <div className="flex-1 ">
            <Input />
          </div>
        </div>
      </div>
      <Main />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const publicationTypes: Types = await getPublicationTypesData();
  return {
    paths: publicationTypes.results.map((type) => ({
      params: { id: type.id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const publicationTypes: Types = await getPublicationTypesData();
  const { id } = params as { id: string };
  return {
    props: { type: await getPublicationTypesById(id), publicationTypes },
  };
};

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
