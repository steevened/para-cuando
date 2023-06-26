import { MenuDropDown } from '@/components/categories/homeCategories/MenuDropdown';
import PostCategories from '@/components/categories/homeCategories/PostCategories';
import Input from '@/components/Forms/Input';
import MainContent from '@/components/home/MainContent';
import Layout from '@/components/layouts/Layout';
import { usePublicationTypesById } from '@/lib/services/publicationTypes/publicationTypes.services';
import artistasImg from '@/public/categories/artistas.png';
import marcasImg from '@/public/categories/marcas.png';
import torneosImg from '@/public/categories/torneos.png';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { NextPageWithLayout } from '../_app';

// interface Props {
//   type: Type;
// }

const CategoryPage: NextPageWithLayout = () => {
  const router = useRouter();

  const { id: publicationID } = router.query;

  const {
    data: type,
    error,
    isLoading,
  } = usePublicationTypesById(publicationID as string);

  console.log(type);

  const { name, description, id } = type || {};

  const [imageUrl, setImageUrl] = useState<StaticImageData>(marcasImg);

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
        <title>{type?.name} - Para Cuándo</title>
        <meta name="description" content={description?.toString()} />
      </Head>
      <section className="relative h-52 ">
        <Image
          src={imageUrl.src}
          alt={'Para Cuándo'}
          className="absolute inset-0 object-cover w-full h-full"
          width={1500}
          height={500}
          priority
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
          <p className="text-white subtitle-1 md:mb-4 capitalize">
            {description}
          </p>
        </div>
      </section>
      <div className="relative w-full shadow-shadow1 py-9">
        <div className="flex px-5 max-w-[980px] mx-auto justify-between gap-2 items-center">
          <MenuDropDown />
          <div className="hidden md:block md:flex-[1] mr-10 ">
            <PostCategories />
          </div>
          <div className="flex-1 ">
            <Input />
          </div>
        </div>
      </div>
      <MainContent />
    </>
  );
};

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
