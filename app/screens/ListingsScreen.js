import React, {useState, useEffect} from "react";
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import CardComp from '../components/CardComp';
import Constants from 'expo-constants';
import listingsAPI from '../api/listings';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen'
import colors from '../config/colors';
import routes from '../Navigation/routes';
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
function ListingsScreen({navigation}) {
    const [listings, setListings] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        loadListings();
    }, []);
    
    const loadListings = async () => {
        //story for controlling animation
        setLoading(true)
        const response = await listingsAPI.getListings();
        setLoading(false)
        //story for controlling an error
        if(!response.ok)  return setError(true)
       
        setError(false)
        setListings(response.data);
    }
    return (
        <Screen style = {styles.container}>
            {error && <>
                <AppText>Could not retrieve the listings</AppText>
                <AppButton title='Retry' onPress={loadListings}/>
            </>}
            <ActivityIndicator animating = {true} size = 'large'/>
                <FlatList
                data = {listings}
                keyExtractor = {listings => listings.id.toString()}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item}) =>
                    <CardComp
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl = {item.images[0].url}
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