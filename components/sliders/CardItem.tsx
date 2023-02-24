import { ItemSlider } from '@/lib/interfaces';
import Image from 'next/image';
import { useState } from 'react';
import UserLogo from '../atoms/UserLogo';

const CardItem = ({ title, description, web, assistants, img }: ItemSlider) => {
  return (
    <div className="shadow-shadow1 w-[300px] rounded-[20px]  overflow-hidden text-black bg-white border">
      <Image className="w-full" src={img} alt="picture" />
      <div className=" mx-[22px] mt-[15px] relative mb-10">
        <div className="absolute right-0 -top-10">
          <HearthBtn />
        </div>
        <h2 className="title-3 text-start">{title}</h2>
        <p className="mt-[5px] text-1 text-app-grayDark">{description}</p>
        <p className="mt-3 text-app-blue text-2">{web}</p>
        <div className="flex items-center gap-2 mt-4 text-2">
          <span>
            <UserLogo />
          </span>
          <p>{assistants} votos</p>
        </div>
      </div>
    </div>
  );
};

function HearthBtn() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <form className="flex ">
      <input
        className="appearance-none"
        type="checkbox"
        name="like"
        id="like"
        // value={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label
        className={`text-white duration-200 rounded-full cursor-pointer ${
          isChecked ? 'bg-app-pink' : 'bg-app-gray'
        } `}
        htmlFor="like"
      >
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.15 15L19.15 16L19.1507 16L19.15 15ZM25 37L24.6886 37.9503C24.8909 38.0166 25.1091 38.0166 25.3114 37.9503L25 37ZM25 17.9956L24.1854 18.5756C24.3729 18.839 24.6761 18.9954 24.9994 18.9956C25.3226 18.9958 25.6261 18.8398 25.8139 18.5767L25 17.9956ZM49 25.5C49 38.4787 38.4787 49 25.5 49V51C39.5833 51 51 39.5833 51 25.5H49ZM25.5 49C12.5213 49 2 38.4787 2 25.5H0C0 39.5833 11.4167 51 25.5 51V49ZM2 25.5C2 12.5213 12.5213 2 25.5 2V0C11.4167 0 0 11.4167 0 25.5H2ZM25.5 2C38.4787 2 49 12.5213 49 25.5H51C51 11.4167 39.5833 0 25.5 0V2ZM19.15 14C14.6623 14 11 17.591 11 22.0501H13C13 18.722 15.7402 16 19.15 16V14ZM11 22.0501C11 25.9645 13.3291 29.571 16.0881 32.3184C18.8584 35.0769 22.2385 37.1475 24.6886 37.9503L25.3114 36.0497C23.2115 35.3617 20.0916 33.4824 17.4994 30.9011C14.8959 28.3087 13 25.1856 13 22.0501H11ZM25.3114 37.9503C27.7615 37.1475 31.1416 35.0769 33.9119 32.3184C36.6709 29.571 39 25.9645 39 22.0501H37C37 25.1856 35.1041 28.3087 32.5006 30.9011C29.9084 33.4824 26.7885 35.3617 24.6886 36.0497L25.3114 37.9503ZM39 22.0501C39 17.591 35.3377 14 30.85 14V16C34.2598 16 37 18.722 37 22.0501H39ZM30.85 14C28.0991 14 25.6615 15.3479 24.1861 17.4146L25.8139 18.5767C26.9255 17.0196 28.7649 16 30.85 16V14ZM25.8146 17.4156C25.0617 16.3581 24.0624 15.4964 22.9023 14.9024L21.9907 16.6826C22.8672 17.1314 23.6197 17.7812 24.1854 18.5756L25.8146 17.4156ZM22.9023 14.9024C21.7423 14.3084 20.455 13.9991 19.1493 14L19.1507 16C20.1399 15.9993 21.1141 16.2337 21.9907 16.6826L22.9023 14.9024Z"
            fill="currentColor"
          />
        </svg>
      </label>
    </form>
  );
}

export default CardItem;
