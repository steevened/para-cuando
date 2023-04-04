import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { FC } from 'react';
import { AddIcon } from '../atoms/AddIcon';
import {
  ArrowMenuLogo,
  CloseSessionLogo,
  ConfigLogo,
  VotesLogo,
} from '../svg/Svg';

interface Props {
  handleLogOut: () => void;
}

export const NavbarMenu: FC<Props> = ({ handleLogOut }) => {
  return (
    <Menu as="div" className="relative z-50 flex">
      <Menu.Button>
        <ArrowMenuLogo />
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 mt-10 bg-white py-8  rounded-[20px] shadow-shadow1 text-2 text-black px-3 space-y-3">
          {/* profile */}
          <Menu.Item>
            <Link href="/profile" className="flex items-center">
              <ConfigLogo />
              <span className="ml-2">Configuración</span>
            </Link>
          </Menu.Item>
          {/* create post */}
          <Menu.Item as="a" className="block md:hidden">
            <Link className="flex items-center" href={'/posts/create'}>
              <AddIcon />
              {/* <Image src={addLogo} alt="add logo"></Image> */}
              <span className="ml-2 whitespace-nowrap">Crear publicación</span>
            </Link>
          </Menu.Item>
          {/* votes */}
          <Menu.Item as="a" className="block md:hidden">
            <Link className="flex items-center" href={'/profile/votes'}>
              <VotesLogo />
              <span className="ml-2">Mis votos</span>
            </Link>
          </Menu.Item>
          {/* log out */}
          <Menu.Item>
            <Link
              href="/auth/login"
              onClick={handleLogOut}
              className="flex items-center "
            >
              <CloseSessionLogo />

              <span className="ml-2 whitespace-nowrap">Cerrar sesión</span>
            </Link>
          </Menu.Item>

          <Menu.Item>
            <div className="w-full bg-app-gray h-[2px] mb-4" />
          </Menu.Item>

          <Menu.Item>
            <p className="ml-5 text-start text-app-grayDark">Ayuda y soporte</p>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
