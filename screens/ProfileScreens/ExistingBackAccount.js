import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { REACT_APP_BASE_URL } from "@env";
import { useIsFocused } from '@react-navigation/native';
    
const ExistingBackAccount = ({ navigation }) => {
  const [account_name, setAccountName] = useState('')
  const [account_number, setAccountNumber] = useState('')
  const [bank_name, setBankName] = useState('')
  const [ifsc_code, setIfscCode] = useState('')  
  const isFocused = useIsFocused();
    
  useEffect(() => { 
    fetch(`${REACT_APP_BASE_URL}/getBankAccount`) 
      .then((response) => response.json())
      .then((json) => {
        setAccountName(json.data.account_name)
        setAccountNumber(json.data.account_number)
        setBankName(json.data.bank_name)
        setIfscCode(json.data.ifsc_code)
        console.log(json.status)
      }) 
  }, [isFocused])

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      {/* <TouchableOpacity style={{ justifyContent: 'flex-end' }} onPress={() => navigation.goBack()}>
        <Image
          style={{ width: 28, height: 26, marginTop: 10, marginLeft: '90%' }}
          source={require('../../assests/icons/cancel.png')}
        />
      </TouchableOpacity> */}
      <Text style={{ fontSize: 24, color: '#36454F', marginTop: "10%", marginLeft: 20, textAlign: 'center' }}>Existing Account Details  </Text>
      <View style={{ justifyContent: 'center', margin: 20, marginTop: '10%', }}>
        <Text style={{ fontSize: 20, color: '#36454F' }}> Bank Name</Text>
        <Text style={{ borderBottomWidth: 1, paddingLeft: 20, fontSize: 18, borderBottomColor: '#36454F', marginTop: 11, color: '#353935' }}> {bank_name}</Text>
      </View>

      <View style={{ justifyContent: 'center', margin: 20, }}>
        <Text style={{ fontSize: 20, color: '#36454F' }}>Account Holder Name</Text>
        <Text style={{ borderBottomWidth: 1, fontSize: 18, paddingLeft: 20, borderBottomColor: '#36454F', marginTop: 11, color: '#353935' }}>{account_name}</Text>
      </View>

      <View style={{ justifyContent: 'center', margin: 20, }}>
        <Text style={{ fontSize: 20, color: '#36454F' }}>Bank Account</Text>
        <Text style={{ borderBottomWidth: 1, fontSize: 18, paddingLeft: 20, borderBottomColor: '#36454F', marginTop: 11, color: '#353935' }}> {account_number}</Text>
      </View>

      <View style={{ justifyContent: 'center', margin: 20, }}>
        <Text style={{ fontSize: 20, color: '#36454F' }}>IFSC CODE  </Text>
        <Text style={{ borderBottomWidth: 1, fontSize: 18, paddingLeft: 20, borderBottomColor: '#36454F', marginTop: 11, color: '#353935' }}> {ifsc_code}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: "space-evenly", marginTop: "15%" }}>
        <View style={{ alignItems: "center", }}>
          <TouchableOpacity style={{ borderColor: '#3f46c8', backgroundColor: '#3f46c8', borderWidth: 1, borderRadius: 20, }} onPress={() => navigation.navigate("UpdateBankAccount")}>
            <Text style={{ textAlign: 'center', fontSize: 16, padding: 14, borderRadius: 20, color: 'white', width: 160, height: 50 }}> Update Account</Text>

          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", }}>
          <TouchableOpacity style={{ borderColor: '#3f46c8', backgroundColor: '#3f46c8', borderWidth: 1, borderRadius: 20, }} onPress={() => navigation.navigate("AddNominee")}>
            <Text style={{ textAlign: 'center', fontSize: 16, padding: 14, borderRadius: 20, color: 'white', width: 160, height: 50 }}>Add Nominee</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ExistingBackAccount