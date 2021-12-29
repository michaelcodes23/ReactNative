import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../Navigation/routes';


const MyAccountScreen = ({navigation}) => {
    const accountIcons = [
        {
            id: 1,
            title: 'My Listings',
            icon: {
                name: 'format-list-bulleted',
                backgroundColor: colors.primary,
            },
            
        },
        {
            id: 2,
            title: 'My Messages',
            icon: {
                name: 'email',
                backgroundColor: colors.secondary,
            },
            targetScreen: routes.MESSAGES
        },
    ]
    return (
        <Screen style = {styles.screen}>
            <View style = {styles.container}>
                <ListItem
                image = {require("../assets/michael.jpg")}
                title = {'Michael Codes'}
                subTitle= {'cuencamich@gmail.com'}
                />
            </View>
            <View style = {styles.container}>
                <FlatList
                data = {accountIcons}
                keyExtractor = {accountIcons => accountIcons.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item}) =>
                    <ListItem
                        title={item.title}
                        IconComponent={
                            <Icon name = {item.icon.name} backgroundColor = {item.icon.backgroundColor}/>
                        }
                        onPress = {()=> navigation.navigate(item.targetScreen)}
                    />}
                />
            </View>

            <ListItem
            IconComponent = {<Icon name = {'logout'} backgroundColor= {'#ffe66d'}/>}
            title = {'Log Out'}
            />

        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})
export default MyAccountScreen;
