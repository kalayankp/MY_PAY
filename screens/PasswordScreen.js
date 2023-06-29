import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function PasswordScreen({ navigation, route }) {
  const [pass, setPass] = useState('');
  const [conformPass, setConformPass] = useState('');
  const { itemToken } = route.params;

  console.log('========pass=====>', JSON.stringify(itemToken))

  // ----------- POST API CALL -------------------

  const dataPost = () => {
    fetch('http://192.168.1.5:7000/users/registerPwd', {
      method: 'POST',
      body: JSON.stringify({

        "id": itemToken,
        "password": conformPass
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == true) {
          navigation.navigate('WelcomeScreen')
        } else {
          console.log('error')
          alert(data.message)
        }
      })
      .catch((err) => {
        alert(err.message)
        console.log(err.message);
      });
  }

  //--------------HANDLE SUBMIT--------------------

  const handleSubmit = () => {
    if (pass !== conformPass) {
      alert('Passwords do not match');
      return;
    } else {
      dataPost()
      console.log('done')
    }
  };

  return (
    <View >
      <TouchableOpacity>
        <Image
          style={{ width: 28, height: 26, marginLeft: 32, marginTop: 52 }}
          source={require('../assests/icons/cancel.png')}
        />
      </TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 28, fontFamily: 'JosefinSans-Regular', TextInputAlign: 'center', fontWeight: 'bold', marginTop: 120 }}> Password </Text>
      </View>
      <View style={{ borderWidth: 2, borderRadius: 28, width: '90%', margin: 10, padding: 10, marginTop: 65 }}>
        <TextInput placeholder='Enter Password' maxLength={18} onChangeText={(textid) => setPass(textid)} placeholderTextColor="grey" style={{ fontSize: 24, fontFamily: 'JosefinSans-Regular', textAlign: 'center', color: 'black', fontWeight: "500" }} />
      </View>

      <View style={{ borderWidth: 2, borderRadius: 28, width: '90%', margin: 10, padding: 10, marginTop: 25 }}>
        <TextInput placeholder='Conform Password' maxLength={18} onChangeText={(textid) => setConformPass(textid)} placeholderTextColor="grey"
          style={{ fontSize: 24, fontFamily: 'JosefinSans-Regular', textAlign: 'center', color: 'black', fontWeight: "500" }} />
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
        <TouchableOpacity
          onPress={handleSubmit}

          style={{ width: '80%', height: 62, marginTop: 15, borderRadius: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3f46c8' }}>
          <Text style={{ fontSize: 28, color: 'white', fontWeight: 'bold', padding: 12 }}>Signup</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
