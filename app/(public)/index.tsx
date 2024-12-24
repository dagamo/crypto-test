import LoginTemplate from "@/components/templates/Login";
import { useLogin } from "@/hooks/useLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function HomeScreen() {
  const { onSignIn } = useLogin();
  const onSubmit = async (username: string) => {
    onSignIn(username);
    router.push("/(tabs)");
  };
  return <LoginTemplate onSubmit={onSubmit} />;
}
