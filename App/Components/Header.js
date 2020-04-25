import React, { Component } from 'react';
import { View, Text,ImageBackground,StyleSheet,Image} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <ImageBackground 
      style={styles.container}
      source={require('../Images/bg.jpg')}   
       >
        <View style={styles.pfhead}>
            <View style={styles.pfcont}>
                <Image 
                style={styles.pfdes} 
                source={require('../Images/dp.jpg')}
                />
            </View>
        <Text style={styles.text}>Dikshit Adithya</Text>
        <Text style={styles.oneline}>Meant To be Billionare</Text>
        </View>

       </ImageBackground>
       
       );
  }
}
const styles = StyleSheet.create({
    container:{
        width:500,
        height:800,
    },
    pfhead:{
        justifyContent:'center',
        justifyContent:'center',
        flex:1,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
    
        
    },
    pfcont:{
        width: 180,
        height: 180,
        marginRight: 10,
        marginBottom: 20,
        marginTop:2,
        left:170,
        

    },
    pfdes:{
        flex:1,
        width:null,
        borderRadius:90,
        borderColor:'#00e3fc',
        borderWidth:5,
        right:20
    },
    text:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        bottom:20
    },
    oneline:{
        fontSize:15,
        textAlign:'center',
        fontWeight:'800',
        bottom:20,
        fontWeight:'bold'
    }
})