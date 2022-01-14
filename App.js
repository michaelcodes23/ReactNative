import React, {useState} from "react";
import { NavigationContainer} from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import navigationTheme from './app/Navigation/navigationTheme'
import AppNavigator from "./app/Navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import storage from "./app/auth/storage";
import { navigationRef } from "./app/Navigation/rootNavigation";
import logger from "./app/utility/logger";

logger.start()
export default function App() {
 
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
    const user = await storage.getUser();

    if(user) setUser(user)
    
  }

  if (!isReady){
    return (
      <AppLoading 
        startAsync={restoreUser} 
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />    );
  }
  else {

    return (

      //anything we pass in the provider will be available to all of the components inside the rovider
      //pass in two objects, user / setUser, to ensure we are able to change the user in the
      //LoginScreen
      <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice/>
      <NavigationContainer ref={navigationRef}  theme = {navigationTheme}>
        {/* if a user is logged in take them to the AppNavigator, otherwise show AuthNavigator*/}
        {user ? <AppNavigator/> : <AuthNavigator/>}
      </NavigationContainer>
      </AuthContext.Provider>
    )
  }
    
  
  

}
