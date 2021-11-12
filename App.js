import { StatusBar } from "expo-status-bar";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "./app/config/colors";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
  View,
} from "react-native";
import AppText from "./app/components/AppText";
import WelcomeScreen from "./app/screens/WelcomeScreen.js";
import ViewImageScreen from "./app/screens/ViewImageScreen.js";
import CardComp from "./app/components/CardComp";
export default function App() {
  return (
    // <WelcomeScreen />
    <ViewImageScreen />
    // <View>
    //   <CardComp />
    // </View>

    //   {/* <MaterialCommunityIcons name="email" size={60} color="dodgerblue" /> */}
  );
}

const styles = StyleSheet.create({
  logButton: {
    flex: 1,
    marginTop: 200,
    // alignItems: "center",
    backgroundColor: colors.primary,
  },
});
