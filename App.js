import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect} from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import navigationTheme from './app/Navigation/navigationTheme'
import AppNavigator from "./app/Navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
export default function App() {
  const [user, setUser] = useState()
  return (

    //anything we pass in the provider will be available to all of the components inside the rovider
    //pass in two objects, user / setUser, to ensure we are able to change the user in the
    //LoginScreen
    <AuthContext.Provider value={{user, setUser}}>
    <OfflineNotice/>
    <NavigationContainer theme = {navigationTheme}>
      {/* if a user is logged in take them to the AppNavigator, otherwise show AuthNavigator*/}
      {user ? <AppNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
    </AuthContext.Provider>
  )

}
