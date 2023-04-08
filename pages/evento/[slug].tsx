import UserLogo from '@/components/atoms/UserLogo';
import BtnVote from '@/components/buttons/BtnVote';
import CategorieNavbar from '@/components/categories/homeCategories/CategorieNavbar';
import Categories from '@/components/categories/homeCategories/Categories';
import Layout from '@/components/layouts/Layout';
import SectionSlider from '@/components/sliders/SectionSlider';
import { getPublicationTypesData } from '@/lib/helpers';
import { Types } from '@/lib/interfaces/publicationTypes/publicationTypes.interface';
import { usePublicationId } from '@/lib/services/publications/publicationId.services';
import { votePublication } from '@/lib/services/publications/publicationVote.services';
import { useUserVotes } from '@/lib/services/votes/userVotes.services';
import useAuthStore from '@/store/auth';
import Cookies from 'js-cookie';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import img404 from '../../public/notfound.png';
import { NextPageWithLayout } from '../_app';

interface Props {
  publicationTypes: Types;
}

const EventoPage: NextPageWithLayout<Props> = ({ publicationTypes }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [isVoted, setIsVoted] = useState<boolean>(false);

  const {
    data: publication,
    error,
    isLoading,
    mutate,
  } = usePublicationId(slug as string);

  const { data: votes, mutate: mutateVotes } = useUserVotes();
  const { isLogedIn } = useAuthStore();
  const [userLogged, setUserLogged] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setUserLogged(true);
    } else {
      setUserLogged(false);
    }
  }, [isLogedIn]);

  useEffect(() => {
    if (votes) {
      const isVoted = votes.find((vote) => vote.publications_id === slug);
      if (isVoted) {
        setIsVoted(true);
      } else {
        setIsVoted(false);
      }
    }
  }, [votes, slug, isLogedIn]);

  const handleVote = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const toastId = toast.promise(votePublication(slug as string), {
      loading: 'Espere...',
      success: `${isVoted ? 'Voto eliminado' : 'Voto agregado'}`,
      error: `${
        userLogged ? 'Error al votar' : 'Inicie sesión para continuar'
      }`,
    });

    try {
      const response = await toastId;
      // console.log(response);
      mutate();
      mutateVotes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>{publication?.title} - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <CategorieNavbar publicationTypes={publicationTypes} />
      <div className="max-w-[1100px] md:mx-auto mx-5">
        <section className="w-full grid items-start md:grid-cols-2 mt-[60px] gap-x-5">
          <div className="md:row-span-2">
            <p>
              {publication?.publications_type.name} /{' '}
              {publication?.publications_type.description}
            </p>

            <div className="mt-1.5">
              <h1 className="text-black title-1">{publication?.title}</h1>
              <p className="mt-[22px] text-app-grayDark">
                {publication?.description}
              </p>
            </div>

            <div className="mt-8">
              <p className="text-[#1B4DB1]">{publication?.reference_link}</p>
              <div className="flex gap-2 mt-4">
                <UserLogo />
                <p>
                  {publication?.votes_count}{' '}
                  {publication?.votes_count !== 1 ? 'votos' : 'voto'}
                </p>
              </div>
            </div>
          </div>
          <Image
            className="w-full mt-6 md:mt-0 md:row-span-3"
            src={
              publication?.images[0]?.image_url
                ? publication?.images[0]?.image_url
                : img404
            }
            alt="publication"
            width={539}
            height={381}
          />

          <div className="w-full mt-7">
            <BtnVote onClick={handleVote} voted={isVoted} />
          </div>
        </section>

        <Categories />
        <SectionSlider
          className="mb-10"
          title="Recientes"
          subtitle="Las personas últimanete están hablando de esto"
        />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const publicationTypes: Types = await getPublicationTypesData();
  return {
    props: { publicationTypes },
  };
};

EventoPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default EventoPage;
