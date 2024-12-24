import useUserStore from "@/state/user";

export const useLogin = () => {
  const { setUsername } = useUserStore();
  const onSignIn = (username: string) => {
    setUsername(username);
  };
  return {
    onSignIn,
  };
};
