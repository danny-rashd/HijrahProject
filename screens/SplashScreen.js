import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const SplashScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={require("../assets/icon.png")} style={styles.image}>
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
});

export default SplashScreen;