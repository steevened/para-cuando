import Hero from '@/components/home/Hero';
import Main from '@/components/home/Main';
import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <Hero />
      <Main />

      {/* <div className="flex flex-col items-center justify-between py-10 text-white bg-app-grayDark">
  
        
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
      </div> */}
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
