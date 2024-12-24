import { getStorage } from "@/utils/getStore";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";
interface UserStore {
  username: string;
  setUsername: (username: string) => void;
  reset: () => void;
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      username: "",
      setUsername: (username: string) => set({ username }),
      reset: () => set({ username: "" }),
    }),
    {
      name: "user",
      version: 1,
      storage: getStorage(),
    }
  )
);

export default useUserStore;
