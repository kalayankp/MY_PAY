import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import {REACT_APP_BASE_URL} from "@env";
const LinkBankAcc = () => { 
  
  const [accountNo, setAccountNo] = useState('');
  const [accountName, setAccountName] = useState('')
  const [bankName, setBankName] = useState('')
  const [ifscCode, setIfscCode] = useState('') 
 
  //  ----------- POST API CALL -------------------
   
  const dataPost = ({ navigation }) => {
    fetch(`${ REACT_APP_BASE_URL}/addBankAccount`, {
      method: 'POST',
      body: JSON.stringify({
        account_name: accountName,
        bank_name: bankName,
        ifsc_code: ifscCode,
        account_number: accountNo,
        accountupdate_reason: ''
      }),  
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === true) {
          console.log('-------', data)
          navigation.goBack()
        }
      })
      .catch((err) => {
        alert(err.message)
        console.log(err.message);
      });
  }
  return (
    <View>
      <Text style={{ marginTop: 80, textAlign: 'center', fontWeight: 'bold', fontSize: 28 }}>Link Bank Accounts</Text>
      <View style={{ marginTop: 70, borderWidth: 2, borderColor: 'grey', borderRadius: 20, margin: 22, justifyContent: 'center' }}>
        <TextInput placeholder='Account Name' onChangeText={(e) => { setAccountName(e) }} maxLength={16} style={{ fontSize: 26, borderWidth: 0, width: 310, paddingLeft: 40 }} />
      </View> 
      <View style={{ marginTop: 10, borderWidth: 2, borderColor: 'grey', borderRadius: 20, margin: 22, }}>
        <TextInput placeholder='Bank Name' onChangeText={(e) => { setBankName(e) }} maxLength={16} style={{ fontSize: 26, borderWidth: 0, width: 310, paddingLeft: 40 }} />
      </View>


      <View style={{ marginTop: 10, borderWidth: 2, borderColor: 'grey', borderRadius: 20, margin: 22, justifyContent: 'center' }}>
        <TextInput placeholder='Account Number' onChangeText={(e) => { setAccountNo(e) }} maxLength={16} style={{ fontSize: 26, borderWidth: 0, width: 310, paddingLeft: 40 }} />
      </View>
      {/* <View style={{marginTop:10,borderWidth:2,borderColor:'grey',borderRadius:20,margin:22,justifyContent:'center'}}>
 
         <TextInput placeholder='RE-Enter Account Number' onChangeText={(e)=>{setData(e)}} keyboardType="numeric" maxLength={16} style={{fontSize:26,borderWidth: 0,width:360,paddingLeft:40}}/>
        </View> */}
      <View style={{ marginTop: 10, borderWidth: 2, borderColor: 'grey', borderRadius: 20, margin: 22, justifyContent: 'center' }}>

        <TextInput placeholder='IFSC Code' onChangeText={(e) => { setIfscCode(e) }} keyboardType="numeric" maxLength={16} style={{ fontSize: 26, borderWidth: 0, width: 310, paddingLeft: 40 }} />
      </View>

      <View style={{ justifyContent: 'center', alignItems: "center" }}>
        <TouchableOpacity onPress={dataPost}
          style={styles.button}>
          <Text style={styles.buttonText}>Add Bank Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  button: {
    borderWidth: 2,
    borderRadius: 22,
    borderColor: '#3f46c8',
    height: 58,
    width: '60%',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 70,
    backgroundColor: '#3f46c8'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    color: 'lightgrey',
    fontWeight: '12',
  }
});

export default LinkBankAcc