import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import { FC, Fragment } from 'react';
import MenuOption from '../../public/menu-more.svg';

interface Props {
  handleChangeTab: (id: number) => void;
}

const MobileMenuTabs: FC<Props> = ({ handleChangeTab }) => {
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
          <Menu.Items className="absolute right-0 bg-white origin-top-right mt-10 px-3 py-[25px] shadow-lg shadow-app-grayDark-500 w-[174px] h-[106px]">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    handleChangeTab(2);
                  }}
                  className={`   ${
                    active ? 'text-app-blue' : 'text-app-grayDark'
                  }`}
                >
                  Artistas y conciertos
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`mt-[18px]  ${
                    active ? 'text-app-blue' : 'text-app-grayDark'
                  }`}
                  onClick={() => {
                    handleChangeTab(3);
                  }}
                >
                  Torneos
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MobileMenuTabs;
