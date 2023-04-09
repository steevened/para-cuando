import { AuthState } from '.';

type AuthActionType = { type: 'LOGIN' } | { type: 'LOGOUT' };

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isUserLoged: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isUserLoged: false,
      };

    default:
      return state;
  }
};
