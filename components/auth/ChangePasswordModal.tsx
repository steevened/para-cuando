import useAuthStore from '@/store/auth';
import useModalStore from '@/store/loginModal';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { login } from '../../lib/services/auth/auth.services';
import ModalContent from './ModalContent';
import PasswordInput from './PasswordInput';

export default function ChangePasswordModal() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const [isError, setIsError] = useState<boolean>(false);

  const logIn = useAuthStore((state) => state.logIn);

  const { closeLoginModal } = useModalStore();

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const toastPromise = toast.promise(login({ email, password }), {
      loading: 'Espere...',
      success: 'Iniciado correctamente',
      error: 'Intente nuevamente',
    });
    try {
      const response = await toastPromise;
      console.log(response);
      Cookies.set('token', response.data.token);
      router.push('/');
      logIn();
      closeLoginModal();
      setIsError(false);
    } catch (error) {
      setIsError(true);
      // setEmail('');
      setPassword('');

      // console.log(error);
    }
  };

  return (
    <ModalContent
      title="Elige una nueva contraseña"
      subtitle="Elige una nueva contraseña"
      contentFor="change"
      btnText="Cambiar contraseña"
      redirectTo="Or Log in"
      handleSubmit={handleSubmit}
    >
      <PasswordInput order={1} value={password} setPassword={setPassword} />
      <PasswordInput order={2} value={password} setPassword={setPassword} />
    </ModalContent>
  );
}
