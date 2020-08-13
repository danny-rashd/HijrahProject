import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import { Ionicons,MaterialCommunityIcons} from '@expo/vector-icons'; 
const PetFinderScreen = ({navigation}) => {
    return (
      <View style={{alignItems: 'center', marginTop:5}}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.profilebox}>
        </View>
      </TouchableOpacity>
      <View>
      <Text style={styles.profilename}>MUHAMAD NOR DANIAL BIN MOHD RASHID</Text>
      <View style={styles.infoline}>
          <MaterialCommunityIcons name="calendar-month" size={20} />
          <TextInput style={{marginLeft:5}} placeholder="Date" placeholderTextColor="gray " keyboardType="number-pad"/>
        </View>
        <View style={styles.infoline}>
          <MaterialCommunityIcons name="clock" size={20} />
          <TextInput style={{marginLeft:5}} placeholder="Time" placeholderTextColor="gray " keyboardType="number-pad"/>
        </View>
        <View style={styles.infoline}>
          <Ionicons name="md-paper" size={20} />
          <TextInput style={{marginLeft:5}} placeholder="Description" placeholderTextColor="gray"/>
        </View>
        <View style={styles.infoline}>
          <MaterialCommunityIcons name="home-city" size={20} />
          <TextInput style={{marginLeft:5}} placeholder="Location(specific)" placeholderTextColor="gray" keyboardType="number-pad"/>
        </View>
        <Button style={styles.savebutton} onPress={() =>alert("Report Submitted")} title="Send Report" color="#FF0000" />
      </View>
    </View>
    );
};

export default PetFinderScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    alignSelf: 'flex-start',
  },
  infoline: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  profilename :{
    margin:10, 
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width:250
  },
  profile: {
    height: 100,
    width: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',     
   },
   profileheader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
   },
    iconpos:{
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10
  },
  savebutton:{
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  }
});