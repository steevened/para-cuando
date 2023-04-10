import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '@/context';
import { votePublication } from '@/lib/services/publications/publicationVote.services';
import { useUserVotes } from '@/lib/services/votes/userVotes.services';
import useAuthStore from '@/store/auth';
import useModalStore from '@/store/loginModal';
import Cookies from 'js-cookie';
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
  const [isActive, setIsActive] = useState<boolean>(false);
  const router = useRouter();
  const { userData } = useContext(AuthContext);
  const { data, mutate: mutateVotes } = useUserVotes(userData.email);
  const [userLogged, setUserLogged] = useState<boolean>(false);
  const { openLoginModal } = useModalStore();

  const { isLogedIn } = useAuthStore();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setUserLogged(true);
    } else {
      setUserLogged(false);
      // setIsActive(false);
    }
  }, [isLogedIn]);

  useEffect(() => {
    if (data) {
      const isVoted = data.find((vote) => vote.id === id);
      if (isVoted) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    } else return;
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

    if (isLogedIn) {
      try {
        const response = await toastId;
        mutate();
        mutateVotes();
      } catch (error) {
        openLoginModal();
      }
    }
  };

  const handleCardClick = () => {
    router.push(`/evento/${encodeURIComponent(id)}`);
  };

  // console.log(isActive);

  return (
    <section
      onClick={handleCardClick}
      className="relative cursor-pointer border mx-[10px] flex flex-row h-[199px] shadow-shadow-1  rounded-[20px] mt-5 pr-[21px] overflow-hidden gap-6 w-full md:h-[240px] md:gap-[60px]"
    >
      <div
        style={{ backgroundImage: `url(${images[0]?.image_url})` }}
        className="min-w-[121px] h-full bg-center bg-cover rounded-[20px] md:w-[300px]"
      />
      <header className="pt-[34px] pb-[13px]">
        <h2 className="text-base md:text-[20px]">{title}</h2>
        <p className="pt-[5px] text-xs text-app-grayDark text-justify w-full h-[50px] md:h-[72px] overflow-hidden md:text-[15px] md:pt[6px]">
          {description}
        </p>

        <p className="pt-3 text-app-blue text-[12px] md:text-sm ">
          {reference_link}
        </p>
        <div className="flex items-center gap-[7px] pt-[7px] text-[12px]">
          <UserLogo />
          <p className="md:text-sm">{votes_count} votos</p>
        </div>
      </header>

      <div className="absolute right-0 ">
        <button onClick={handleVote} className="relative right-[13px] top-0">
          <HearthBtn
            aria-label="like-button"
            isPublicationVoted={isActive}
            className={'duration-200 focus:scale-105'}
          />
        </button>
      </div>
    </section>
  );
};

export default CardSearch;
