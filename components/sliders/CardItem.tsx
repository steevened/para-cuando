import { ItemSlider } from '@/lib/interfaces';
import Image from 'next/image';
import { useState } from 'react';
import UserLogo from '../atoms/UserLogo';
import { HearthBtn } from '../buttons/HearthBtn';

const CardItem = ({ title, description, web, votes, img }: ItemSlider) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="shadow-shadow1 m-2 w-[300px] rounded-[20px]  overflow-hidden text-black bg-white border">
      <Image
        width={300}
        height={299}
        className="w-full"
        src={img}
        alt="picture"
      />
      <div className=" mx-[22px] mt-[15px] relative mb-10">
        <div className="absolute right-0 -top-10">
          <HearthBtn
            aria-label="like-button"
            onClick={() => setIsActive(!isActive)}
            isActive={isActive}
            className={'duration-200 focus:scale-105'}
          />
        </div>
        <h2 className="title-3 text-start">{title}</h2>
        <p className="mt-[5px] text-1 text-app-grayDark">{description}</p>
        <p className="mt-3 text-app-blue text-2">{web}</p>
        <div className="flex items-center gap-2 mt-4 text-2">
          <span>
            <UserLogo />
          </span>
          <p>{votes} votos</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
