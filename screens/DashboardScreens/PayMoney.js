import React,{useState,useEffect} from 'react'

import {View,Text,TextInput,TouchableOpacity} from 'react-native'


const PayMoney=()=>{
  let countryCode= '+91'
const [active,setActive]=useState(false)
const [money,setMoney]=useState('0')
 const [updatedMoney,setUpdatedMoney] = useState(0)
 
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
    <View style={{padding:20,marginTop:'12%'}}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>SEND MONEY</ Text>
 <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-between'}}>
   <View>
      <Text style={{fontSize:20}}> Available Balance </ Text>
      </View>
      <View>
       
      <Text style={{fontSize:25,marginTop:-5,borderBottomWidth:2,borderColor:'grey',color:'#3f46c8'}}>{'\u20B9'}  100000 </ Text>
      </View>
   </View>
   <View style={{borderWidth:2,padding:20,marginTop:'20%',borderRadius:20,borderLeftColor:'grey',borderTopColor:'grey',borderBottomColor:'grey',borderRightColor:'grey',borderRightWidth:5,borderBottomWidth:5, opacity: 0.5,}}>
      <Text style={{fontSize:22,padding:8,fontWeight:'bold',color:'black',marginTop:20}}> Enter Mobile No </ Text>
     
      <View style={{flexDirection:'row',marginTop:10,borderBottomWidth:2,borderColor:'grey'}}>
        <Text style={{fontSize:28,marginTop:8}}>{countryCode}</Text>
        <TextInput placeholder='9876543210' onChangeText={(e)=>{setMoney(e)}} keyboardType="numeric" maxLength={6} style={{fontSize:26,borderWidth: 0,width:210,marginLeft:8}}/>
       </View>
       <Text style={{fontSize:20,padding:8,fontWeight:'bold',color:'black',marginTop:20}}> Enter Amount </ Text>
       <View style={{flexDirection:'row',marginTop:10,borderBottomWidth:2,borderColor:'grey'}}>
        <Text style={{fontSize:28,marginTop:6}}>{'\u20B9'}</Text>
        <TextInput placeholder='1000' onChangeText={(e)=>{setMoney(e)}} keyboardType="numeric" maxLength={10} style={{fontSize:23,borderWidth: 0,width:120,marginTop:2,marginLeft:10}}/>
       </View>
    </View>
      <View style={{marginTop:"14%",alignItems:'center'}}>
        <TouchableOpacity  
         onPress={() => {
         navigation.navigate({
            name: 'PaymentDone',
            params: { data: money },
            merge: true,
          });
        }}
        style={{width:'80%',height:62,marginTop:112,padding:10,borderRadius:20,borderWidth:1,alignItems:'center',justifyContent:'center',backgroundColor: '#3f46c8'}}>
        <Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>PAY</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => {
        navigation.navigate({
           name: 'Homes',
           params: { datas:money},
           merge: true,
         });
       }}
       style={{fontSize:14,color:'white',fontWeight:'bold',color:'black',marginLeft:180,marginTop:5}}
      >
      <Text style={{color:'black'}}> Back To Home </Text>
      </TouchableOpacity>
      </View>
    </View>
   
  )
}
export default PayMoney