import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, Dimensions} from 'react-native';
import React, { useState } from 'react';
import { backgroundColor, borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import FlatButton from './Button';

export default function App({navigation}) {
  const [count, setCount] = useState(0);
  const {height} =Dimensions.get("screen");
  const height_loop=height*0.28;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <Text style={styles.heading}>Counter</Text> 
      </View>
      <View style={styles.footer}>
         <Text style={styles.count}>{count}</Text>
         <View style={styles.row}>
           <FlatButton text='decrement' onPress={() => setCount(count - 1)}/>
           <Text>          </Text>
           <FlatButton text='Increment' onPress={() => setCount(count + 1)}/>
         </View>
      </View>
      
         
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :'pink',
  
  },
  
  header:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor :'pink',

  },

  footer:{
    flex:2,
    backgroundColor:'#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  heading:{
    fontWeight:'bold',
    fontSize:60,
    fontStyle:'normal',
    color:'#fff',
    textShadowOffset:{width:-2,height:2},
    textShadowRadius:10,
    textShadowColor:'grey',
  },
  count:{
    fontSize:200,
    color:'grey',
    textShadowOffset:{width:-2,height:2},
    textShadowRadius:20,
    textShadowColor:'pink',
  },
  row:{
    flexDirection:'row',

  }

});



