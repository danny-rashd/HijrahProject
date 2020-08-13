import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet,Modal } from 'react-native';
const NotificationScreen = ({navigation}) => { 
  return (
    <View style={styles.container}>
        <Text>NotificationScreen</Text>
          <Button
            title="Go HOME"
            onPress={() => navigation.goBack()}
          />
          <Button
            title="Click Button"
            onPress={() => alert("Notification Screen")}
          />
      </View>
  );
};
export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
