import Image from 'next/image';
import imgFooter from '../public/footerImg.jpg';
import searchLogo from '../public/search.svg';

console.log(imgFooter);

const styles = {
  backgroundImage: `url('${imgFooter.src}')`,
};

export default function Footer() {
  return (
    <div
      style={styles}
      className="h-[486px] bg-cover bg-none bg-center flex items-center justify-center"
    >
      <form className="w-5/6 relative flex items-center mt-28">
        <input
          className="w-full rounded-3xl py-4 px-6"
          type="text"
          placeholder="¿Qué quieres ver en tu ciudad?"
        />
        <Image
          className="absolute right-5"
          src={searchLogo}
          alt="search logo"
        />
      </form>
    </div>
  );
}
