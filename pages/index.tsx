import Checked from '@/components/atoms/Checked';
import Eye from '@/components/atoms/Eye';
import UserLogo from '@/components/atoms/UserLogo';
import UserOutlined from '@/components/atoms/UserOutlined';
import BtnNext from '@/components/buttons/BtnNext';
import BtnVote from '@/components/buttons/BtnVote';
import Button from '@/components/buttons/Button';
import Layout from '@/components/layouts/Layout';
import HomeSlider from '@/components/sliders/HomeSlider';
import Head from 'next/head';
import Link from 'next/link';
import type { ReactElement } from 'react';
import Warning from '../components/atoms/Warning';
import type { NextPageWithLayout } from './_app';

interface Category {
  title: string;
  id: number;
}

const categories: Array<Category> = [
  { title: 'Marcas y tiendas', id: 1 },
  { title: 'Artistas y conciertos', id: 2 },
  { title: 'Torneos', id: 3 },
];

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <div></div>
      <div className="flex flex-col items-center justify-between py-10 text-white bg-app-grayDark">
        <div className="container">
          <HomeSlider />
        </div>
        <ul className="flex justify-between w-full mt-10 sm:w-3/4">
          {categories.map((categorie) => (
            <li key={categorie.id}>
              <Link
                href={{
                  pathname: '/categories/[slug]',
                  query: { slug: categorie.title },
                }}
              >
                <Button>{categorie.title}</Button>
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative grid grid-cols-3 gap-4 p-5 mt-10 border rounded-md place-items-center">
          <h2 className="absolute px-3 -top-3 bg-app-grayDark">Átomos</h2>
          <UserLogo />
          <UserOutlined />
          <Eye />
          <Checked />
          <Warning />
          <BtnNext disabled={true}>Siguiente</BtnNext>
          <BtnNext disabled={false}>Siguiente</BtnNext>
          <BtnVote voted={true} />
          <BtnVote voted={false} />
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
