import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import AppText from "./app/components/AppText";
import WelcomeScreen from "./app/screens/WelcomeScreen.js";
import ViewImageScreen from "./app/screens/ViewImageScreen.js";
import CardComp from "./app/components/CardComp";
import AppButton from "./app/components/AppButton.js";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import {Switch} from 'react-native'
import AppPicker from "./app/components/AppPicker";
export default function App() {
  console.log('test successful, keep it going!')
  const [isNew, setIsNew] = useState(false)
  return (

    <Screen>
      <AppPicker />
    </Screen>
  );
}
