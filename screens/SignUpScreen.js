import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet,Modal } from 'react-native';
import {AuthContext} from './context';
 
const SignUpScreen = ({navigation}) => { 
  // const auth=React.useContext(AuthContext);
  const {signIn}=React.useContext(AuthContext);
  return (
    <View style={styles.container}>
        <Text>Create Account</Text>
          <Button title="Sign In" onPress={() => signIn()} />
          <Button title="Create Account" onPress={() => alert("Signed Up")}/>
      </View>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
