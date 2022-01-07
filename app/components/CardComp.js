import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
//image component for cache 
import {Image} from 'react-native-expo-image-cache';
import colors from "../config/colors.js";
import AppText from "./AppText";
export default function CardComp({ title, subTitle, imageUrl, onPress, thumbnailUrl}) {
  return (
    <TouchableWithoutFeedback onPress = {onPress}>
      <View style={styles.card}>

      <Image style={styles.image} preview = {{uri: thumbnailUrl}} uri = {imageUrl} tint='light' />
      <View style={styles.detailsCont}>
        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
        <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
      </View>
    </View>
    </TouchableWithoutFeedback>
    
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsCont: {
    padding: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});
