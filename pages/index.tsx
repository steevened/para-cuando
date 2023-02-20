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
        <title>Para Cuando</title>
        <meta name="description" content="description" />
      </Head>
      <div className="flex flex-col items-center justify-between min-h-screen py-10 text-white bg-app-blue">
        <div className="flex gap-5">
          <button className="px-4 py-1 border rounded-lg focus:scale-95">
            <Link href="/auth/login">Login</Link>
          </button>
          <button className="px-4 py-1 border rounded-lg focus:scale-95">
            <Link href="/auth/register">Register</Link>
          </button>
        </div>
        <Link href="/">
          <h1 className="title-1">HOME</h1>
        </Link>
        <ul className="flex justify-between w-3/4 mt-10">
          {categories.map((categorie) => (
            <li key={categorie.id}>
              <Link
                href={{
                  pathname: '/categories/[slug]',
                  query: { slug: categorie.title },
                }}
                className="px-4 py-2 rounded-lg shadow-lg bg-slate-700 "
              >
                {categorie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
