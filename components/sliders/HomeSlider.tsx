import Image, { StaticImageData } from 'next/image';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import brand from '../../public/cardImgs/brand.png';
import bts from '../../public/cardImgs/bts.png';
import hotel from '../../public/cardImgs/hotel.png';
import lady from '../../public/cardImgs/lady.png';
import shop from '../../public/cardImgs/shop.png';

interface Items {
  id: number;
  title: string;
  description: string;
  web: string;
  assistants: number;
  img: StaticImageData;
}

const items: Items[] = [
  {
    id: 1,
    title: 'concert 1',
    description: 'description 1',
    web: 'concert1.com',
    assistants: 654,
    img: lady,
  },
  {
    id: 2,
    title: 'shop 1',
    description: 'description 1',
    web: 'shop1.com',
    assistants: 10324,
    img: brand,
  },
  {
    id: 3,
    title: 'tournament 1',
    description: 'description 1',
    web: 'tournament1.com',
    assistants: 234,
    img: bts,
  },
  {
    id: 4,
    title: 'concert 2',
    description: 'description 2',
    web: 'concert2.com',
    assistants: 543,
    img: hotel,
  },
  {
    id: 5,
    title: 'shop 2',
    description: 'description 2',
    web: 'shop2.com',
    assistants: 908,
    img: shop,
  },
  {
    id: 6,
    title: 'tournament 2',
    description: 'description 2',
    web: 'tournament2.com',
    assistants: 8986,
    img: lady,
  },
  {
    id: 7,
    title: 'concert 3',
    description: 'description 3',
    web: 'concert3.com',
    assistants: 654,
    img: brand,
  },
  {
    id: 8,
    title: 'shop 3',
    description: 'description 3',
    web: 'shop3.com',
    assistants: 30324,
    img: bts,
  },
  {
    id: 9,
    title: 'tournament 3',
    description: 'description 3',
    web: 'tournament3.com',
    assistants: 234,
    img: hotel,
  },
];

export default function HomeSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="w-2/3"
    >
      {items.map((item) => (
        <SwiperSlide
          className="overflow-hidden bg-white rounded-tl-2xl min-w-[300px] rounded-tr-2xl text-app-black"
          key={item.id}
        >
          <div>
            <Image src={item.img} alt="evento" />
          </div>
          <div>
            <h3>{item.title}</h3>
          </div>
          <div>
            <p>{item.description}</p>
          </div>
          <div>
            <p>{item.web}</p>
          </div>
          <div>
            <p>{item.assistants} votos</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
