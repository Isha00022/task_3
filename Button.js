import React from 'react';
import { StyleSheet, Text, View ,Button, Dimensions,TouchableOpacity} from 'react-native';


 export default function FlatButton({text,onPress}){
     return(
         <TouchableOpacity onPress={onPress}>
             <View style={styles.button}>
                 <Text style={styles.buttonText}>{text}</Text>


             </View>
         </TouchableOpacity>
     )
 }

 const styles = StyleSheet.create({
     button:{
         borderRadius:8,
         paddingVertical:14,
         paddingHorizontal:10,
         backgroundColor:'pink',

     },
     buttonText:{
         color:'white',
         fontWeight:'bold',
         textTransform:'uppercase',
         fontSize:16,
         textAlign:'center',
         textShadowOffset:{width:-2,height:2},
         textShadowRadius:10,
         textShadowColor:'grey',            

     }
 })