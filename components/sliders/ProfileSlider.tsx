import { ClassName, ItemSlider } from '@/lib/interfaces';
import 'swiper/css';
import { Swiper } from 'swiper/react';
import brand from '../../public/cardImgs/brand.png';
import bts from '../../public/cardImgs/bts.png';
import hotel from '../../public/cardImgs/hotel.png';
import lady from '../../public/cardImgs/lady.png';
import shop from '../../public/cardImgs/shop.png';
import CardItem from './CardItem';

interface ArrowProps {
  orientation: 'left' | 'right';
  className: string;
}

const items: ItemSlider[] = [
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

export default function ProfileSlider({ className }: ClassName) {
  return (
    <div className="relative pt-20">
      <Swiper
        className={className}
        spaceBetween={11}
        slidesPerView={'auto'}
        style={{ position: 'unset' }}
        loop
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 1.2,
          },
          600: {
            slidesPerView: 1.8,
          },
          800: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {items.map((item) => (
          <CardItem
            id={item.id}
            title={item.title}
            description={item.description}
            web={item.web}
            assistants={item.assistants}
            img={item.img}
          />
        ))}
      </Swiper>
    </div>
  );
}
