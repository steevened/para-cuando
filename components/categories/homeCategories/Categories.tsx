import Button from '@/components/buttons/Button';
import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
interface ICategorie {
  name: string;
  id: number;
}

const categories: ICategorie[] = [
  {
    name: 'Ropa y accesorios',
    id: 1,
  },
  {
    name: 'Deportes',
    id: 2,
  },
  {
    name: 'Conciertos',
    id: 3,
  },
  {
    name: 'Meet & Greet',
    id: 4,
  },
  {
    name: 'E-Sports',
    id: 5,
  },
  {
    name: 'Pop - Rock',
    id: 6,
  },
  {
    name: 'Tecnología',
    id: 7,
  },
  {
    name: 'Hogar - Decoración',
    id: 8,
  },
  {
    name: 'Abastecimiento',
    id: 9,
  },
];

export default function Categories() {
  return (
    <div className="w-full pl-6 md:px-16 mt-12 bg-app-grayLight pb-11">
      <div className=" mx-auto">
        <h2 className="pt-7 title-2 text-app-grayDark">
          ¡Hagámoslo más personal!
        </h2>
        <p className="subtitle-2 mt-2.5 w-3/4 text-app-grayDark">
          Selecciona tus interes para brindarte sugerencia de acuerdo a tus
          gustos
        </p>
        <Swiper
          modules={[Scrollbar]}
          slidesPerView={'auto'}
          spaceBetween={11}
          scrollbar={{ draggable: true }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            375: {
              slidesPerView: 2.5,
            },
            415: {
              slidesPerView: 3.2,
            },
            500: {
              slidesPerView: 4.5,
            },
            720: {
              slidesPerView: 5,
              spaceBetween: 14,
            },
          }}
          className="mt-6"
        >
          {categories.map((categorie) => (
            <SwiperSlide key={categorie.id} className="">
              <Button>{categorie.name}</Button>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="mt-[60px] subtitle-2 text-app-blue">
          Ver todos los intereses
        </p>
      </div>
    </div>
  );
}
