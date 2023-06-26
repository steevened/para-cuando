import UserLogo from '@/components/atoms/UserLogo';
import BtnVote from '@/components/buttons/BtnVote';
import CategorieNavbar from '@/components/categories/homeCategories/CategorieNavbar';
import Categories from '@/components/categories/homeCategories/Categories';
import Layout from '@/components/layouts/Layout';
import SectionSlider from '@/components/sliders/SectionSlider';
import { AuthContext } from '@/context';
import { PublicationsData } from '@/lib/helpers';
import { PublicationbyID } from '@/lib/interfaces/publications/publicationId.interface';
import { usePublicationId } from '@/lib/services/publications/publicationId.services';
import { votePublication } from '@/lib/services/publications/publicationVote.services';
import { useUserVotes } from '@/lib/services/votes/userVotes.services';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import img404 from '../../public/notfound.png';
import { NextPageWithLayout } from '../_app';

interface Props {
  publicationById: PublicationbyID;
}

const EventoPage: NextPageWithLayout<Props> = ({ publicationById }) => {
  const [isVoted, setIsVoted] = useState<boolean>(false);

  const {
    id,
    title,
    publications_type,
    description,
    reference_link,
    votes_count,
    images,
  } = publicationById;

  const { mutate } = usePublicationId(id);
  const { userData, isUserLoged } = useContext(AuthContext);

  const { data: votes, mutate: mutateVotes } = useUserVotes(userData.id);

  useEffect(() => {
    if (votes) {
      const isVoted = votes.find((vote) => vote.id === id);
      if (isVoted) {
        setIsVoted(true);
      } else {
        setIsVoted(false);
      }
    }
  }, [id, votes]);

  const handleVote = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const toastId = toast.promise(votePublication(id), {
      loading: 'Espere...',
      success: `${isVoted ? 'Voto eliminado' : 'Voto agregado'}`,
      error: `${
        isUserLoged ? 'Error al votar' : 'Inicie sesión para continuar'
      }`,
    });

    try {
      await toastId;
      mutate();
      mutateVotes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>{title} - Para Cuándo</title>
        <meta name="description" content={description} />
      </Head>
      <CategorieNavbar />
      <div className="max-w-[1100px] md:mx-auto mx-5">
        <section className="w-full grid items-start md:grid-cols-2 mt-[60px] gap-x-5 ">
          <div className="md:row-span-2  h-full">
            <p>
              {publications_type.name} / {publications_type.description}
            </p>

            <div className="mt-1.5">
              <h1 className="text-black title-1">{title}</h1>
              <p className="mt-[22px] text-app-grayDark">{description}</p>
            </div>

            <div className="mt-8">
              <a
                href={`https://${reference_link}`}
                target="_blank"
                className="text-[#1B4DB1]"
                rel="noreferrer noopener"
                // rel="noopener "
              >
                {reference_link}
              </a>
              <div className="flex gap-2 mt-4">
                <UserLogo />
                <p>
                  {votes_count} {votes_count !== 1 ? 'votos' : 'voto'}
                </p>
              </div>
            </div>
          </div>
          <Image
            className="w-full mt-6 md:mt-0 md:row-span-3 "
            src={images[0]?.image_url ? images[0]?.image_url : img404}
            alt={description}
            width={1000}
            height={1000}
            priority={true}
          />

          <div className="w-full pt-7  h-full flex items-end">
            <BtnVote onClick={handleVote} voted={isVoted} />
          </div>
        </section>

        <Categories />
        <SectionSlider
          className="mb-10"
          title="Recientes"
          subtitle="Las personas últimanete están hablando de esto"
          // publications={publications}
        />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const publicationById = await PublicationsData.getPublicationById(id);

  return {
    props: { publicationById },
  };
};

EventoPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default EventoPage;
