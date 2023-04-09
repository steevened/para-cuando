import { AuthModalState } from './';

type AuthModalActionType = { type: 'OPEN MODAL' } | { type: 'CLOSE MODAL' };

export const authModalReducer = (
  state: AuthModalState,
  action: AuthModalActionType
) => {
  switch (action.type) {
    case 'OPEN MODAL':
      return {
        ...state,
        isAuthModalShowed: true,
      };
    case 'CLOSE MODAL':
      return {
        ...state,
        isAuthModalShowed: false,
      };

    default:
      return state;
  }
};
