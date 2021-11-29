import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CardComp from '../components/CardComp';
import Constants from 'expo-constants';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen'
import colors from '../config/colors';
function ListingsScreen(props) {
    const listings = [
        {
            id: 1,
            title: 'Red jacket for sale',
            subTitile: 100,
            image: require('../assets/jacket.jpg')
        },
        {
            id: 2,
            title: 'Couch in great condition',
            subTitile: 1000,
            image: require('../assets/couch.jpg')
        }
    ]
    return (
        <Screen style = {styles.container}>
                <FlatList
                data = {listings}
                keyExtractor = {listings => listings.id.toString()}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item}) =>
                    <CardComp
                        title={item.title}
                        subTitle={"$" + item.subTitile}
                        image = {item.image}
                    />}
                />
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        padding: 20,

    }
})
export default ListingsScreen;