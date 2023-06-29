import React,{useEffect,useState} from 'react';

import { View, Text, TextInput, Button,TouchableOpacity, Image } from 'react-native';
import moment from 'moment';

const PaymentDone = ({ navigation, route }) => {
const [updatedData,setUpdatedData]=useState()

  
  var date = moment().utcOffset('+05:30').format('hh:mm a on MM ddd YYYY ');
  
  useEffect(() => {
    if (route.params?.data) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
     setUpdatedData(route.params?.data)
    }
  }, [route.params?.data]);
  return (
    <View style={{ flex: 1 }}>
    <View style={{borderRadius:20,borderRightWidth:1,borderLeftWidth:1,borderBottomWidth:3,padding:4}}>
      <Image
        source={require('../sucess.png')} 
        style={{
          width: 55,
          height: 55,
          marginTop: 25,
          justifyContent: 'center',
          marginLeft: 145,
        }}
      />
      <Text style={{padding:20,fontWeight:'bold',fontSize:22,color:'#30CB49'}}>Paid successFully at {date}  </Text>
    
       
      </View>
      <View style={{marginTop:112}}>
      <View style={{justifyContent:'space-evenly',flexDirection:'row'}}>
      <Image
        source={require('../sucess.png')}
        style={{
          width: 53,
          height: 58,
          marginTop:12,
        }}
      />
      
       <Text style={{padding:20,fontWeight:'bold',fontSize:28,color:'#30CB49',marginLeft:-22}}>Anurag rk </Text>
       </View>

       <Text  style={{fontSize:36,textAlign:'center',fontWeight:'bold',marginTop:-12}}>{'\u20B9'} {route.params?.data}</Text>
        <Text style={{fontSize:26,textAlign:'center',fontWeight:'bold',marginTop:11}}>Transaction ID </Text>
         <Text style={{fontSize:26,textAlign:'center',fontWeight:'bold',marginTop:-2}}>2344365632422df454434324 </Text>
         
          <View style={{marginTop:122}}>
          <Button
        title="Done"
        onPress={() => {
         navigation.navigate({
            name: 'AddMoneyScreen',
            params: { datas: updatedData },
            merge: true,
          });
        }}
        
      />
      
      </View>
      </View>
    </View>
  );
};
export default PaymentDone;
