import { useProfile } from '@/lib/services/profile/ProfileInfo.services';
import { useUserVotes } from '@/lib/services/votes/userVotes.services';
import useAuthStore from '@/store/auth';
import { Menu, Transition } from '@headlessui/react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import addLogo from '../public/add.svg';
import votesLogo from '../public/authRegister/votesLogo.svg';
import closeSession from '../public/closeSession.svg';
import configLogo from '../public/configLogo.svg';
import logo from '../public/icon-logo.svg';
import UserOutlined from './atoms/UserOutlined';

export default function Navbar() {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const { logOut, isLogedIn } = useAuthStore();
  const router = useRouter();
  const { data, mutate } = useProfile();
  const { data: votes, mutate: mutateVotes } = useUserVotes();

  useEffect(() => {
    const tokenFounded = Cookies.get('token');
    if (!tokenFounded) return;
    setIsLogged(true);
    mutate();
  }, [isLogedIn, mutate]);

  // console.log(data);

  const handleLogOut = () => {
    Cookies.remove('token');
    logOut();
    router.push('/auth/login');
    mutateVotes();
    mutate();
  };

  return (
    <div className="w-full h-[71px] bg-black flex items-center justify-between px-5 sm:px-[52px]">
      <div className="flex items-center flex-1 md:flex-[2] ">
        <Link href="/" className="">
          <Image src={logo} alt="para cuando logo" />
        </Link>
      </div>

      <Link
        href="/posts/create"
        className={`flex items-center justify-center flex-1  md:flex-[0.5]  gap-2 ${
          isLogged ? 'hidden md:flex' : ''
        }`}
      >
        <Image src={addLogo} alt="add logo" className="" />
        <span className="hidden text-2 sm:subtitle-2 text-app-blue md:block">
          Crear Publicación
        </span>
      </Link>
      {!isLogged ? (
        <div className="flex justify-end flex-1 md:flex-[0.5] gap-5 text-xs text-white  sm:subtitle-2">
          <Link href="/auth/login">Log in</Link>
          <Link href="/auth/register">Sign Up</Link>
        </div>
      ) : (
        <div className="flex items-center gap-2 sm:gap-4 md:gap-10">
          <Link href="/profile/votes" className="hidden gap-2 md:flex">
            <Image src={votesLogo} alt="votes logo" />
            <p className="text-white text-2">Mis votos</p>
          </Link>
          <div className="flex items-center gap-3">
            <UserOutlined />
            <p className="text-sm text-white sm:text-base">
              {data?.results.email}
            </p>
            <Menu as="div" className="relative flex z-50">
              <Menu.Button>
                <span className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute border  right-0 bg-white  mt-10 px-3 w-48 py-8  rounded-[20px] shadow-shadow1 text-2">
                  <Menu.Item>
                    <Link
                      href="/profile"
                      className="flex items-center justify-center w-full gap-6 mb-5"
                    >
                      <Image
                        src={configLogo}
                        alt="logo configuration"
                        className=""
                      />

                      <p>Configuración</p>
                    </Link>
                  </Menu.Item>
                  <Menu.Item as="div" className="block mx-auto md:hidden">
                    <Link
                      className="flex items-center justify-center w-full gap-2 mb-5"
                      href={'/posts/create'}
                    >
                      <Image src={addLogo} alt="add logo"></Image>
                      <p>Crear publicación</p>
                    </Link>
                  </Menu.Item>
                  <Menu.Item as="div" className="block mx-auto md:hidden">
                    <Link
                      className="flex items-center justify-center w-full gap-2 mb-5"
                      href={'/profile/votes'}
                    >
                      <Image src={votesLogo} alt="add logo"></Image>
                      <p>Mis votos</p>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      href="/auth/login"
                      onClick={handleLogOut}
                      className="flex items-center justify-center w-full gap-6 mb-5"
                    >
                      <Image
                        src={closeSession}
                        alt="logo configuration"
                        className=""
                      />

                      <p>Cerrar sesión</p>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <div className="w-full bg-app-gray h-[2px] mb-4" />
                  </Menu.Item>

                  <Menu.Item>
                    <p className="ml-5 text-start text-app-grayDark">
                      Ayuda y soporte
                    </p>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      )}
    </div>
  );
}
