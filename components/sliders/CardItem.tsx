import { votePublication } from '@/lib/services/publications/publicationVote.services';
import { useUserVotes } from '@/lib/services/votes/userVotes.services';
import useModalStore from '@/store/loginModal';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import lady from '../../public/cardImgs/lady.png';
import UserLogo from '../atoms/UserLogo';
import { HearthBtn } from '../buttons/HearthBtn';

interface PublicationProps {
  id: string;
  title: string;
  description: string;
  votes_count: number;
  mutate: any;
  reference_link: string;
  // img: string[];
}

const CardItem = ({
  title,
  id,

  description,
  votes_count,
  mutate,
  reference_link,
}: PublicationProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const router = useRouter();
  const { data, mutate: mutateVotes } = useUserVotes();
  const { openLoginModal } = useModalStore();

  const [userLogged, setUserLogged] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setUserLogged(true);
    } else {
      setUserLogged(false);
    }
  }, []);

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
  }, [data, id]);

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
      console.log(response);
      mutate();
      mutateVotes();
    } catch (error) {
      console.log('--------------error--------------------');
      console.log(error);
      openLoginModal();
    }
  };

  const handleCardClick = () => {
    router.push(`/evento/${encodeURIComponent(id)}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="shadow-shadow1 m-1 w-[300px] rounded-[20px] h-[454px] overflow-hidden text-black bg-white border cursor-pointer"
    >
      <div className="w-[300px] h-[300px]">
        <Image className="w-full" src={lady} alt="picture" />
      </div>

      <div className="mx-[22px] mt-[15px] relative mb-10 h-full">
        <button onClick={handleVote} className="absolute right-0 -top-10">
          <HearthBtn
            aria-label="like-button"
            isActive={isActive}
            className={'duration-200 focus:scale-105'}
          />
        </button>
        <h2 className="title-3 text-start">{title}</h2>
        <p className="mt-[5px] text-1 text-app-grayDark">{description}</p>
        <p className="mt-3 text-app-blue text-2 ">{reference_link}</p>
        <div className="flex items-center gap-2 mt-4 text-2">
          <span>
            <UserLogo />
          </span>
          <p>
            {votes_count} {votes_count !== 1 ? 'votos' : 'voto'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
