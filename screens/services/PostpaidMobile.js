import React,{useState,useEffect} from 'react'

import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'

  import { Dropdown } from 'react-native-element-dropdown';
  const data = [
    { label: 'Airtel', value: '1' },
    { label: 'BSNL', value: '2' },
    { label: 'Jio', value: '3' },
    
  ];
const PostpaidMobile=({ navigation, route })=>{
  let countryCode= '+91'


  const [value, setValue] = useState(null);
  return(
    <View style={{padding:20,marginTop:'10%',}}>
      <Text style={{fontSize:22,fontWeight:'bold',textAlign:'center'}}>POSTPAID  BILLS</ Text>

   <View style={{marginTop:'20%'}}>
      <Text style={{fontSize:22,padding:8,fontWeight:'bold',color:'black',marginTop:20}}> Enter Mobile No </ Text>
      <View style={{flexDirection:'row',marginTop:10,borderBottomWidth:2,borderColor:'grey'}}>
        <Text style={{fontSize:28,marginTop:8}}>{countryCode}</Text>
        <TextInput placeholder='9876543210' onChangeText={(e)=>{setMoney(e)}} keyboardType="numeric" maxLength={6} style={{fontSize:26,borderWidth: 0,width:210,marginLeft:8}}/>
       </View>
        
        <View style={{borderBottomWidth:2,borderColor:'grey'}}>
         <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={1000}
        labelField="label"
        valueField="value"
        placeholder="Select Network"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.label);
        }}
       
      />
       <Text style={{fontSize:20,padding:8,fontWeight:'bold',color:'black',marginTop:-32,}}> {value} </ Text>
       </View>
       <Text style={{fontSize:20,padding:8,fontWeight:'bold',color:'black',marginTop:20}}> Enter Amount </ Text>
       <View style={{flexDirection:'row',marginTop:10,borderBottomWidth:2,borderColor:'grey'}}>
        <Text style={{fontSize:28,marginTop:6}}>{'\u20B9'}</Text>
        <TextInput placeholder='1000' onChangeText={(e)=>{setMoney(e)}} keyboardType="numeric" maxLength={10} style={{fontSize:23,borderWidth: 0,width:120,marginTop:2,marginLeft:10}}/>
       </View>
    </View>
      <View style={{marginTop:"14%",alignItems:'center'}}>
        <TouchableOpacity  
        //  onPress={() => {
        //  navigation.navigate({
        //     name: 'PaymentDone',
        //     params: { data: money },
        //     merge: true,
        //   });
        // }}
        style={{width:'80%',height:62,marginTop:112,padding:10,borderRadius:20,borderWidth:1,alignItems:'center',justifyContent:'center',backgroundColor: '#3f46c8'}}>
        <Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>PAY</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate('Homes')}}
      // onPress={() => {
      //   navigation.navigate({
      //      name: 'Homes',
      //      params: { datas:money},
      //      merge: true,
      //    });
      //  }}
       style={{fontSize:14,color:'white',fontWeight:'bold',color:'black',marginLeft:180,marginTop:5}}
      >
      <Text style={{color:'black'}}> Back To Home </Text>
      </TouchableOpacity>
      </View>
    </View>
   
  )
}
export default PostpaidMobile



  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 60,
      
      fontWeight:'bold'
    },
   
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    placeholderStyle:{
      fontWeight:'bold',
      fontSize:20
    }
  });
