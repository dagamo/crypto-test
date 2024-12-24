import LoginTemplate from "@/components/templates/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function HomeScreen() {
  const onSubmit = async (username: string) => {
    await AsyncStorage.setItem("username", username);
    router.push("/(tabs)");
  };
  return <LoginTemplate onSubmit={onSubmit} />;
}
