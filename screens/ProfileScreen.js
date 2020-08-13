import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import {MaterialCommunityIcons, Ionicons} from 'react-native-vector-icons';
const ProfileScreen = (navigation) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userpfp}>
        <View style={{flexDirection: 'row', marginTop: 15, }}>
          <Avatar.Image 
            source={require('../assets/avatar.jpg')}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={styles.title}>MUHAMAD NOR DANIAL BIN MOHD RASHID</Title>
            <Caption style={styles.caption}>#1627851</Caption>
          </View> 
        </View>
      </View>

      <View style={styles.userpfp}>
        <View style={styles.row}>
          <MaterialCommunityIcons name="home-map-marker" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Kuala Lumpur, Malaysia</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="google-maps" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Mahallah Ali</Text>
        </View>
        <TouchableRipple onPress={() => {}}>
        <View style={styles.row}>
          <MaterialCommunityIcons name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+016436565</Text>
        </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
        <View style={styles.row}>
          <Ionicons name="md-mail" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>drashid970413@gmail.com</Text>
        </View>
        </TouchableRipple>
      </View>

      <View style={styles.menulist}>
        <TouchableRipple onPress={() => alert("Share App to Contacts")}>
          <View style={styles.menuItem}>
            <Ionicons name="md-notifications" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Notifications</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => alert("Share App to Contacts")}>
          <View style={styles.menuItem}>
            <Ionicons name="md-share" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Share App to Contacts</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => alert("Settings")}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="settings" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userpfp: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingRight: 5,
    width:250,
    marginTop:1,
    marginBottom: 1,
    flex: 1,
    flexWrap: 'wrap',
    lineHeight:25
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menulist: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
});