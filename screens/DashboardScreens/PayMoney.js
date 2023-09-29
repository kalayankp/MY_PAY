import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, Dimensions, Keyboard, Alert } from 'react-native'

const PayMoney = ({ navigation }) => {
  let countryCode = '+91'
  const [active, setActive] = useState(false)
  const [senderMobNo, setSenderMobNo] = useState()
  const [money, setMoney] = useState('0')


  const SendMoney = () => {
    fetch('http://192.168.1.49:7000/bills/walletToWalletTransfer', {
      method: 'POST',
      body: JSON.stringify({
        'mobile': senderMobNo,
        "amount": money 
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.status === true) {

          //console.log('sended money', data);
          navigation.navigate("PaymentDone", {
            'amount': money,
            'time': data.data.result.Timestamp,
            'name': data.data.result.name,
            'message': data.data.result.message,
            'transferId': data.data.result.transfer_id

          });
        }
        else {
          Alert.alert(data.data.result.message)
        }
      }
      ).catch((err) => {
        Alert.alert(err.message)
        console.log('error', err.message);
      })
  }

  return (
    <SafeAreaView style={{}}>
      <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
        <View style={{ flexDirection: 'row', padding: 15, }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 25, height: 30, }}
              source={require('../../assests/images/leftArrow.png')}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '30%' }}>Send Money</ Text>
        </View>
      </View>

      <View style={{ width: '100%', height: '10%', zIndex: -1, marginTop: -11, backgroundColor: '#E8E8E8' }}>
      </View>

      <View style={{ margin: '5%', width: '90%' }}>
        <View style={{}}>

          <Text style={{ fontSize: 20, padding: 8, fontWeight: 'bold', color: 'black', marginTop: 1, color: 'black' }}> Enter Mobile No </ Text>

          <View style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 2, borderColor: 'black' }}>
            <Text style={{ fontSize: 28, marginTop: 8, color: 'black' }}>{countryCode}</Text>
            <TextInput placeholder='9876543210' placeholderTextColor="grey" onChangeText={(e) => { setSenderMobNo(e) }} keyboardType="numeric" maxLength={10} style={{ fontSize: 26, borderWidth: 0, width: 210, marginLeft: 8, color: 'black' }} />
          </View>
          <Text style={{ fontSize: 20, padding: 8, fontWeight: 'bold', color: 'black', marginTop: 20, color: 'black' }}> Enter Amount </ Text>
          <View style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 2, borderColor: 'black' }}>
            <Text style={{ fontSize: 28, marginTop: 6, color: 'black' }}>{'\u20B9'}</Text>
            <TextInput placeholder='1000' placeholderTextColor='grey' onChangeText={(e) => { setMoney(e) }} keyboardType="numeric" maxLength={10} style={{ fontSize: 23, borderWidth: 0, width: 120, marginTop: 2, marginLeft: 10, color: 'black' }} />
          </View>
        </View>
        <View stylele={{ margin: 10 }}>
          <Image source={require('../../assests/icons/ringpeIcons.png')} style={{ width: '100%', height: 122, marginTop: "10%", }} />
        </View>
      </View>


      <View style={{ width: '100%', height: '50%', backgroundColor: '#E8E8E8', }}>
        <View style={{ alignItems: 'center', marginTop: "10%", }}>
          <TouchableOpacity
            onPress={
              SendMoney}
            style={{ width: '80%', height: 62, padding: 10, borderRadius: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3f46c8' }}>
            <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>PAY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
 
  )
}
export default PayMoney 