import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const MyAccountScreen = () => {
    const accountIcons = [
        {
            id: 1,
            title: 'My Listings',
            icon: {
                name: 'format-list-bulleted',
                backgroundColor: colors.primary,
            }
        },
        {
            id: 2,
            title: 'My Messages',
            icon: {
                name: 'email',
                backgroundColor: colors.secondary,
            },
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
