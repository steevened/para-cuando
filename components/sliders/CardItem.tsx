import { votePublication } from '@/lib/services/publications/publicationVote.services';
import { useUserVotes } from '@/lib/services/votes/userVotes.services';
import useModalStore from '@/store/loginModal';
import { Ring } from '@uiball/loaders';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import img404 from '../../public/notfound.png';
import useAuthStore from '../../store/auth';
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
  const [isActive, setIsActive] = useState<boolean>(false);
  const router = useRouter();
  const { data, mutate: mutateVotes } = useUserVotes();
  const { openLoginModal } = useModalStore();

  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  const { isLogedIn } = useAuthStore();

  const [userLogged, setUserLogged] = useState<boolean>(false);

  // console.log(images);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setUserLogged(true);
    } else {
      setUserLogged(false);
    }
  }, [isLogedIn]);

  // console.log(data);

  useEffect(() => {
    if (data) {
      const isVoted = data.find((vote) => vote.publications_id === id);
      if (isVoted) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  }, [data, id, isLogedIn]);

  const handleVote = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const toastId = toast.promise(votePublication(id), {
      loading: 'Espere...',
      success: `${isActive ? 'Voto eliminado' : 'Voto agregado'}`,
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
      // console.log('--------------error--------------------');
      // console.log(error);
      openLoginModal();
    }
  };

  const handleCardClick = () => {
    router.push(`/evento/${encodeURIComponent(id)}`);
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
            isActive={isActive}
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
