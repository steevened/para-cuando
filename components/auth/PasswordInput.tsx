import Image from 'next/image';
import { useState } from 'react';
import { Input } from './InputAuth';
import Label from './Label';

import eyeClosed from '../../public/eye/eyeclosed.svg';
import eyeOpen from '../../public/eye/eyeopen.svg';

interface PaswordInputProps {
  setPassword: (e: any) => void;
  value?: string;
}

export default function PasswordInput({
  setPassword,
  value,
}: PaswordInputProps) {
  const [isPasswordShowed, setIsPasswordShowed] = useState<boolean>(false);
  return (
    <Label className="relative" htmlFor="password" labelText="Contraseña">
      <div className="relative ">
        <Input
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type={isPasswordShowed ? 'text' : 'password'}
          value={value}
        />
        <Image
          src={isPasswordShowed ? eyeOpen : eyeClosed}
          alt="show / hide password"
          className="absolute right-4  top-[25px]"
          onClick={() => setIsPasswordShowed(!isPasswordShowed)}
        />
      </div>
    </Label>
  );
}
