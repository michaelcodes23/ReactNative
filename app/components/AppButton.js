import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
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
  viewButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
    // textAlign: "center",
  },
});

export default AppButton;
