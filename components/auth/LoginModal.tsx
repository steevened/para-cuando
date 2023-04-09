import { AuthContext, AuthModalContext } from '@/context';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
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

  const { logIn } = useContext(AuthContext);
  const { closeLoginModal } = useContext(AuthModalContext);

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const toastPromise = toast.promise(login({ email, password }), {
      loading: 'Espere...',
      success: 'Iniciado correctamente',
      error: 'Intente nuevamente',
    });
    try {
      const response = await toastPromise;
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
          isError={isError}
          value={email}
        />
      </Label>
      <PasswordInput value={password} setPassword={setPassword} />
    </ModalContent>
  );
}
