import { createContext } from 'react';

interface ContextProps {
  isAuthModalShowed: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

export const AuthModalContext = createContext({} as ContextProps);
