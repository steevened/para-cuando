import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import SwiperCore, { Navigation, Virtual } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import brand from '../../public/cardImgs/brand.png';
import bts from '../../public/cardImgs/bts.png';
import hotel from '../../public/cardImgs/hotel.png';
import lady from '../../public/cardImgs/lady.png';
import shop from '../../public/cardImgs/shop.png';
import UserLogo from '../atoms/UserLogo';

interface Items {
  id: number;
  title: string;
  description: string;
  web: string;
  assistants: number;
  img: StaticImageData;
}

interface ArrowProps {
  orientation: 'left' | 'right';
  className: string;
}

const items: Items[] = [
  {
    id: 1,
    title: 'concert 1',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 1',
    web: 'concert1.com',
    assistants: 654,
    img: lady,
  },
  {
    id: 2,
    title: 'shop 1',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 1',
    web: 'shop1.com',
    assistants: 10324,
    img: brand,
  },
  {
    id: 3,
    title: 'tournament 1',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 1',
    web: 'tournament1.com',
    assistants: 234,
    img: bts,
  },
  {
    id: 4,
    title: 'concert 2',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 2',
    web: 'concert2.com',
    assistants: 543,
    img: hotel,
  },
  {
    id: 5,
    title: 'shop 2',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 2',
    web: 'shop2.com',
    assistants: 908,
    img: shop,
  },
  {
    id: 6,
    title: 'tournament 2',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 2',
    web: 'tournament2.com',
    assistants: 8986,
    img: lady,
  },
  {
    id: 7,
    title: 'concert 3',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 3',
    web: 'concert3.com',
    assistants: 654,
    img: brand,
  },
  {
    id: 8,
    title: 'shop 3',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 3',
    web: 'shop3.com',
    assistants: 30324,
    img: bts,
  },
  {
    id: 9,
    title: 'tournament 3',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 3',
    web: 'tournament3.com',
    assistants: 234,
    img: hotel,
  },
];

SwiperCore.use([Navigation]);

export default function HomeSlider() {
  return (
    <Swiper
      modules={[Virtual]}
      loop
      breakpoints={{
        500: {
          // width: 415,
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        920: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={22}
      slidesPerView={1}
      className="relative"
      virtual
    >
      {items.map((item) => (
        <SwiperSlide
          className="shadow-shadow1 max-w-[300px] rounded-[20px] overflow-hidden text-black bg-white"
          key={item.id}
          virtualIndex={item.id}
        >
          <Image className="w-full" src={item.img} alt="picture" />
          <div className=" mx-[22px] mt-[15px] relative mb-10">
            <div className="absolute right-0 -top-10">
              <HearthBtn />
            </div>
            <h2 className="title-3 text-start">{item.title}</h2>
            <p className="mt-[5px] text-1 text-app-grayDark">
              {item.description}
            </p>
            <p className="mt-3 text-app-blue text-2">{item.web}</p>
            <div className="flex items-center gap-2 mt-4 text-2">
              <span>
                <UserLogo />
              </span>
              <p>{item.assistants} votos</p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <Arrow className="absolute left-0 z-50 top-1/2" orientation="left" />
      <Arrow className="absolute right-0 z-50 top-1/2" orientation="right" />
    </Swiper>
  );
}

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

function Arrow({ orientation, className }: ArrowProps) {
  const swiper = useSwiper();
  return (
    <div className={`${className} hidden sm:block`}>
      <button
        onClick={() =>
          orientation === 'right' ? swiper.slideNext() : swiper.slidePrev()
        }
        className={`${
          orientation === 'left' && 'rotate-180'
        } cursor-pointer text-app-blue hover:text-app-blue/50 duration-150`}
      >
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.8125 11.0625L23.1759 13.6309L33.4641 23.9688H11.0625V27.6563H33.4641L23.1759 37.9315L25.8125 40.5625L40.5625 25.8125L25.8125 11.0625Z"
            fill="currentColor"
          />
          <path
            d="M25.8125 51.625C20.7073 51.625 15.7167 50.1111 11.4719 47.2748C7.22701 44.4385 3.91856 40.4071 1.96487 35.6905C0.0111841 30.9739 -0.499989 25.7839 0.495992 20.7767C1.49197 15.7696 3.95037 11.1703 7.56032 7.56032C11.1703 3.95037 15.7696 1.49197 20.7767 0.495992C25.7839 -0.499989 30.9739 0.0111841 35.6905 1.96487C40.4071 3.91856 44.4385 7.22701 47.2748 11.4719C50.1111 15.7167 51.625 20.7073 51.625 25.8125C51.6172 32.656 48.8952 39.217 44.0561 44.0561C39.217 48.8952 32.656 51.6172 25.8125 51.625ZM25.8125 3.68751C21.4366 3.68751 17.159 4.98512 13.5205 7.41625C9.88208 9.84737 7.04627 13.3028 5.37168 17.3456C3.69709 21.3885 3.25894 25.8371 4.11264 30.1289C4.96634 34.4207 7.07354 38.363 10.1678 41.4572C13.262 44.5515 17.2043 46.6587 21.4961 47.5124C25.788 48.3661 30.2366 47.9279 34.2794 46.2533C38.3222 44.5788 41.7776 41.7429 44.2088 38.1045C46.6399 34.4661 47.9375 30.1884 47.9375 25.8125C47.9307 19.9467 45.5975 14.3231 41.4497 10.1753C37.3019 6.02756 31.6783 3.69434 25.8125 3.68751Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}
