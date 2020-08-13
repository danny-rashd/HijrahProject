import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';

export default class StoreScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} 
          region={{latitude: 3.203951,
                  longitude: 101.736694,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
            }} 
            >
            <MapView.Marker
                coordinate={{
                  latitude: 3.224029,
                  longitude: 101.729879
              }}title='The Pusak Platoon Petshop' description='nearest petshop'>
              <Image source={require('../assets/map_marker.png')} style={{ width: 40, height: 60 }} />
            </MapView.Marker>
            
            <MapView.Marker
                coordinate={{
                  latitude: 3.239705,
                  longitude: 101.640633
              }}title='AMYCATZ Selayang' description='nearest petshop'>
              <Image source={require('../assets/map_marker.png')} style={{ width: 40, height: 60 }} />
            </MapView.Marker>
            
            <MapView.Marker
                coordinate={{
                  latitude: 3.241419,
                  longitude: 101.640977
              }}title='Pawfection Pets' description='nearest petshop'>
              <Image source={require('../assets/map_marker.png')} style={{ width: 40, height: 60 }} />
            </MapView.Marker>
    
            <MapView.Marker
                coordinate={{
                  latitude: 3.213097,
                  longitude: 101.754216
              }}title='kucingAisy Petshop' description='nearest petshop'>
              <Image source={require('../assets/map_marker.png')} style={{ width: 40, height: 60 }} 
              />
            </MapView.Marker>
            </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});