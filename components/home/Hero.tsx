import Image from 'next/image';
import { FC } from 'react';
import heroImg from '../../public/hero.png';
import logo from '../../public/logo.png';
import Input from '../Forms/Input';
import PostCategories from '../categories/homeCategories/PostCategories';

const Hero: FC = () => {
  return (
    <section className="h-[450px] relative">
      <Image
        src={heroImg}
        alt="Image"
        className="absolute inset-0 object-cover w-full h-full"
        fill
        // priority={true}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
        <Image src={logo} alt="para cuando logo" className="mb-12" />

        <Input />

        <div className="mt-4 max-w-[465px] w-full">
          <PostCategories />
        </div>
      </div>
    </section>
  );
};

export default Hero;
