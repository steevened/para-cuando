import { createContext } from 'react';

export interface userData {
  id: string;
  email: string;
}

interface ContextProps {
  isUserLoged: boolean;
  userData: userData;
  logIn: () => void;
  logOut: () => void;
}

export const AuthContext = createContext({} as ContextProps);
