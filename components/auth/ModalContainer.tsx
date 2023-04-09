import { AuthModalContext } from '@/context';
import Children from '@/lib/interfaces/components.interface';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import closeBtn from '../../public/authLogin/cil_x-circle.svg';

export default function ModalContainer({ children }: Children) {
  const { closeLoginModal, isAuthModalShowed } = useContext(AuthModalContext);

  return (
    <div
      className={`w-full bg-app-black/80 rounded-[20px] border border-app-gray px-[38px] relative max-w-[557px] h-full ${
        !isAuthModalShowed ? 'sm:px-[50px]' : ''
      }`}
    >
      <button onClick={() => closeLoginModal()}>
        {isAuthModalShowed ? (
          <Image
            src={closeBtn}
            alt="eye"
            className="absolute top-[18px] right-[18px]"
          />
        ) : (
          <Link href="/">
            <Image
              src={closeBtn}
              alt="eye"
              className="absolute top-[18px] right-[18px]"
            />
          </Link>
        )}
      </button>

      {children}
    </div>
  );
}
