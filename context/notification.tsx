import { useState, createContext, ReactNode } from "react";
import { SafeAreaViewComponent, StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";
import { Style } from "react-native-paper/lib/typescript/components/List/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Device from "expo-device";

type NotificationContext = {
  openNotification: boolean;
  setOpenNotification: (
    message: string,
    type: "error" | "success" | "warning" | "info"
  ) => void;
};

export const NotificationContext = createContext<NotificationContext>(
  {} as NotificationContext
);

interface State {
  open: boolean;
  message: string;
  type: "error" | "success" | "warning" | "info";
}

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<State>({
    open: false,
    message: "",
    type: "info",
  });

  const setOpenNotification = (
    message: string,
    type: "error" | "success" | "warning" | "info"
  ) => {
    setNotification({ ...notification, message, type, open: true });
  };
  const close = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <NotificationContext.Provider
      value={{ openNotification: notification.open, setOpenNotification }}
    >
      <SafeAreaView style={style.safeArea}>
        {children}
        <Snackbar
          visible={notification.open}
          onDismiss={close}
          duration={3000}
          wrapperStyle={{
            top: 0,
            right: 0,
            left: 0,
          }}
          style={[
            notification.type === "success" && { backgroundColor: "#4caf50" },
            notification.type === "error" && { backgroundColor: "#f44336" },
            notification.type === "info" && { backgroundColor: "#2196f3" },
          ]}
          action={{
            label: "Undo",
            onPress: close,
          }}
        >
          {notification.message}
        </Snackbar>
      </SafeAreaView>
    </NotificationContext.Provider>
  );
};
const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
