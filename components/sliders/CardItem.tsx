import { useRouter } from 'next/router';
import { useState } from 'react';
import UserLogo from '../atoms/UserLogo';
import { HearthBtn } from '../buttons/HearthBtn';

interface PublicationProps {
  id: string;
  title: string;
  content: string;
  description: string;
  votes_count: number;
}

const CardItem = ({
  title,
  id,
  content,
  description,
  votes_count,
}: PublicationProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  const handleCardClick = () => {
    router.push(`/evento/${encodeURIComponent(id)}`);
  };

  return (
    <div
      className="shadow-shadow1 m-2 w-[300px] rounded-[20px] h-[454px] overflow-hidden text-black bg-white border cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="w-[300px] h-[300px]">
        {/* <Image className="w-full" src={''} alt="picture" /> */}
      </div>

      <div className=" mx-[22px] mt-[15px] relative mb-10 h-full">
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
