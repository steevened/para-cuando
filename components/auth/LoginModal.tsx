import useLogin from '@/lib/services/auth/login.services';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Input } from './InputAuth';
import Label from './Label';
import ModalContent from './ModalContent';
import PasswordInput from './PasswordInput';

export default function LoginModal() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const { login } = useLogin();

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    login({ email, password })
      .then((res) => {
        console.log(res);
        Cookies.set('token', res.token);
        router.push('/');
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
        />
      </Label>
      <PasswordInput setPassword={setPassword} />
    </ModalContent>
  );
}
