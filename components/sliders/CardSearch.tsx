import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '@/context';
import { votePublication } from '@/lib/services/publications/publicationVote.services';
import { useUserVotes } from '@/lib/services/votes/userVotes.services';
import { Ring } from '@uiball/loaders';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import UserLogo from '../atoms/UserLogo';
import { HearthBtn } from '../buttons/HearthBtn';

interface PublicationProps {
  id: string;
  title: string;
  description: string;
  votes_count: number;
  mutate?: any;
  reference_link: string;
  images: any;
}

const CardSearch = ({
  title,
  description,
  reference_link,
  votes_count,
  images,
  id,
  mutate,
}: PublicationProps) => {
  const [isPublicationVoted, setIsPublicationVoted] = useState<boolean>(false);

  const { isUserLoged, userData } = useContext(AuthContext);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  const router = useRouter();
  const { data, mutate: mutateVotes } = useUserVotes(userData.id);

  useEffect(() => {
    if (isUserLoged && data) {
      const isVoted = data.find((vote) => vote.id === id);
      if (isVoted) {
        setIsPublicationVoted(true);
      } else {
        setIsPublicationVoted(false);
      }
    } else {
      setIsPublicationVoted(false);
    }
  }, [isUserLoged, data, id]);

  const handleVote = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    try {
      if (isUserLoged && userData.id) {
        const promise = toast.promise(votePublication(id), {
          loading: 'Cargando...',
          success: `${isPublicationVoted ? 'Voto eliminado' : 'Voto agregado'}`,
          error: `${
            isUserLoged ? 'Error al votar' : 'Inicie sesión para continuar'
          }`,
        });

        await promise;
        mutate();
        mutateVotes();
      } else {
        toast.error('Inicie sesión para continuar');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardClick = () => {
    router.push(`/evento/${encodeURIComponent(id)}`);
  };

  // console.log(images);

  return (
    <section
      onClick={handleCardClick}
      className="relative cursor-pointer border mx-[10px] flex flex-row h-[199px] shadow-shadow-1  rounded-[20px] mt-5 pr-[21px] overflow-hidden gap-6 w-full sm:h-[240px] sm:gap-[60px]"
    >
      <div className="w-[121px] sm:w-[225px]  h-full rounded-[20px] md:w-[300px] overflow-hidden relative">
        <Image
          src={images[0]?.image_url ? images[0]?.image_url : ''}
          alt="Para cuando image"
          width="1000"
          height="1000"
          className={`object-cover w-full h-full scale-125 duration-500 ease-in-out ${
            isImageLoading
              ? ' grayscale blur-xl scale-105'
              : 'grayscale-0 blur-0 scale-100'
          }`}
          onLoadingComplete={() => setIsImageLoading(false)}
        />
        {isImageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Ring size={48} lineWeight={5} speed={2} color="gray" />
          </div>
        )}
      </div>
      <header className="pt-[34px] pb-[13px]">
        <h2 className="text-base sm:text-[20px]">{title}</h2>
        <p className="pt-[5px] text-xs text-app-grayDark text-justify w-full h-[50px] sm:h-[72px] overflow-hidden sm:text-[15px] sm:pt[6px]">
          {description}
        </p>

        <p className="pt-3 text-app-blue text-[12px] sm:text-sm ">
          {reference_link}
        </p>
        <div className="flex items-center gap-[7px] pt-[7px] text-[12px]">
          <UserLogo />
          <p className="sm:text-sm">{votes_count} votos</p>
        </div>
      </header>

      <div className="absolute right-0 ">
        <button onClick={handleVote} className="relative right-[13px] top-0">
          <HearthBtn
            aria-label="like-button"
            isPublicationVoted={isPublicationVoted}
            className={'duration-200 focus:scale-105'}
          />
        </button>
      </div>
    </section>
  );
};

export default CardSearch;
