import useAuthStore from '@/store/auth';
import useModalStore from '@/store/loginModal';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useState } from 'react';
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

  // const { login } = useLogin();

  const { login: logIn } = useAuthStore();

  const { closeLoginModal } = useModalStore();

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const response = await login({ email, password });
      console.log(response);
      Cookies.set('token', response.data.token);
      router.push('/');
      logIn();
      closeLoginModal();
    } catch (error) {
      console.log(error);
      // if (error?.response.message === 401) {
      //   setIsError(true);
      // }
    }

    login({ email, password })
      .then((res) => {
        console.log(res);
        Cookies.set('token', res.data.token);
        router.push('/');
        logIn();
      })
      .catch((err) => {
        console.log(err);
      });
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
