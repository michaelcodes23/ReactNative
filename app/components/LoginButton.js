import React from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import colors from "../config/colors";

export default function LoginButton() {
  return (
    <>
      <Pressable style={styles.buttonLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </Pressable>
      <Pressable style={styles.buttonRegister}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </Pressable>
      {/* <Button color={colors.secondary} title="REGISTER" style={styles.button} /> */}
    </>
  );
}

const styles = StyleSheet.create({
  viewButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonLogin: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    height: 40,
    width: "90%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRegister: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    height: 40,
    width: "90%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    // textAlign: "center",
  },
});
