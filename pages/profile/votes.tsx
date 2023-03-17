import Button from '@/components/buttons/Button';
import ProfileLayout from '@/components/layouts/ProfileLayout';
import ProfileSlider from '@/components/sliders/ProfileSlider';
import { useProfile } from '@/lib/services/profile/ProfileInfo.services';
import { ReactElement, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import 'swiper/css';
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
  const { profileDetails } = useProfile();
  const [toggleSection, setToggleSection] = useState<number>(1);

  console.log(profileDetails);

  const pages = [1, 2, 3];
  return (
    <div className="w-full">
      <Toaster />
      <div className="w-full h-[129px] bg-app-blue relative">
        <div
          className="w-[120px] h-[120px]  absolute -translate-x-1/2 left-1/2 translate-y-1/2 bottom-0 rounded-full"
          style={
            profileDetails
              ? {
                  backgroundImage: `url(${profileDetails?.result.image_url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : {}
          }
        />
      </div>
      <div className="flex justify-center pt-20 pb-19">
        <ul className="flex gap-[11px] h-[30px]">
          <li>
            <Button
              toggleSection={toggleSection}
              onClick={() => setToggleSection(1)}
              className={`${
                toggleSection === 1 ? 'bg-app-gray text-white' : 'bg-white'
              }`}
            >
              Mis votos
            </Button>
          </li>
          <li>
            <Button
              toggleSection={toggleSection}
              onClick={() => setToggleSection(2)}
              className={`${
                toggleSection === 2 ? 'bg-app-gray text-white' : 'bg-white'
              }`}
            >
              Mis publicaciones
            </Button>
          </li>
        </ul>
      </div>
      <div className=" app-container">
        <ProfileSlider />
      </div>
      {/* <div className="flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">
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
      </div> */}
    </div>
  );
};

VotesPage.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default VotesPage;
