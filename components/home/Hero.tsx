import Image from 'next/image';
import heroImg from '../../public/hero.png';
import logo from '../../public/logo.png';
import UlCategories from '../categories/homeCategories/UlCategories';
import Input from '../Forms/Input';

const styles = {
  backgroundImage: `url('${heroImg.src}')`,
};

export default function Hero() {
  return (
    <section
      style={styles}
      className="h-[488px] px-5 bg-cover bg-none bg-center flex items-center justify-center flex-col"
    >
      <Image src={logo} alt="para cuando logo" className="mb-12" />
      <Input />
      <div className="mt-4 max-w-[425px] w-full">
        <UlCategories />
      </div>
    </section>
  );
}
