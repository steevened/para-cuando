import Button from '@/components/buttons/Button';
import FooterProfile from '@/components/sliders/FooterProfile';
import ProfileSlider from '@/components/sliders/ProfileSlider';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import addLogo from '../../public/add.svg';
import logo from '../../public/icon-logo.svg';
import photoProfile from '../../public/profile/Ellipse 5.svg';
import heart from '../../public/profile/heart.svg';
import icon from '../../public/profile/icono.svg';

interface Category {
  title: string;
  id: number;
}

const categories: Array<Category> = [
  { title: 'Mis Votos', id: 1 },
  { title: 'Mis publicaciones', id: 2 },
];

export default function profile() {
  const pages = [1, 2, 3];
  return (
    <div className="w-full ">
      <div className="w-full h-[71px] text-center bg-black flex items-center justify-between px-5 sm:px-[52px]">
        <Link href="/" className="sm:flex-1">
          <Image src={logo} alt="para cuando logo" />
        </Link>
        <div className="hidden sm:flex items-center gap-2 sm:mr-9">
          <Image src={addLogo} alt="add logo" />
          <Link
            href="/posts/profile"
            className="hidden text-2 sm:subtitle-2 text-app-blue xs:block"
          >
            Crear Publicación
          </Link>
        </div>
        <div className="flex gap-8  not-italic font-normal text-[13px] leading-[15px] text-white">
          <Link className="hidden sm:block" href="/">
            <Image src={heart} alt="add heart" />
            Mis votos
          </Link>
          <Link href="/">
            <Image src={icon} alt="add icon" />
            ejemplo@hotmail.com
          </Link>
        </div>
      </div>
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
      <div className="">
        <FooterProfile />
      </div>
    </div>
  );
}
