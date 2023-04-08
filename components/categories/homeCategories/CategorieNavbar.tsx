import Input from '@/components/Forms/Input';
import { Types } from '@/lib/interfaces/publicationTypes/publicationTypes.interface';
import { FC } from 'react';
import { MenuDropDown } from './MenuDropdown';
import PostCategories from './PostCategories';

interface Props {
  publicationTypes: Types;
}

const CategorieNavbar: FC<Props> = ({ publicationTypes }) => {
  return (
    <div className="relative w-full shadow-shadow1 py-9">
      <div className="flex px-5 max-w-[980px] mx-auto justify-between gap-2 items-center">
        <MenuDropDown publicationTypes={publicationTypes} />
        <div className="hidden md:block md:flex-[1] mr-10">
          <PostCategories publicationTypes={publicationTypes} />
        </div>
        <div className="flex-1 ">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default CategorieNavbar;
