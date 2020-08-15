import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity, Alert,Keyboard,KeyboardAvoidingView,TouchableWithoutFeedback } from 'react-native';
import { TextInput,Button} from 'react-native-paper';
import * as firebase from 'firebase';


export default class SignUpScreen extends React.Component {
    state={
         email:"",
        Password:"",
    }

    static navigationOptions = {
        title: 'Sign Up',
      };

      userSignup(email,pass){ 
        
        console.log(this.state)
        
        firebase.auth().createUserWithEmailAndPassword(email,pass)
        .then(()=>
        {this.props.navigation.replace('MainTabScreen')
          }
      
        )
        .catch (error=>{
          Alert.alert(error.message)
        })
      }

    render(){

        return (
        <View style={styles.container}>
            <View style={{flex:.9, flex: 1, alignItems: 'center', justifyContent: 'center'}} >
             <Image source ={require("../assets/icon.png")  } />
             </View>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginContainer}>
            <View style={styles.loginForm}>
              <TextInput placeholder="Email" 
                  value={this.state.email}
                  onChangeText={(text) => this.setState({  email:text })} 
                  style={styles.loginFormTextInput} />

              <TextInput placeholder="Password" 
                  value={this.state.Password}
                  onChangeText={(text) => this.setState({ Password:text })}
               style={styles.loginFormTextInput} secureTextEntry={true}/>
                <Button
                style={styles.loginButton}
                onPress={()=>this.userSignup(this.state.email,this.state.Password)}
                title="Sign Up"
                color="#38B6FF"
              >
              <Text style={{fontSize:22,color:'#FFF'}}>
                    Sign Up
                  </Text>
              </Button> 
            </View>
          </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </View>
      );

    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  loginContainer: {
    flex: 1,
  },
  loginForm: {
    flex: 1
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    margin:10,
    height: 45,
    marginTop: 10,
    justifyContent:'center',
    backgroundColor:'#38B6FF'
  },
  loginButton: {
    margin:10,
    height: 40,
    justifyContent:'center',
    backgroundColor:'#38B6FF' 
  },
});

