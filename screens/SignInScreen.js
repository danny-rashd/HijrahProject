import React from 'react';
import { View, Text, Button, StyleSheet,Modal } from 'react-native';
import{AuthContext} from'./context';

const SignInScreen = ({navigation}) => { 
  const auth=React.useContext(AuthContext);
  return (
    <View style={styles.container}>
        <Text>SIGN IN </Text>
        <Button title="Sign In" onPress={() => alert("SIGNED IN")} />
          <Button title="Register" onPress={() => navigation.navigate("Sign Up")}/>
      </View>
  );
};
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
