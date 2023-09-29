import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { REACT_APP_BASE_URL } from "@env";
const AddressUpdate = ({ navigation }) => {
  const [address, setAddress] = useState('SELECT REASON');
  const [location, setLocation] = useState('');
  const [pin, setPin] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
    
  // ----------- POST API CALL -------------------
 
  const dataPost = () => {
    fetch(`${REACT_APP_BASE_URL}/addAddress`, {
      method: 'POST',
      body: JSON.stringify({
        line1: address,
        line2: location,
        city: city,
        state: state,
        country: country,
        zipcode: pin
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === true) {

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
      <Text style={{ textAlign: 'center', marginTop: '14%', fontSize: 25, fontWeight: 'bold' }}>Update The Address</Text>
      <View style={{ marginTop: "15%", elevation: 3, margin: 11 }}>
        <TextInput placeholder="Address(House No,Building,Street Area) *" placeholderTextColor='grey' onChangeText={(value) => setAddress(value)} style={{ borderBottomWidth: 1, marginTop: 22, width: "90%", textAlign: 'center', marginLeft: 18, fontSize: 18 }} />
        <TextInput placeholder="Locality / Town *" placeholderTextColor='grey' onChangeText={(value) => setLocation(value)} style={{ borderBottomWidth: 1, width: "83%", marginTop: 16, textAlign: 'center', marginLeft: 28, fontSize: 18 }} />
        <View style={{ flexDirection: 'row', margin: 18, }}>
          <TextInput placeholder="PIN *" placeholderTextColor='grey' onChangeText={(value) => setPin(value)} style={{ borderBottomWidth: 1, width: "35%", textAlign: 'center', marginLeft: 10, fontSize: 18 }} />
          <TextInput placeholder="State *" placeholderTextColor='grey' onChangeText={(value) => setState(value)} style={{ borderBottomWidth: 1, width: "45%", textAlign: 'center', marginLeft: 40, fontSize: 18 }} />
        </View>
        <TextInput placeholder="City / District *" placeholderTextColor='grey' onChangeText={(value) => setCity(value)} style={{ borderBottomWidth: 1, width: "83%", marginTop: 16, textAlign: 'center', marginLeft: 28, fontSize: 18 }} />
        <TextInput placeholder="COUNTRY *" placeholderTextColor='grey' onChangeText={(value) => setCountry(value)} style={{ borderBottomWidth: 1, width: "83%", marginTop: 16, textAlign: 'center', marginLeft: 28, fontSize: 18 }} />

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={{ borderWidth: 1, borderRadius: 20, width: 260, height: 40, justifyContent: 'center', backgroundColor: 'green', marginTop: 42, marginBottom: 28, fontSize: 18 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 600, fontSize: 18 }}>UPLOAD / SCAN Documents</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={dataPost} style={{ borderWidth: 1, borderRadius: 20, width: '75%', height: 60, justifyContent: 'center', backgroundColor: '#3f46c8', marginTop: 22, marginBottom: 28, fontSize: 18 }}>
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: 800, fontSize: 20 }}>Update Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default AddressUpdate