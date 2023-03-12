import useModalStore from '@/store/loginModal';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BtnSumbit from '../auth/BtnSumbit';
import LoginModal from '../auth/LoginModal';
import ModalContainer from '../auth/ModalContainer';

function ModalForm() {
  const router = useRouter();
  const { closeLoginModal } = useModalStore();
  const [isLoginFormShowed, setIsLoginFormShowed] = useState<boolean>(false);
  return (
    <div className="fixed top-24 right-0 z-50 mx-5 h-[530px] max-w-[380px]">
      {isLoginFormShowed ? (
        <LoginModal />
      ) : (
        <ModalContainer>
          <div className="text-white flex flex-col items-center justify-center h-full">
            <h1 className="font-semibold text-[32px] mb-3">Todos votamos :)</h1>
            <p className="text-1 mb-11">
              Todos los votos son importantes aquí. Para validar el tuyo debes
              tener una cuenta.
            </p>
            <BtnSumbit
              className="mb-6"
              onClick={() => {
                router.push('/auth/register');
                closeLoginModal();
              }}
            >
              Crear cuenta
            </BtnSumbit>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setIsLoginFormShowed(true);
                  // closeLoginModal();
                }}
                className="text-app-yellow border-b border-app-yellow text-center"
              >
                O inicia sesión
              </button>
            </div>
          </div>
        </ModalContainer>
      )}
    </div>
  );
}

export default ModalForm;
