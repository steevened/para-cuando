import { votePublication } from '@/lib/services/publications/publicationVote.services';
import { useUserVotes } from '@/lib/services/votes/userVotes.services';
import useModalStore from '@/store/loginModal';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import lady from '../../public/cardImgs/lady.png';
import UserLogo from '../atoms/UserLogo';
import { HearthBtn } from '../buttons/HearthBtn';

interface PublicationProps {
  id: string;
  title: string;
  content: string;
  description: string;
  votes_count: number;
  mutate: any;
}

const CardItem = ({
  title,
  id,
  content,
  description,
  votes_count,
  mutate,
}: PublicationProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const router = useRouter();
  const { data, mutate: mutateVotes } = useUserVotes();
  const { openLoginModal } = useModalStore();

  console.log(data);

  // useEffect(() => {
  //   if (publicationsId?.includes(id)) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // }, [publicationsId, id]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    try {
      const response = await votePublication(id);
      console.log(response);
      openLoginModal();
      mutate();
      mutateVotes();
    } catch (error) {
      console.log('--------------error--------------------');
      console.log(error);
      openLoginModal();
    }

    // votePublication(id).then((res) => {
    //   console.log(res);
    //   if (res.status !== 200) {
    //     openLoginModal();
    //   } else {

    //   }

    // setIsActive(!isActive);
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
        <button onClick={handleClick} className="absolute right-0 -top-10">
          <HearthBtn
            aria-label="like-button"
            isActive={isActive}
            className={'duration-200 focus:scale-105'}
          />
        </button>
        <h2 className="title-3 text-start">{title}</h2>
        <p className="mt-[5px] text-1 text-app-grayDark">{description}</p>
        <p className="mt-3 text-app-blue text-2">{content}</p>
        <div className="flex items-center gap-2 mt-4 text-2">
          <span>
            <UserLogo />
          </span>
          <p>{votes_count} votos</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
