import React,{useEffect,useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image } from 'react-native';

export default function AddmoneySucessFully({ navigation, route }) {
    const [updatedData,setUpdatedData]=useState()

    useEffect(() => {
        if (route.params?.data) {
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
         setUpdatedData(route.params?.data)
        }
      }, [route.params?.data]);
  return (
    <View  style={{flex:1,justifyContent:'center',padding:42}}>
      
      <View>
      <Text style={{fontSize:28,}}> Money Added SuccessFully in Wallet</Text>
      <View  style={{flexDirection:'row',marginTop:32}}>
       <Text style={{fontSize:34,}}> {'\u20B9'} </Text>
       <Text style={{fontSize:34,}}> {route.params?.data}.00 </Text>
      </View>
      <View  style={{justifyContent:'center', alignItems:'center',marginTop:22,}}>
      <Image
        source={require('../../sucess.png')}
        style={{
          width: 103,
          height: 108,
          
        }}
      />
      </View>
      </View>
    <TouchableOpacity 
     onPress={() => {
        navigation.navigate({
           name: 'AddMoneyScreen',
           params: { datas: updatedData },
           merge: true,
         });
       }}
    style={{borderWidth:2,borderRadius:22, justifyContent:'center',marginTop:100,height:60,backgroundColor:'#3f46c8'}} >
      <Text style={{fontSize:25,textAlign:'center',color:'white'}}> Return Home</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
