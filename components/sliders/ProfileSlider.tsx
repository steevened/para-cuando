import 'swiper/css';
import brand from '../../public/cardImgs/brand.png';
import bts from '../../public/cardImgs/bts.png';
import hotel from '../../public/cardImgs/hotel.png';
import lady from '../../public/cardImgs/lady.png';
import shop from '../../public/cardImgs/shop.png';

const items = [
  {
    id: 1,
    title: 'concert 1',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 1',
    web: 'concert1.com',
    votes: 654,
    img: lady,
  },
  {
    id: 2,
    title: 'shop 1',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 1',
    web: 'shop1.com',
    votes: 10324,
    img: brand,
  },
  {
    id: 3,
    title: 'tournament 1',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 1',
    web: 'tournament1.com',
    votes: 234,
    img: bts,
  },
  {
    id: 4,
    title: 'concert 2',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 2',
    web: 'concert2.com',
    votes: 543,
    img: hotel,
  },
  {
    id: 5,
    title: 'shop 2',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 2',
    web: 'shop2.com',
    votes: 908,
    img: shop,
  },
  {
    id: 6,
    title: 'tournament 2',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 2',
    web: 'tournament2.com',
    votes: 8986,
    img: lady,
  },
  {
    id: 7,
    title: 'concert 3',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 3',
    web: 'concert3.com',
    votes: 654,
    img: brand,
  },
  {
    id: 8,
    title: 'shop 3',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 3',
    web: 'shop3.com',
    votes: 30324,
    img: bts,
  },
  {
    id: 9,
    title: 'tournament 3',
    description:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups 3',
    web: 'tournament3.com',
    votes: 234,
    img: hotel,
  },
];

export default function ProfileSlider() {
  return (
    <div className="justify-center 500 md:flex-row flex-wrap app-container flex flex-col items-center relative pt-20">
      {/* {items.map((item) => (
        <CardItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          refrences_url={item.web}
          img={item.img}
          votes={item.votes}
        />
      ))} */}
    </div>
  );
}
