import { FC, PropsWithChildren, useReducer } from 'react';
import { AuthContext, authReducer } from './';

export interface AuthState {
  isUserLoged: boolean;
}

const AUTH_INITIAL_STATE: AuthState = {
  isUserLoged: false,
};

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const logIn = () => {
    dispatch({ type: 'LOGIN' });
  };

  const logOut = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoged: state.isUserLoged,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
