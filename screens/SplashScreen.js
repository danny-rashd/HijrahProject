import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const SplashScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={require("../assets/icon.png")} style={styles.image}>
      {/* <View style={styles.textbox}>
        <Text>LOADING......</Text>
      </View> */}
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    textAlign: "center"
  },
  image: {
    height: 192,
    width: 192
  },
  // textbox: {
  //   flex: 1,
  //   alignItems: 'center',
  //   backgroundColor: 'white',
  //   color: 'blue',
  //   fontWeight: 'bold',
  //   fontSize: 30,
  // },
});

export default SplashScreen;