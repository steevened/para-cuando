import Input from '@/components/Forms/Input';
import { MenuDropDown } from '@/components/categories/homeCategories/MenuDropdown';
import PostCategories from '@/components/categories/homeCategories/PostCategories';
import Layout from '@/components/layouts/Layout';
import { PublicationsData } from '@/lib/helpers';
import {
  Type,
  Types,
} from '@/lib/interfaces/publicationTypes/publicationTypes.interface';
import artistasImg from '@/public/categories/artistas.png';
import marcasImg from '@/public/categories/marcas.png';
import torneosImg from '@/public/categories/torneos.png';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactElement, useEffect, useState } from 'react';
import { NextPageWithLayout } from '../_app';

interface Props {
  type: Type;
  publicationTypes: Types;
}

const CategoryPage: NextPageWithLayout<Props> = ({
  type,
  publicationTypes,
}) => {
  const { name, description, id } = type;

  const [imageUrl, setImageUrl] = useState<StaticImageData>();

  useEffect(() => {
    if (id === '1') {
      setImageUrl(marcasImg);
    } else if (id === '2') {
      setImageUrl(artistasImg);
    } else {
      setImageUrl(torneosImg);
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>{type.name} - Para Cuándo</title>
        <meta name="description" content={description.toString()} />
      </Head>
      <section className="relative h-52 ">
        <Image
          src={imageUrl?.src!}
          alt={name}
          className="absolute inset-0 object-cover w-full h-full"
          fill
        />
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
      {/* <MainContent /> */}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const publicationTypes: Types =
    await PublicationsData.getPublicationTypesData();
  return {
    paths: publicationTypes.results.map((type) => ({
      params: { id: type.id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const publicationTypes: Types =
    await PublicationsData.getPublicationTypesData();
  const { id } = params as { id: string };
  return {
    props: {
      type: await PublicationsData.getPublicationTypesById(id),
      publicationTypes,
    },
  };
};

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
