import Children from '@/lib/interfaces/components.interface';
import Image from 'next/image';
import Link from 'next/link';
import closeBtn from '../../public/authLogin/cil_x-circle.svg';

export default function ModalContainer({ children }: Children) {
  return (
    <div className="w-full bg-app-black/80 rounded-[20px] border border-app-gray px-[38px] md:px-[58px] relative max-w-[557px] h-full">
      <Link href="/">
        <Image
          src={closeBtn}
          alt="eye"
          className="absolute top-[18px] right-[18px]"
        />
      </Link>
      {children}
    </div>
  );
}
