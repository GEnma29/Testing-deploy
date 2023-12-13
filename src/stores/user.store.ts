import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type UserRole = {
  public: string[];
  funkart: string[];
};
interface userState {
  name: string;
  last_name: string;
  secret: string;
  role: UserRole;
  email: string;
  isAuth: boolean;
  login: (data: {
    name: string;
    last_name: string;
    secret: string;
    role: UserRole;
    email: string;
  }) => void;
  logout: () => void;
}

export const userStore = create<userState>()(
  persist(
    (set) => ({
      name: '',
      email: '',
      role: {
        public: [],
        funkart: [],
      },
      last_name: '',
      secret: '',
      isAuth: false,
      login: ({
        name,
        last_name,
        secret,
        role,
        email,
      }: {
        name: string;
        last_name: string;
        email: string;
        secret: string;
        role: UserRole;
      }) => set({ name, last_name, email, secret, role, isAuth: true }),
      logout: () =>
        set({
          name: '',
          secret: '',
          role: {
            public: [],
            funkart: [],
          },
          isAuth: false,
        }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
