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
import PasswordInput from './PasswordInput';

export default function LoginModal() {
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
    }
  };

  return (
    <ModalContent
      title="¡Hola!"
      subtitle="Inicie sesión con los datos que ingresó durante su registro."
      contentFor="login"
      btnText="Iniciar sesión"
      redirectTo="O crea una cuenta aquí"
      passwordAction="Olvidaste tu contraseña?"
      handleSubmit={handleSubmit}
    >
      <Label htmlFor="email" labelText="Email">
        <Input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="ejemplo@mail.com"
          // isError={isError}
        />
      </Label>
      <PasswordInput setPassword={setPassword} />
    </ModalContent>
  );
}
