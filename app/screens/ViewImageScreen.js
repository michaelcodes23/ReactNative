import React from "react";
import colors from "../config/colors";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ViewImageScreen = () => {
  const chair = require("../assets/chair.jpg");
  return (
    <SafeAreaView style={styles.viewImage}>
      <MaterialCommunityIcons
        name="close"
        size={40}
        color="white"
        style={styles.closeButton}
      />
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={40}
        color="white"
        style={styles.deleteButton}
      />
      <Image source={chair} style={styles.chairImg} resizeMode="contain" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  viewImage: {
    flex: 1,
    backgroundColor: colors.black,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "5%",
  },
  closeButton: {
    position: "absolute",
    // backgroundColor: colors.primary,
    // height: 50,
    // width: 50,
    top: 40,
    left: 30,
  },
  deleteButton: {
    position: "absolute",
    // backgroundColor: colors.secondary,
    marginLeft: 310,
    // height: 50,
    // width: 50,
    top: 40,
    right: 30,
  },
  chairImg: {
    height: "100%",
    width: "100%",
    position: "relative",
    marginTop: "10%",
  },
});
export default ViewImageScreen;
