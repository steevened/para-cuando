import React from 'react';
interface IButton {
  children: React.ReactNode;
}
const Button: React.FC<IButton> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
