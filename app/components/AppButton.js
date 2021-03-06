import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.buttonLogin, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>

      {/* <Pressable style={styles.buttonLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </Pressable>
      <Pressable style={styles.buttonRegister}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </Pressable> */}
      {/* <Button color={colors.secondary} title="REGISTER" style={styles.button} /> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonLogin: {
    // flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default AppButton;
