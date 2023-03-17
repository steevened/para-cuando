import Button from '@/components/buttons/Button';
import { useTags } from '@/lib/services/tags/tags.services';
import useModalStore from '@/store/loginModal';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Categories() {
  const { tags } = useTags();
  const router = useRouter();
  const { openLoginModal } = useModalStore();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isToken = Cookies.get('token');
    if (isToken) {
      router.push('/profile');
    } else {
      openLoginModal();
    }
  };

  return (
    <div className="w-full pl-6 mt-12 md:px-16 bg-app-grayLighter pb-11">
      <div className="mx-auto ">
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
          grabCursor={true}
          scrollbar={{ draggable: true }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            375: {
              slidesPerView: 2.2,
            },
            415: {
              slidesPerView: 2.5,
            },
            500: {
              slidesPerView: 3.4,
            },
            720: {
              slidesPerView: 4.4,
              // spaceBetween: 14,
            },
          }}
          className="mt-6"
        >
          {tags?.map((categorie) => (
            <SwiperSlide key={categorie.id}>
              <Button onClick={handleClick}>{categorie.name}</Button>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="mt-[60px] subtitle-2 text-app-blue">
          <button onClick={handleClick}>Ver todos los intereses</button>
        </p>
      </div>
    </div>
  );
}
