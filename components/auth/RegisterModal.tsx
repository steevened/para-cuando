import { useAuthRegister } from '@/lib/services/auth/register.services';
import { Input } from './InputAuth';
import Label from './Label';
import ModalContent from './ModalContent';
import PasswordInput from './PasswordInput';

export default function RegisterModal() {
  const { mutate } = useAuthRegister();

  console.log(mutate);

  return (
    <ModalContent
      redirectTo="O inicia sesión"
      contentFor="register"
      btnText="Crear Cuenta"
      title="Todos Votamos"
      subtitle="Regístrate para ingresar"
      passwordAction="La contraseña debe tener mayúsculas, minúsculas y números"
    >
      <Label htmlFor="email" labelText="Email">
        <Input id="email" type="email" placeholder="ejemplo@mail.com" />
      </Label>
      <div className="flex gap-1.5">
        <Label htmlFor="name" labelText="Nombre">
          <Input id="name" type="text" placeholder="Erk" />
        </Label>
        <Label htmlFor="apellido" labelText="Apellido">
          <Input id="apellido" type="text" />
        </Label>
      </div>
      <PasswordInput />
    </ModalContent>
  );
}
