import { Menu } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import addLogo from '../public/add.svg';
import votesLogo from '../public/authRegister/votesLogo.svg';
import closeSession from '../public/closeSession.svg';
import configLogo from '../public/configLogo.svg';
import logo from '../public/icon-logo.svg';
import UserOutlined from './atoms/UserOutlined';

export default function Navbar() {
  const [userLogged, setUserLogged] = useState<any>(null);

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      setUserLogged(email);
    }
  }, []);

  return (
    <div className="w-full h-[71px] text-center bg-black flex items-center justify-between px-5 sm:px-[52px]">
      <Link href="/" className="sm:flex-1">
        <Image src={logo} alt="para cuando logo" />
      </Link>
      <Link
        href="/posts/create"
        className={`mr-4 sm:mr-9 gap-2 ${
          userLogged ? 'hidden sm:flex' : 'flex items-center '
        }`}
      >
        <Image src={addLogo} alt="add logo" className="" />
        <span className="hidden text-2 sm:subtitle-2 text-app-blue md:block">
          Crear Publicación
        </span>
      </Link>
      {!userLogged ? (
        <div className="flex gap-5 text-xs text-white sm:subtitle-2">
          <Link href="/auth/login">Log in</Link>
          <Link href="/auth/register">Sign Up</Link>
        </div>
      ) : (
        <div className=" flex items-center gap-3 sm:gap-10">
          <Link href="#" className="sm:flex gap-2 hidden">
            <Image src={votesLogo} alt="votes logo" />
            <p className="text-white text-2">Mis votos</p>
          </Link>
          <div className="flex gap-3 items-center">
            <UserOutlined />
            <p className="text-white">{localStorage.getItem('email')}</p>
            <Menu as="div" className="relative flex ">
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
              <Menu.Items className="absolute right-0 bg-white origin-top-right mt-10 px-3 w-48 py-8 z-50 rounded-[20px] shadow-shadow1 text-2">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/"
                      className="flex w-full gap-6 items-center mb-5 justify-center"
                    >
                      <Image
                        src={configLogo}
                        alt="logo configuration"
                        className=""
                      />

                      <p>Configuración</p>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/auth/login"
                      onClick={() => localStorage.removeItem('email')}
                      className="flex w-full gap-6 items-center mb-5 justify-center"
                    >
                      <Image
                        src={closeSession}
                        alt="logo configuration"
                        className=""
                      />

                      <p>Cerrar sesión</p>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  <div className="w-full bg-app-gray h-[2px] mb-4" />
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link href="/" className="text-start text-app-grayDark">
                      <p className="ml-5">Ayuda y soporte</p>
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      )}
    </div>
  );
}
