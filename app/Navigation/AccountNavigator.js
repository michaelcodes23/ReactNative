import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyAccountScreen from '../screens/MyAccountScreen';
import MessagesScreen from '../screens/MessagesScreen';


const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name = 'AccountDetails' component={MyAccountScreen} />
        <Stack.Screen name = 'Messages' component={MessagesScreen}/>
    </Stack.Navigator>
)

export default AccountNavigator;

