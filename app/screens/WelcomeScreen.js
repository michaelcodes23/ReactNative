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
import WelcomeButtons from "../components/LoginButton";
const HomeScreen = () => {
  const bckImg = require("../assets/background.jpg");
  const logo = require("../assets/logo-red.png");
  console.log(bckImg);
  return (
    <>
      <ImageBackground source={bckImg} resizeMode="cover" style={styles.image}>
        <View style={styles.logoView}>
          <Image style={styles.logo} source={logo} />

          <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 20 }}>
            Sell What You Don't Need
          </Text>
        </View>

        {/* <View style={styles.bars}> */}
        <WelcomeButtons style={{ width: "80%" }} />
        {/* </View> */}
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
  bars: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
    // position: "relative",
    // bottom: 0,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
    // position: "relative",
    // bottom: 0,
  },
});
export default HomeScreen;
