import { StatusBar } from "expo-status-bar";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
import AppButton from "./app/components/AppButton.js";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
export default function App() {
  return (
    // <WelcomeScreen />
    <MessagesScreen/>
    // <ViewImageScreen />
    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <CardComp
    //     title="Red Jacket for sale"
    //     subTitle="$100"
    //     image={require("./app/assets/jacket.jpg")}
    //   />
    // </View>
    // <ListingDetailsScreen />
    //   {/* <MaterialCommunityIcons name="email" size={60} color="dodgerblue" /> */}
  );
}
