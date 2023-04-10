import { getProfileInfo } from '@/lib/helpers/getProfileInfo';
import Cookies from 'js-cookie';
import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { AuthContext, authReducer, userData } from './';

export interface AuthState {
  isUserLoged: boolean;
  userData: userData;
}

const AUTH_INITIAL_STATE: AuthState = {
  isUserLoged: false,
  userData: { id: '', email: '' },
};

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      logOut();
    } else {
      logIn();
    }
  }, []);

  const logIn = async () => {
    const { id, email } = await getProfileInfo();
    dispatch({ type: 'LOGIN', payload: { id, email } });
  };

  const logOut = () => {
    dispatch({ type: 'LOGOUT', payload: { id: '', email: '' } });
    Cookies.remove('token');
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoged: state.isUserLoged,
        userData: state.userData,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
