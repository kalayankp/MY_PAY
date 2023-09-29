import React,{useState,useEffect} from 'react'

import {View,Text,TextInput,TouchableOpacity} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
const AddMoneyScreen=({ navigation,route})=>{
const [active,setActive]=useState(false)
const [money,setMoney]=useState('0')
 const [updatedMoney,setUpdatedMoney] = useState(0)
 let x=route.params?.datas
const collectAllMoney=()=>{
  setUpdatedMoney(route.params?.datas)
};

// const newRef= useRef()
const updatevalue=()=>{
  useEffect(()=>{
    setMoney('1000')
  })
}
const isDisabled=()=>{
  let data=money
  if(data!==0){
setActive(true)

  }else{
    setActive(false)
  }
  
}
  return(
    <View style={{padding:20,marginTop:'10%'}}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>Wallet</ Text>
 <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-between'}}>
   <View>
      <Text style={{fontSize:20,color:'black'}}> Available Balance </ Text>
      </View>
      <View>
       
      <Text style={{fontSize:25,marginTop:-5,borderBottomWidth:2,borderColor:'grey',color:'#3f46c8'}}>{'\u20B9'}  {x} </ Text>
      </View>
   </View>
   <View style={{borderWidth:2,padding:20,marginTop:'20%',borderRadius:20,borderLeftColor:'black',borderTopColor:'black',borderBottomColor:'black',borderRightColor:'black',borderRightWidth:5,borderBottomWidth:5, opacity: 0.5,}}>
      <Text style={{fontSize:20,padding:8,fontWeight:'bold',color:'black'}}>LOAD MONEY</ Text>
     
      <View style={{flexDirection:'row',marginTop:10,borderBottomWidth:2,borderColor:'black',}}>
        <Text style={{fontSize:28,color:'black'}}>{'\u20B9'}</Text>
        <TextInput placeholder='1000' placeholderTextColor="black" onChangeText={(e)=>{setMoney(e)}} keyboardType="numeric" maxLength={6} style={{fontSize:20,borderWidth: 0,width:120,color:'black',marginTop:-4}}/>
       </View>
    </View>
      <View style={{marginTop:"14%",alignItems:'center'}}>
        <TouchableOpacity  
         onPress={() => {
         navigation.navigate({
            name: 'AddmoneySucessFully',
            params: { data: money },
            merge: true,
          });
        }}
        style={{width:'80%',height:62,marginTop:112,padding:10,borderRadius:20,borderWidth:1,alignItems:'center',justifyContent:'center',backgroundColor: '#3f46c8'}}>
        <Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>Load Money</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => {
        navigation.navigate({
           name: 'Homes',
           params: { datas:money},
           merge: true,
         });
       }}
       style={{fontSize:14,color:'white',fontWeight:'bold',color:'black',marginLeft:122}}
      >
      <Text style={{color:'black'}}> Back To Home </Text>
      </TouchableOpacity>
      </View>
    </View>
   
  )
}
export default AddMoneyScreen