import Button from '@/components/buttons/Button';
import { usePublicationTypes } from '@/lib/services/publicationTypes/publicationTypes.services';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { FC, Fragment } from 'react';

export const MenuDropDown: FC = () => {
  const { data: publicationTypes } = usePublicationTypes();

  // console.log(publicationTypes);

  return (
    <Menu as="div" className="relative inline-block md:hidden">
      <Menu.Button className="p-3 border rounded-full border-app-gray">
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
            {publicationTypes?.map(({ name, id }) => (
              <Menu.Item as={'div'} key={id}>
                {() => (
                  <Link className={`block py-1`} href={`/categories/${id}`}>
                    <Button
                      className={`hover:bg-app-grayDark hover:text-white `}
                    >
                      {name}
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
