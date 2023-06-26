import UserLogo from '@/components/atoms/UserLogo';
import BtnVote from '@/components/buttons/BtnVote';
import CategorieNavbar from '@/components/categories/homeCategories/CategorieNavbar';
import Categories from '@/components/categories/homeCategories/Categories';
import Layout from '@/components/layouts/Layout';
import SectionSlider from '@/components/sliders/SectionSlider';
import { AuthContext } from '@/context';
import { usePublicationById } from '@/lib/services/publications/publications.services';
import { votePublication } from '@/lib/services/publications/publicationVote.services';
import { useUserVotes } from '@/lib/services/votes/userVotes.services';
import img404 from '@/public/notfound.png';
import { Ring } from '@uiball/loaders';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { NextPageWithLayout } from '../_app';

// interface Props {
//   publicationById: PublicationbyID;
// }

const EventoPage: NextPageWithLayout = () => {
  const [isVoted, setIsVoted] = useState<boolean>(false);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  const router = useRouter();

  const { id: publicationID } = router.query;

  const {
    data: publication,
    error,
    isLoading,
    mutate,
  } = usePublicationById(publicationID as string);

  const {
    id,
    title,
    publications_type,
    description,
    reference_link,
    votes_count,
    images,
  } = publication || {};

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

    const toastId = toast.promise(votePublication(publicationID as string), {
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
        {error && (
          <div className="relative h-[calc(100vh-210px)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl font-semibold text-red-500">
                Error al cargar la publicación{' '}
              </p>
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="relative h-[calc(100vh-210px)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <Ring size={48} lineWeight={5} speed={2} color="gray" />
            </div>
          </div>
        ) : (
          <section className="w-full grid items-start md:grid-cols-2 mt-[60px] gap-x-5 ">
            <div className="md:row-span-2  h-full">
              <p>
                {publications_type?.name} / {publications_type?.description}
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
            {images && images?.length > 0 && (
              <Image
                className={`w-full h-full object-contain mt-6 md:mt-0 md:row-span-3 ${
                  isImageLoading
                    ? ' grayscale blur-xl scale-105'
                    : 'grayscale-0 blur-0 scale-100'
                }`}
                src={images[0].image_url || img404}
                alt={description ? description : 'imagen no encontrada'}
                width={1000}
                height={1000}
                priority={true}
                onLoadingComplete={() => setIsImageLoading(false)}
              />
            )}
            <div className="w-full pt-7  h-full flex items-end">
              <BtnVote onClick={handleVote} voted={isVoted} />
            </div>
          </section>
        )}

        <Categories />
        <SectionSlider
          className="mb-10"
          title="Recientes"
          subtitle="Las personas últimamente están hablando de esto"
          // publications={publications}
        />
      </div>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { id } = params as { id: string };

//   const publicationById = await PublicationsData.getPublicationById(id);

//   return {
//     props: { publicationById },
//   };
// };

EventoPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default EventoPage;
