import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersistStorage, StorageValue } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";
export const getStorage = <T>(): PersistStorage<T> => {
  return {
    getItem: (name: string) => {
      const value = SecureStore.getItem(name);
      return value ? JSON.parse(value) : null;
    },
    setItem: (name: string, value: StorageValue<T>) => {
      SecureStore.setItem(name, JSON.stringify(value));
    },
    removeItem: (name: string) => {
      SecureStore.deleteItemAsync(name);
    },
  };
};
