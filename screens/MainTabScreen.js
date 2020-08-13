import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons ,MaterialIcons} from '@expo/vector-icons'; 

import HomeScreen from './HomeScreen';
import AdoptScreen from './AdoptScreen';
import StoreScreen from './StoreScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';
import PetFinderScreen from './PetFinderScreen';

const HomeStack = createStackNavigator();
const AdoptStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const StoreStack = createStackNavigator();
const EditProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen =()=>(
  <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#38B6FF',
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Adopt"
        component={AdoptStackScreen}
        options={{
          tabBarLabel: 'Adopt',
          tabBarColor: '#38B6FF',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="pets" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#38B6FF',
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreStackScreen}
        options={{
          tabBarLabel: 'Store',
          tabBarColor: '#38B6FF',
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-cart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);
export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#38B6FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title:'Home',
          headerLeft: () => (
            <Ionicons.Button name="md-menu" size={25} backgroundColor="#38B6FF" onPress={() => navigation.openDrawer()}></Ionicons.Button>
        )
          }} />
  </HomeStack.Navigator>
);
const AdoptStackScreen = ({navigation}) => (
  <AdoptStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#38B6FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <AdoptStack.Screen name="Adopt" component={AdoptScreen} options={{
          title:'Adopt Screen',
          headerLeft: () => (
            <Ionicons.Button name="md-menu" size={25} backgroundColor="#38B6FF" onPress={() => navigation.openDrawer()}></Ionicons.Button>
        ),
        headerRight: () => (
            <Ionicons.Button name="md-add" size={25} backgroundColor="#38B6FF" onPress={() => navigation.navigate('PetFinder')}></Ionicons.Button>
        )
          }} />
        <AdoptStack.Screen name="PetFinder" component={PetFinderScreen} options={{title:'Pet Finder'}} />
  </AdoptStack.Navigator>
);
const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#38B6FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
          title:'Profile',
          headerLeft: () => (
            <Ionicons.Button name="md-menu" size={25} backgroundColor="#38B6FF" onPress={() => navigation.openDrawer()}></Ionicons.Button>
        ),
        headerRight: () => (
          <MaterialIcons.Button name="edit" size={25} backgroundColor="#38B6FF" onPress={() => navigation.navigate('EditProfile')}></MaterialIcons.Button>
      )
          }} />
          <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} options={{title:'Edit Profile'}} />
  </ProfileStack.Navigator>
);
const StoreStackScreen = ({navigation}) => (
  <StoreStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#38B6FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <StoreStack.Screen name="Store" component={StoreScreen} options={{
          title:'Store',
          headerLeft: () => (
            <Ionicons.Button name="md-menu" size={25} backgroundColor="#38B6FF" onPress={() => navigation.openDrawer()}></Ionicons.Button>
        ),
        headerRight: () => (
          <Ionicons.Button name="md-share" size={25} backgroundColor="#38B6FF" onPress={() => alert('Share Location')}></Ionicons.Button>
      )
          }} />
  </StoreStack.Navigator>
);