import { signUp } from '@/lib/services/auth/auth.services';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Input } from './InputAuth';
import Label from './Label';
import ModalContent from './ModalContent';
import PasswordInput from './PasswordInput';

export default function RegisterModal() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const router = useRouter();

  const handleSubmit = async (e: React.ChangeEvent) => {
    e.preventDefault();
    signUp({
      email,
      password,
      first_name: firstName,
      last_name: lastName,
    }).then(() => {
      router.push('/auth/login');
    });
  };

  return (
    <ModalContent
      redirectTo="O inicia sesión"
      contentFor="register"
      btnText="Crear Cuenta"
      title="Todos Votamos"
      subtitle="Regístrate para ingresar"
      passwordAction="La contraseña debe tener mayúsculas, minúsculas y números"
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
      <div className="flex gap-1.5">
        <Label htmlFor="name" labelText="Nombre">
          <Input
            onChange={(e) => setFirstName(e.target.value)}
            id="name"
            type="text"
            placeholder="Erk"
          />
        </Label>
        <Label htmlFor="apellido" labelText="Apellido">
          <Input
            onChange={(e) => setLastName(e.target.value)}
            id="apellido"
            type="text"
          />
        </Label>
      </div>
      <PasswordInput setPassword={setPassword} />
    </ModalContent>
  );
}
