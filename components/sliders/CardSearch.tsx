import { ItemSlider } from '@/lib/interfaces';
import { useRouter } from 'next/router';
import { useState } from 'react';

import UserLogo from '../atoms/UserLogo';
import { HearthBtn } from '../buttons/HearthBtn';

const CardSearch = ({
  title,
  description,
  reference_link,
  votes_count,
  images,
  id,
}: ItemSlider) => {
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
    <section className="relative border mx-[10px] flex flex-row h-[199px] shadow-shadow-1  rounded-[20px] mt-5 pr-[21px] overflow-hidden gap-6 w-full md:h-[240px] md:gap-[60px]">
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
        <button onClick={handleClick} className="relative right-[13px] top-0">
          <HearthBtn
            aria-label="like-button"
            isActive={isActive}
            className={'duration-200 focus:scale-105'}
          />
        </button>
      </div>
    </section>
  );
};

export default CardSearch;
