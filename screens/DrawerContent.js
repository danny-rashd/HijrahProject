import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerView,
    DrawerItem
} from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import {Avatar, Button, Caption, 
    Drawer, Text, Title, TouchableRipple} from 'react-native-paper';
import { AuthContext } from './context';

export function DrawerContent(props) {
    const { signOut } = React.useContext(AuthContext);
     return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
              <TouchableOpacity onPress={() => {props.navigation.navigate('Profile')}}>
                    <View style={{flexDirection:'row', marginLeft:10,marginTop:10}}>
                        <View>
                            <Avatar.Image
                            source={require("../assets/avatar.jpg")}
                            size={55}
                            />
                        </View>
                        <View style={{marginLeft: 10,flexDirection:'column'}}>
                          <Title style={styles.title}>Danial Rashid</Title>
                          <Caption style={styles.caption}>drashid970413@gmail.com</Caption>
                        </View>
                    </View>
                </TouchableOpacity>
                </View>
                <Drawer.Section styles={styles.topdrawer}>
                <DrawerItem
                        icon={({color, size })=>(
                          <MaterialIcons name='home' color={color} size={size}/>)}
                        label="Home"
                        onPress={()=>{props.navigation.navigate('Home')}}
                    />
                    <DrawerItem
                        icon={({color, size })=>(
                          <MaterialIcons name='pets' color={color} size={size}/>)}
                        label="Adopt"
                        onPress={()=>{props.navigation.navigate('Adopt')}}
                    />
                    <DrawerItem
                        icon={({color, size })=>(
                          <MaterialIcons name='shopping-cart' color={color} size={size}/>)}
                        label="Store"
                        onPress={()=>{props.navigation.navigate('Store')}}
                    />
                    <DrawerItem
                        icon={({color, size })=>(
                          <MaterialIcons name='info' color={color} size={size}/>)}
                        label="About"
                        onPress={()=>{props.navigation.navigate('About')}}
                    />
                    <DrawerItem
                        icon={({color, size })=>(
                          <MaterialIcons name='notifications' color={color} size={size}/>)}
                        label="Notifications"
                        onPress={()=>{props.navigation.navigate('Notifications')}}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section styles={styles.bottomDrawer}>
                <DrawerItem
                icon={({color, size })=>(
                    <MaterialIcons name='exit-to-app' color={color} size={size}/>)}
                label="Sign Out"
                onPress={()=>{signOut()}}
                />
            </Drawer.Section>
       </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    title: {
      fontSize: 15,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 13,
      lineHeight: 13,
    },
    topdrawer: {
      marginTop: 15,
    },
    bottomDrawer: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    }
  });