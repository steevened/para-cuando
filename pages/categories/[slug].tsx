import Button from '@/components/buttons/Button';
import UlCategories from '@/components/categories/homeCategories/UlCategories';
import Input from '@/components/Forms/Input';
import Main from '@/components/home/Main';
import Layout from '@/components/layouts/Layout';
import { Menu, Transition } from '@headlessui/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, ReactElement, useEffect, useState } from 'react';
import artistas from '../../public/categories/artistas.png';
import marcas from '../../public/categories/marcas.png';
import torneos from '../../public/categories/torneos.png';
import { NextPageWithLayout } from '../_app';

interface Category {
  title: string;
  id: number;
}

const categories: Array<Category> = [
  { title: 'Marcas y tiendas', id: 1 },
  { title: 'Artistas y conciertos', id: 2 },
  { title: 'Torneos', id: 3 },
];

const CategoryPage: NextPageWithLayout = () => {
  const [subtitle, setSubtitle] = useState('');
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    setSubtitle(
      `Descubre l${
        slug === 'Marcas tiendas' ? 'a' : 'o'
      }s ${slug} que la gente quiere cerca`
    );
  }, [slug]);

  const styles = {
    backgroundImage: `url(${
      slug === 'Marcas y tiendas'
        ? marcas.src
        : slug === 'Artistas y conciertos'
        ? artistas.src
        : torneos.src
    })`,
  };

  return (
    <>
      <Head>
        <title>{slug} - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <section className="relative">
        <div style={styles} className="h-52 bg-cover bg-none bg-center" />

        <div className="absolute inset-0 px-4 max-w-[940px] mx-auto flex flex-col justify-evenly md:justify-center py-3">
          <nav className="flex subtitle-1 text-white" aria-label="Breadcrumb">
            <ul className="inline-flex items-center space-x-1 md:space-x-3 md:mb-6">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center ">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="ml-1">
                <p>{slug}</p>
              </li>
            </ul>
          </nav>
          <h1 className="title-1  text-app-yellow md:mb-2">{slug}</h1>
          <p className="subtitle-1 text-white md:mb-4">{subtitle}</p>
        </div>
      </section>
      <div className="relative shadow-shadow1 w-full py-9">
        <div className="flex px-5 max-w-[980px] mx-auto justify-between gap-2 items-center">
          <MenuDropDown />
          <div className="hidden md:block md:flex-[1] mr-10 ">
            <UlCategories />
          </div>
          <div className="flex-1 ">
            <Input />
          </div>
        </div>
      </div>
      <Main />
    </>
  );
};

const MenuDropDown = () => {
  return (
    <Menu as="div" className="relative inline-block md:hidden">
      <Menu.Button className="rounded-full border border-app-gray p-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 18C10.7167 18 10.4793 17.904 10.288 17.712C10.096 17.5207 10 17.2833 10 17C10 16.7167 10.096 16.4793 10.288 16.288C10.4793 16.096 10.7167 16 11 16H13C13.2833 16 13.521 16.096 13.713 16.288C13.9043 16.4793 14 16.7167 14 17C14 17.2833 13.9043 17.5207 13.713 17.712C13.521 17.904 13.2833 18 13 18H11ZM4 8C3.71667 8 3.47933 7.90433 3.288 7.713C3.096 7.521 3 7.28333 3 7C3 6.71667 3.096 6.479 3.288 6.287C3.47933 6.09567 3.71667 6 4 6H20C20.2833 6 20.5207 6.09567 20.712 6.287C20.904 6.479 21 6.71667 21 7C21 7.28333 20.904 7.521 20.712 7.713C20.5207 7.90433 20.2833 8 20 8H4ZM7 13C6.71667 13 6.479 12.904 6.287 12.712C6.09567 12.5207 6 12.2833 6 12C6 11.7167 6.09567 11.479 6.287 11.287C6.479 11.0957 6.71667 11 7 11H17C17.2833 11 17.5207 11.0957 17.712 11.287C17.904 11.479 18 11.7167 18 12C18 12.2833 17.904 12.5207 17.712 12.712C17.5207 12.904 17.2833 13 17 13H7Z"
            fill="black"
          />
        </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-56 mt-1 rounded-[20px] origin-top-right divide-y divide-gray-100  px-2 bg-white shadow-shadow1 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {categories.map((categorie) => (
              <Menu.Item key={categorie.id}>
                {() => (
                  <Link
                    className={`block py-1`}
                    href={`/categories/${encodeURIComponent(categorie.title)}`}
                  >
                    <Button
                      className={`hover:bg-app-grayDark hover:text-white `}
                    >
                      {categorie.title}
                    </Button>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
