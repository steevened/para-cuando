import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

const CategoryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{slug} - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <section className="flex flex-col items-center justify-center bg-app-blackLight text-white py-10">
        <Link href="/">
          <button className="px-4 py-2 rounded-lg shadow-lg bg-slate-700 ">
            Página principal
          </button>
        </Link>
        <h1 className="title-1 py-10">{slug}</h1>
      </section>
    </>
  );
};

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
