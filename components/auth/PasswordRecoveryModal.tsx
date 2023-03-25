import useAuthStore from '@/store/auth';
import useModalStore from '@/store/loginModal';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { login } from '../../lib/services/auth/auth.services';
import { Input } from './InputAuth';
import Label from './Label';
import ModalContent from './ModalContent';

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
      title="Encontremos tu cuenta"
      subtitle="Para restablecer tu contraseña, escribe la dirección de correo electrónico que puedes haber utilizado con Para cuando ?"
      contentFor="change"
      btnText="Enviar correo de restablecimiento de contraseña"
      redirectTo="O volver a iniciar sesion"
      handleSubmit={handleSubmit}
    >
      <Label htmlFor="sendEmail" labelText="">
        <Input
          className="mb-[111px]"
          id="sendEmail"
          type="email"
          placeholder="ejemplo@mail.com"
          isError={false}
        />
      </Label>
    </ModalContent>
  );
}
