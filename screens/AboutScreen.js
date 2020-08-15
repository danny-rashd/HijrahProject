import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet,Modal } from 'react-native';
const AboutScreen = ({navigation}) => { 
  return (
    <View style={styles.container}>
        <Text>NotificationScreen</Text>
          <Button
            title="RETURN TO PREVIOUS"
            onPress={() => navigation.goBack()}
          />
          <Button
            title="Click Button"
            onPress={() => alert("AboutScreen Screen")}
          />
      </View>
  );
};
export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
