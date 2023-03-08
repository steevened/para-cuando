import Button from '@/components/buttons/Button';
import ProfileLayout from '@/components/layouts/ProfileLayout';
import ProfileSlider from '@/components/sliders/ProfileSlider';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import 'swiper/css';
import photoProfile from '../../public/profile/Ellipse 5.svg';
import { NextPageWithLayout } from '../_app';

interface Category {
  title: string;
  id: number;
}

const categories: Array<Category> = [
  { title: 'Mis Votos', id: 1 },
  { title: 'Mis publicaciones', id: 2 },
];

const VotesPage: NextPageWithLayout = () => {
  const pages = [1, 2, 3];
  return (
    <div className="w-full ">
      <div className="w-full h-[129px] bg-app-blue">
        <div className="flex justify-center items-center">
          <Image
            className="left-145 pt-16"
            src={photoProfile}
            alt="photo profile"
          />
        </div>
      </div>
      <div className="flex justify-center pt-20 pb-19">
        <ul className=" flex gap-[11px] h-[30px] ">
          {categories.map((categorie) => (
            <li key={categorie.id}>
              <Link href={`/categories/${encodeURIComponent(categorie.title)}`}>
                <Button>{categorie.title}</Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <ProfileSlider />
      </div>
      <div className="flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="list-style-none flex">
            <li>
              <a
                className="relative block rounded bg-transparent py-1.5 px-3 text-sm  transition-all duration-300  text-[#988989]  hover:text-black"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {pages.map((page, i) => (
              <li key={i}>
                <a
                  className="relative block rounded bg-transparent py-1.5 px-3 text-sm  transition-all duration-300  text-[#988989]  hover:text-black"
                  href="#"
                >
                  {page}
                </a>
              </li>
            ))}

            <li>
              <a
                className="relative block rounded bg-transparent py-1.5 px-3 text-sm  transition-all duration-300  text-[#988989]  hover:text-black"
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

VotesPage.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default VotesPage;
