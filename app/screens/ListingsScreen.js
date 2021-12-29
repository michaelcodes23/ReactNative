import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CardComp from '../components/CardComp';
import Constants from 'expo-constants';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen'
import colors from '../config/colors';
import routes from '../Navigation/routes';
function ListingsScreen({navigation}) {
    const listings = [
        {
            id: 1,
            title: 'Red jacket for sale',
            price: 100,
            image: require('../assets/jacket.jpg')
        },
        {
            id: 2,
            title: 'Couch in great condition',
            price: 1000,
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
                        subTitle={"$" + item.price}
                        image = {item.image}
                        onPress = {()=> navigation.navigate(routes.LISTING_DETAILS,item)}
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