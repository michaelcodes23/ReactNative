import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from "../screens/ListingEditScreen";


import Newlistingbutton from './NewListingButton';
import routes from './routes';
import useNotifications from '../hooks/useNotifications';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    useNotifications()
    return(
        <Tab.Navigator >
        <Tab.Screen 
            name = 'Feed' 
            component={FeedNavigator} 
            // options = {{headerShown: false}}
            options = {{
            tabBarIcon: ({size , color}) => <MaterialCommunityIcons name = 'home' size = {size} color = {color} />,
            headerShown: false
            }}
        />
        <Tab.Screen 
            name = 'ListingEdit' 
            component={ListingEditScreen}
            //make sure to wrap methods inside parenthesis so they are return statements not blocks of code
            options = {({navigation, route}) => ({
                tabBarButton: () => <Newlistingbutton onPress = {()=> navigation.navigate(routes.LISTING_EDIT) }/>,
                tabBarIcon: ({size , color}) => <MaterialCommunityIcons name = 'plus-circle' size = {size} color = {color} />,
                headerShown: false
            })
            }
        />
        <Tab.Screen 
            name = 'Account' 
            component={AccountNavigator}
            options = {{
                tabBarIcon: ({size , color}) => <MaterialCommunityIcons name = 'account' size = {size} color = {color} />
                }}
        />
    </Tab.Navigator>
    )
    
}
    


export default AppNavigator