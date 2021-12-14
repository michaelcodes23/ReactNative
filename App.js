import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect} from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";
export default function App() {
  console.log('test successful, keep it going!!!')
  const [imageUris, setImageUris] = useState([]);
  const handleAdd = (uri) => {
    //spread operator allows us to push into the setImageUris
    //by setting the imageUris to the array, and what it currently contains
    //plus the new uri
    setImageUris([...imageUris, uri])
  }

  const handleRemove = (uri) => {
    //go through the array and filter out what is in the imageUri except
    //the uri you are trying to remove
    setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  }
  return (
      // <Screen>
      //   <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage = {handleRemove}/>
      // </Screen>
      <ListingEditScreen/>

  )
}
