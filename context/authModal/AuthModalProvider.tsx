import { FC, PropsWithChildren, useReducer } from 'react';
import { AuthModalContext, authModalReducer } from './';

export interface AuthModalState {
  isAuthModalShowed: boolean;
}

const AUTH_MODAL_INITIAL_STATE: AuthModalState = {
  isAuthModalShowed: false,
};

export const AuthModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    authModalReducer,
    AUTH_MODAL_INITIAL_STATE
  );

  const openLoginModal = () => {
    dispatch({ type: 'OPEN MODAL' });
  };

  const closeLoginModal = () => {
    dispatch({ type: 'CLOSE MODAL' });
  };

  return (
    <AuthModalContext.Provider
      value={{
        isAuthModalShowed: state.isAuthModalShowed,
        openLoginModal,
        closeLoginModal,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};
