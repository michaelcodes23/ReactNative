import React from "react";
import { View, StyleSheet } from "react-native";
import {Image} from 'react-native-expo-image-cache'
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
function ListingDetailsScreen({route}) {
  const listings  = route.params
  return (
    <View>
      <Image preview = {{uri: listings.images[0].thumbnailUrl}} style={styles.image} tint='light' uri={listings.images[0].url} />
      <View style={styles.detailsCont}>
        <AppText style={styles.title}>{listings.title}</AppText>
        <AppText style={styles.price}>${listings.price}</AppText>
        <View style={styles.userCont}>
          <ListItem
            image={require("../assets/michael.jpg")}
            title="Michael Codes"
            subTitle="8 Listings"
          />
        </View>
      </View>
    </View>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsCont: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userCont: {
    marginVertical: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
  },
});
