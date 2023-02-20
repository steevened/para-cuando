import Button from '@/components/buttons/Button';
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
      <section className="flex flex-col items-center justify-center py-10 text-white bg-app-blackLight">
        <Link href="/">
          <Button>Página principal</Button>
        </Link>
        <h1 className="py-10 title-1">{slug}</h1>
      </section>
    </>
  );
};

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
