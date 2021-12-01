import React from "react";
import { Text } from "react-native";
import { StyleSheet, Platform } from "react-native";
//Can also use heading components
function AppText({ children, style, ...otherProps}) {
  return <Text style={[styles.text, style]} {...otherProps}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export default AppText;
