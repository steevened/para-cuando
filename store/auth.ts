import { create } from 'zustand';

type State = {
  isLogedIn: boolean;
};

type Action = {
  logIn: () => void;
  logOut: () => void;
};

const useAuthStore = create<State & Action>((set) => ({
  isLogedIn: false,
  logIn: () => set(() => ({ isLogedIn: true })),
  logOut: () => set(() => ({ isLogedIn: false })),
}));

export default useAuthStore;
