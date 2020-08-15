import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView ,StyleSheet, Alert} from 'react-native';

import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {  } from 'react-native';
import {Button} from 'react-native-paper';
import * as firebase from 'firebase'

export default class HomeScreen extends React.Component {
  state={
      email: "",

  }
  static navigationOptions = {
      title: 'Home',
    };



    componentDidMount(){
     this.unsubscribeAuth = firebase.auth().onAuthStateChanged(user=>{
        if(user){
          this.setState({
            email:user.email
          })
        }
        else {
          this.props.navigation.replace('Sign In');
        }
      })
    }

    userSignout(){
      firebase.auth().signOut()
      .catch(error=>{
        Alert.alert(error.message)
      })
    }

    componentWillUnmount(){
      this.unsubscribeAuth()
    }

  
  render(){
      return (
          <View style={Styles.container}>
          <ScrollView style={Styles.container}>
      <View style={Styles.sliderContainer}>
        <Swiper
          autoplay
          vertical={false}
          height={200}
          activeDotColor="#FF6347">
          <View style={Styles.slide}>
            <Image
              source = {{uri:'https://images.creativemarket.com/0.1.0/ps/4520255/300/200/m2/fpc/wm0/yxz5b1hkpktdck3qwfgan30jrfzocorljbjhsjgkicbdgys7izeplhkyujintnp1-.jpg?1527535320&s=50840af159fbd74b39dd666c964b5bd3'}}
              resizeMode="cover"
              style={Styles.sliderImage}
            />
          </View>
          
          <View style={Styles.slide}>
            <Image
              source = {{uri:'https://res.cloudinary.com/rppcloud/image/fetch/s--a4sz4Rjp--/c_fill,e_improve:indoor:80,g_auto,h_900,w_600/https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47736175/2/%3Fbust%3D1585713099'}}
              resizeMode="cover"
              style={Styles.sliderImage}
            />
          </View>
          
          <View style={Styles.slide}>
            <Image
              source = {{uri:'https://www.thesprucepets.com/thmb/FcAjaccYiSK3IDrq-tzjh3zlnSg=/1080x1080/filters:no_upscale():max_bytes(150000):strip_icc()/37587975_889760374551318_78404718182793216_n-5b69b5cb46e0fb00505791e1.jpg'}}
              resizeMode="cover"
              style={Styles.sliderImage}
            />
          </View>

        </Swiper>
      </View>


      <View style={Styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Gallery
        </Text>
        <View style={Styles.card}>
          <View style={Styles.cardImgWrapper}>
          <Image
              source = {{uri:'https://bilafond.files.wordpress.com/2012/08/a-cat-on-computer.jpg'}}
              resizeMode="cover"
              style={Styles.cardImg}
            />
          </View>
        </View>
        <View style={Styles.card}>
          <View style={Styles.cardImgWrapper}>
            <Image
              source = {{uri:'https://i.pinimg.com/originals/ae/50/d3/ae50d3c04ff6aa4757cf2cd7e90df8a4.jpg'}}
              resizeMode="cover"
              style={Styles.cardImg}
            />
          </View>
        </View>
        <View style={Styles.card}>
          <View style={Styles.cardImgWrapper}>
            <Image
              source = {{uri:'https://live.staticflickr.com/1099/683237726_1a41ee505b_b.jpg'}}
              resizeMode="cover"
              style={Styles.cardImg}
            />
          </View>
        </View>
        <View style={Styles.card}>
          <View style={Styles.cardImgWrapper}>
            <Image
              source = {{uri:'https://images.squarespace-cdn.com/content/v1/55c945e0e4b04386fb9f8162/1531837146897-RJA7PBBKEMGJWGAGDA2B/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/cute-3252251.jpg?format=2500w'}}
              resizeMode="cover"
              style={Styles.cardImg}
            />
          </View>
        </View>
        <View style={Styles.card}>
          <View style={Styles.cardImgWrapper}>
            <Image
              source = {{uri:'https://purrtacular.com/wp-content/uploads/2016/08/life-w-cats-10.jpg'}}
              resizeMode="cover"
              style={Styles.cardImg}
            />
          </View>
        </View>
        <View style={Styles.card}>
          <View style={Styles.cardImgWrapper}>
            <Image
              source = {{uri:'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/play-exercise/images/gray-cat-playing-with-toy-bird.jpg'}}
              resizeMode="cover"
              style={Styles.cardImg}
            />
          </View>
        </View>

      </View>
    </ScrollView>

            <Button
                style={Styles.buttoncolor}
                onPress={()=>this.userSignout()}
                title="Sign Out"
                color="#38B6FF"
              >
              <Text style={{fontSize:22,color:'#000000'}}>
                    SIGN OUT
                  </Text>
              </Button> 

          
          </View>
        );

  }

}
const Styles = StyleSheet.create({
  aboutText:{
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  container: {
    flex: 1,
  },

  backbutton: {
    marginTop: 30,
    fontSize: 50,
    fontWeight: 'bold'
  },
  
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  cardsWrapper: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  buttoncolor: {
    margin:10,
    height: 40,
    justifyContent:'center',
    backgroundColor:'#38B6FF' 
  },
});