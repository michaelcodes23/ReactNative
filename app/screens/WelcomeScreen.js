import React from "react";
import colors from "../config/colors";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
  View,
} from "react-native";
import AppButton from "../components/AppButton";
import routes from "../Navigation/routes";
const HomeScreen = ({navigation}) => {
  const bckImg = require("../assets/background.jpg");
  const logo = require("../assets/logo-red.png");

  return (
    <>
      <ImageBackground
        blurRadius={10}
        source={bckImg}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.logoView}>
          <Image style={styles.logo} source={logo} />

          <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <AppButton title="Login" onPress = {()=> navigation.navigate('Login')}/>
          <AppButton title="Register" color="secondary" onPress = {()=> navigation.navigate(routes.LOGIN)}/>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoView: {
    // flex: 1,
    // flexDirection: "column",
    // marginTop: "40%",
    // alignItems: "center",
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
    width: "100%",
  },
  tagline: {
    fontWeight: "bold",
    fontSize: 25,
    paddingVertical: 20,
  },
});
export default HomeScreen;
