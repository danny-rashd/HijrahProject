import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,ScrollView,Button} from 'react-native';
import Swiper from 'react-native-swiper';
import {createStackNavigator} from '@react-navigation/stack';

const AboutStack=createStackNavigator();
const AboutStackScreen=()=>(
  <AboutStack.Navigator>
  <AboutStack.Screen name='About Us' component={AboutScreen}/>
  </AboutStack.Navigator>

);
const AboutScreen = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.backbutton}>
          <Button
            title="BACK"
            onPress={() => navigation.goBack()}
          />
      </View>
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#FF6347">
          <View style={styles.slide}>
            <Image
              source={require('../assets/iium.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/iiummap.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={{
          uri: 'https://photos.iium.edu.my/img/bg_image/thumb_image_generic.jpg',
        }}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Contact OSeM (IIUM)
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={{
          uri:
            'https://iium.edu.my/media/52165/facebook%2005022020.jpg',
        }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={{
          uri: 'https://iium.edu.my/media/44525/hotline%20poster%2005082019%20E2.jpg',
        }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>
      </View>
      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Contact Us
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={{
          uri:
            'https://iium.edu.my/media/52165/facebook%2005022020.jpg',
        }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={{
          uri: 'https://iium.edu.my/media/44525/hotline%20poster%2005082019%20E2.jpg',
        }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
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
});