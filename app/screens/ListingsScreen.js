import React, {useState, useEffect} from "react";
import { FlatList, View, StyleSheet } from 'react-native';
import CardComp from '../components/CardComp';
import Constants from 'expo-constants';
import listingsAPI from '../api/listings';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen'
import colors from '../config/colors';
import routes from '../Navigation/routes';
import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useAPI from "../hooks/useAPI";
function ListingsScreen({navigation}) {
    const getListingsAPI = useAPI(listingsAPI.getListings);

    useEffect(() => {
        getListingsAPI.request();
    }, []);
    
    
    return (
        <Screen style = {styles.container}>
            {getListingsAPI.error && <>
                <AppText>Could not retrieve the listings</AppText>
                <AppButton title='Retry' onPress={getListingsAPI.request}/>
            </>}
            <ActivityIndicator visible = {getListingsAPI.loading} />
                <FlatList
                data = {getListingsAPI.data}
                keyExtractor = {listings => listings.id.toString()}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item}) =>
                    <CardComp
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl = {item.images[0].url}
                        onPress = {()=> navigation.navigate(routes.LISTING_DETAILS,item)}
                        thumbnailUrl={item.images[0].thumbnailUrl}
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