import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import MenuOption from '../../public/menu-more.svg';

export default function More() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="cursor-pointer ">
      <Menu as="div" className="relative flex z-[1]">
        <Menu.Button>
          <Image src={MenuOption} alt="more menu button" />
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
          <Menu.Items className="absolute right-0 bg-white origin-top-right mt-10 px-3 py-[25px] shadow-lg shadow-app-grayDark-500/500 w-[174px] h-[106px]">
            <Menu.Item>
              {({ active }) => (
                <Link href="/search">
                  <p className="text-base font-normal leading-[18px] text-app-grayDark">
                    Artistas y conciertos
                  </p>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/search">
                  <p className="mt-[18px] text-base font-normal leading-[18px] text-app-grayDark">
                    Torneos
                  </p>
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
