import { AuthContext, AuthModalContext } from '@/context';
import { votePublication } from '@/lib/services/publications/publicationVote.services';
import { useUserVotes } from '@/lib/services/votes/userVotes.services';
import { Ring } from '@uiball/loaders';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import img404 from '../../public/notfound.png';
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

const CardItem = ({
  title,
  id,
  description,
  votes_count,
  mutate,
  images,
  reference_link,
}: PublicationProps) => {
  // state
  const [isPublicationVoted, setIsPublicationVoted] = useState<boolean>(false);

  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  const { isUserLoged, userData } = useContext(AuthContext);

  // console.log(profileInfo);

  const router = useRouter();
  const { data, mutate: mutateVotes } = useUserVotes(userData.id);
  const { openLoginModal } = useContext(AuthModalContext);

  useEffect(() => {
    if (isUserLoged && data?.length > 0) {
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
        openLoginModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardClick = () => {
    router.push(`/evento/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="shadow-shadow1 m-1 w-[300px] rounded-[20px] max-h-[454px] overflow-hidden text-black bg-white border cursor-pointer"
    >
      <div className="relative h-[225px] w-full">
        <Image
          width="300"
          height="240"
          // objectFit="fill"
          className={`${
            images && images[0]?.image_url ? '' : 'w-full h-full'
          } object-fill duration-700 ease-in-out ${
            isImageLoading
              ? ' grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          }`}
          src={images && images[0]?.image_url ? images[0]?.image_url : img404}
          alt="picture"
          onLoadingComplete={() => setIsImageLoading(false)}
        />
        {isImageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Ring size={48} lineWeight={5} speed={2} color="gray" />
          </div>
        )}
      </div>
      <div className="mx-[22px] mt-[25px] relative mb-10 h-full">
        <button onClick={handleVote} className="absolute right-0 -top-12">
          <HearthBtn
            aria-label="like-button"
            isPublicationVoted={isPublicationVoted}
            className={'duration-200 focus:scale-105'}
          />
        </button>
        <h2 className="title-3 text-start">{title}</h2>
        <div className="h-[70px] overflow-hidden">
          <p className="mt-[5px] text-1 text-app-grayDark">{description}</p>
        </div>
        <p className="mt-3 text-app-blue text-2 ">{reference_link}</p>
        <div className="flex items-center gap-2 mt-4 text-2">
          <span>
            <UserLogo />
          </span>
          <p className="text-sm font-medium text-app-blackLight">
            {votes_count} {votes_count !== 1 ? 'votos' : 'voto'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
