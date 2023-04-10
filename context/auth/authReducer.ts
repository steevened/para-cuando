import { AuthState, userData } from '.';

type AuthActionType =
  | { type: 'LOGIN'; payload: userData }
  | { type: 'LOGOUT'; payload: userData };

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userData: action.payload,
        isUserLoged: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isUserLoged: false,
        userData: action.payload,
      };

    default:
      return state;
  }
};
