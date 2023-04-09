import { createContext } from 'react';

interface ContextProps {
  isUserLoged: boolean;
  logIn: () => void;
  logOut: () => void;
}

export const AuthContext = createContext({} as ContextProps);
