import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Swipeable from "react-native-gesture-handler/Swipeable" 

import colors from "../../config/colors";
import AppText from "../AppText";
import Icon from '../Icon'


export default function ListItem({ title, icon, image,  IconComponent, subTitle, onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight 
    underlayColor={colors.light}
    onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image &&<Image style={styles.image} source={image} />}
      <View style = {styles.detailsCont}>
        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
        
      </View>
      <MaterialCommunityIcons size={25} name = {'chevron-right'} color = {colors.medium} />

    </View>

    </TouchableHighlight>
    </Swipeable>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: 'center'
  },
  detailsCont: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
