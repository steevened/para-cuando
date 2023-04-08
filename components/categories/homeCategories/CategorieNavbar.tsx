import Input from '@/components/Forms/Input';
import { MenuDropDown } from './MenuDropdown';
import PostCategories from './PostCategories';

export default function CategorieNavbar() {
  return (
    <div className="relative w-full shadow-shadow1 py-9">
      <div className="flex px-5 max-w-[980px] mx-auto justify-between gap-2 items-center">
        <MenuDropDown />
        <div className="hidden md:block md:flex-[1] mr-10">
          <PostCategories />
        </div>
        <div className="flex-1 ">
          <Input />
        </div>
      </div>
    </div>
  );
}
