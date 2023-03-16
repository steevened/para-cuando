import { ClassName } from '@/lib/interfaces';
import { usePublications } from '@/lib/services/publications/publications.services';
import { Ring } from '@uiball/loaders';
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import CardItem from './CardItem';

interface ArrowProps {
  orientation: 'left' | 'right';
  className: string;
}

export default function HomeSlider({ className }: ClassName) {
  const { data: publications, error, isLoading, mutate } = usePublications();

  // console.log(publications);

  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-3xl bg-white">
        Intente nuevamente
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading ? (
        <div className="flex items-center justify-center h-32 mt-28">
          <Ring size={120} lineWeight={5} speed={2} color="black" />
        </div>
      ) : (
        <Swiper
          className="mySwiper"
          spaceBetween={11}
          slidesPerView={'auto'}
          grabCursor={true}
          style={{ position: 'unset' }}
          loop
          breakpoints={{
            375: {
              slidesPerView: 1.1,
            },
            430: {
              slidesPerView: 1.2,
            },
            460: {
              slidesPerView: 1.3,
            },
            500: {
              slidesPerView: 1.4,
            },
            530: {
              slidesPerView: 1.5,
            },
            575: {
              slidesPerView: 1.6,
            },
            600: {
              slidesPerView: 1.7,
            },
            630: {
              slidesPerView: 1.8,
            },
            670: {
              slidesPerView: 2,
            },
            725: {
              slidesPerView: 2.2,
            },
            780: {
              slidesPerView: 2.4,
            },
            845: {
              slidesPerView: 2.6,
            },
            900: {
              slidesPerView: 2.8,
            },
            950: {
              slidesPerView: 3,
            },
          }}
        >
          {publications?.map((publication) => (
            <SwiperSlide key={publication.id}>
              <CardItem
                description={publication.description}
                title={publication.title}
                votes_count={publication.votes_count}
                id={publication.id}
                mutate={mutate}
                reference_link={publication.reference_link}
                images={publication.images}
              />
            </SwiperSlide>
          ))}

          {/* <Arrow
            className="absolute z-50 -left-14 top-1/2"
            orientation="left"
          /> */}
          <Arrow
            className="absolute z-50 -right-16 top-1/2"
            orientation="right"
          />
        </Swiper>
      )}
    </div>
  );
}

function Arrow({ orientation, className }: ArrowProps) {
  const swiper = useSwiper();
  return (
    <div className={`${className} hidden lg:block`}>
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
