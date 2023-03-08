import { useRouter } from 'next/router';
import { useState } from 'react';
import { Input } from './InputAuth';
import Label from './Label';
import ModalContent from './ModalContent';
import PasswordInput from './PasswordInput';

export default function LoginModal() {
  const [email, setEmail] = useState<any>(null);
  const [password, setPassword] = useState<any>(null);
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email !== '' || password !== '') {
      localStorage.setItem('email', email);
    }
    router.push('/');
  };

  console.log(email, password);

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
