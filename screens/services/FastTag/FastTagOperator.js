
import React, { useState, useEffect } from 'react'

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native'


const FastTagOperator = ({ navigation, route }) => {
  const [biller_ids, setBiller_ids] = useState('');
  const [operator, setOperator] = useState('')
  const [selectOperator,setSelectOperator]=useState('')
  //1121 
  console.log(biller_ids);
  const getData = () => {
    fetch('http://192.168.1.49:7000/bills/getElectricityBillers')
      .then(res => res.json())
      .then(data =>
        //console.log(data),
        setOperator(data.data)
      )
  }
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <View>
      <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
        <View style={{ flexDirection: 'row', padding: 15, }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 25, height: 30, }}
              source={require('../../../assests/images/leftArrow.png')}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '30%' }}>RingPe</Text>
        </View>
      </View>
   
      <View style={{ width: '100%', height: '5%', backgroundColor: '#E8E8E8' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: "black", padding: 5 }}>Electricity Bill </Text>
      </View>
         {/* search bar */}
      <View>
        {/* <View style={{ marginTop: '3%', justifyContent: "center", margin: 10, alignItems: 'center', borderWidth: 2, width: '90%', borderRadius: 20, borderColor: 'black', flexDirection: 'row', justifyContent: 'space-around' }}>
          <TextInput placeholder='Search Biller Name' style={{ fontSize: 20, padding: 10, color: "black" }} />
          <Image source={require('../../assests/icons/images/zoom.png')} style={{ width: 22, height: 18, }} />
        </View> */}
        {/* <View style={{ width: '100%', height: '6%', backgroundColor: '#E8E8E8' }}>
        </View>  */}
        </View>
        <View style={{}}>
          <View style={{}}>
            <Text style={{ marginTop: '1%', fontSize: 20, color: 'black', padding: 10, fontWeight: "500" }}>All Billers</Text>
          </View>
        </View>
     
      <View style={{marginTop:'-12%',backgroundColor:'#E8E8E8'}}>
      <FlatList
        data={operator}
        setSelectOperator
        renderItem={({ item }) => (
          <View style={{marginTop:'3%',borderColor:'grey',backgroundColor:'white'}}>
           <TouchableOpacity onPress={()=>{
            setSelectOperator(item.biller_name)
            setBiller_ids(item.biller_id)
            navigation.navigate('ElectricityForm',{
                "biilerId":item.biller_id,
                'billerName':item.biller_name
            })
           }}>
            <Text style={{color:'black',padding:'5%',fontSize:20}}>{item.biller_name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      </View>
      {/* <TouchableOpacity
          style={{ width: '80%', height: 62, marginTop: 112, padding: 10, borderRadius: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3f46c8' }}>
          <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>Pay</Text>
        </TouchableOpacity> */}



    </View> 

  )
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 60,
    fontWeight: 'bold'
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'grey'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  placeholderStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  }
});



export default FastTagOperator