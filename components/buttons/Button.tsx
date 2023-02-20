import React from 'react';
interface IButton {
  children: React.ReactNode;
}
const Button: React.FC<IButton> = ({ children }) => {
  return (
    <button className="px-5 py-3 bg-white rounded-3xl text-2 text-app-gray">
      {children}
    </button>
  );
};

export default Button;
