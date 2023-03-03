import UserLogo from '@/components/atoms/UserLogo';
import BtnVote from '@/components/buttons/BtnVote';
import CategorieNavbar from '@/components/categories/homeCategories/CategorieNavbar';
import Categories from '@/components/categories/homeCategories/Categories';
import Layout from '@/components/layouts/Layout';
import SectionSlider from '@/components/sliders/SectionSlider';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';

import db from '../../db.json';
import { NextPageWithLayout } from '../_app';
const EventoPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [evento, setEvento] = useState<any>();

  useEffect(() => {
    const eventoFilter = db.filter((event) => event.id === Number(slug));
    setEvento(eventoFilter);
  }, [slug]);

  return (
    <>
      <Head>
        <title>{slug} - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <CategorieNavbar />
      <div className="app-container">
        <ul className="inline-flex items-center mt-[58px] space-x-1 md:space-x-3 md:mb-6">
          <li className="inline-flex items-center">
            <p>{evento?.[0]?.tipo}</p>
          </li>
          <li>/</li>
          <li className="ml-1">
            <p>{evento?.[0]?.categorias}</p>
          </li>
        </ul>
        <h2>{evento?.[0]?.title}</h2>
        <p>{evento?.[0]?.description}</p>
        <p>{evento?.[0]?.web}</p>
        <div>
          <UserLogo />
          <p>{evento?.[0]?.votes} votos</p>
        </div>
        <Image
          src={evento?.[0]?.img}
          alt={evento?.[0]?.title}
          width={300}
          height={299}
        />
        <BtnVote voted={false} />
        <Categories />
        <SectionSlider
          title="Recientes"
          subtitle="Las personas últimanete están hablando de esto"
        />
      </div>
    </>
  );
};

EventoPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default EventoPage;
