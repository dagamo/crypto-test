import { Router } from "expo-router";

export const validateSignIn = (username: string, router: Router) => {
  if (!username) {
    return router.replace("/(public)");
  }
  if (username) {
    return router.replace("/(tabs)");
  }
};
