import { NotificationContext } from "@/context/notification";
import React, { useContext } from "react";
import { useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { ILoginForm } from "./interface";

export default function LoginForm({ onSubmit }: ILoginForm) {
  const [username, setUsername] = useState("");
  const { setOpenNotification } = useContext(NotificationContext);
  const validateUsername = () => {
    if (username.trim() === "") {
      return setOpenNotification("Username is required", "error");
    }
    onSubmit(username);
  };
  const onUsernameChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setUsername(e.nativeEvent.text);
  };
  return (
    <>
      <TextInput
        style={styles.input}
        label="Username"
        onChange={onUsernameChange}
      />
      <Button mode="contained" onPress={validateUsername}>
        Login
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
  },
});
