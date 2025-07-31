import { type StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  avatar: string;
  lastProfileUpdate: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  logoutUser: () => void;
}

const userStore: StateCreator<UserStore> = (set) => {
  return {
    user: null,
    setUser: (user: User) => {
      set(function () {
        return { user };
      });
    },
    logoutUser: () => {
      set(() => ({ user: null }));
      sessionStorage.clear();
      localStorage.removeItem("Notely-User");
    },
  };
};

const useUser = create(persist(userStore, { name: "Notely-User" }));

export default useUser;
