import Arrow from '@/components/atoms/Arrow';
import Button from '@/components/buttons/Button';
import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import Link from 'next/link';
import type { ReactElement } from 'react';
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
      <div className="flex flex-col items-center justify-between py-10 text-white bg-app-blackLight">
        <h1 className="title-1">HOME</h1>
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
        <Arrow orientation="left" />
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
