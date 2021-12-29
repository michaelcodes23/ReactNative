import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect} from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
  View,
  TextInput,
  Button
} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import navigationTheme from './app/Navigation/navigationTheme'
import AppNavigator from "./app/Navigation/AppNavigator";
export default function App() {
  
  return (
    <NavigationContainer theme = {navigationTheme}>
      <AppNavigator/>
    </NavigationContainer>
  )
}
