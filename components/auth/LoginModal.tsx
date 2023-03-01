import { Input } from './InputAuth';
import Label from './Label';
import ModalContent from './ModalContent';
import PasswordInput from './PasswordInput';

export default function LoginModal() {
  return (
    <ModalContent
      title="¡Hola!"
      subtitle="Inicie sesión con los datos que ingresó durante su registro."
      contentFor="login"
      btnText="Iniciar sesión"
      redirectTo="O crea una cuenta aquí"
      passwordAction="Olvidaste tu contraseña?"
    >
      <Label htmlFor="email" labelText="Email">
        <Input id="email" type="email" placeholder="ejemplo@mail.com" />
      </Label>
      <PasswordInput />
    </ModalContent>
  );
}
