import React, { Component } from 'react';
import {Text, View,TouchableOpacity,Image,Alert,ScrollView,FlatList,Button,StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class AdoptScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Nini",
         image:"https://res.cloudinary.com/rppcloud/image/fetch/s--a4sz4Rjp--/c_fill,e_improve:indoor:80,g_auto,h_900,w_600/https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47736175/2/%3Fbust%3D1585713099", 
         description:"Cat, Female, 11 months, calico"},
         {id:2, title: "Little Cato",
         image:"https://images.creativemarket.com/0.1.0/ps/4520255/300/200/m2/fpc/wm0/yxz5b1hkpktdck3qwfgan30jrfzocorljbjhsjgkicbdgys7izeplhkyujintnp1-.jpg?1527535320&s=50840af159fbd74b39dd666c964b5bd3", 
         description:"Cat, Male, 6 months, brown tabby"},
         {id:3, title: "Mochi",
         image:"https://www.thesprucepets.com/thmb/FcAjaccYiSK3IDrq-tzjh3zlnSg=/1080x1080/filters:no_upscale():max_bytes(150000):strip_icc()/37587975_889760374551318_78404718182793216_n-5b69b5cb46e0fb00505791e1.jpg", 
         description:"Cat, Male, 4 years, siamese"},
         {id:4, title: "Kali",
         image:"https://i.redd.it/mmnso9t263p21.jpg", 
         description:"Cat, Female, 5 years, sphynx"},
         {id:5, title: "Gunther",
         image:"https://www.urbanpawsuk.com/wp-content/uploads/2018/05/Black-and-White-Netherland-Dwarf-Rabbit-Pet-Model-For-Hire.jpg", 
         description:"Rabbit, Male, 2 years,dwarf"},
         
      ]
    };
  }

  render() {
    return (
      <View style={Styles.container}>
        <FlatList style={Styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          
          ItemSeparatorComponent={() => {
            return (
              <View style={Styles.separator}/>
            )
          }}

          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={Styles.card}>
                <Image style={Styles.cardImage} source={{uri:item.image}}/>
                
                <View style={Styles.cardHeader}>
                  <View>
                    <Text style={Styles.title}>{item.title}</Text>
                    <Text style={Styles.description}>{item.description}</Text>
                    
                    <View style={Styles.timeContainer}>
                      <MaterialCommunityIcons name="calendar" size={24} color="red" />
                      <Text style={Styles.time}>{item.time}</Text>
                    </View>
                  </View>
                </View>

                <View style={Styles.cardFooter}>
                  <View style={Styles.socialBarContainer}>
                    <View style={Styles.socialBarSection}>
                      <TouchableOpacity style={Styles.socialBarButton}>
                        <MaterialCommunityIcons name="eye" size={24} color="#39FF14" />
                        <Text style={Styles.socialBarLabel}>50</Text>
                      </TouchableOpacity>
                    </View>
                    
                    <View style={Styles.socialBarSection}>
                      <TouchableOpacity style={Styles.socialBarButton}>
                      <MaterialCommunityIcons name="comment" size={24} color="#39FF14" />
                        <Text style={Styles.socialBarLabel}>4</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}
 const Styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },

  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },

  separator: {
    marginTop: 10,
  },

  /******** card **************/
  card:{
    shadowColor: '#000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor:"#EEEEEE",
  },
  cardImage:{
    flex: 1,
    height: 250,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
    fontWeight: 'bold'
  }, 
  description:{
    fontSize:12,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginLeft: 5,
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  iconData:{
    width:15,
    height:15,
    marginTop:5,
    marginRight:5
  },
  timeContainer:{
    flexDirection:'row'
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});   