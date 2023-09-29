import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { REACT_APP_BASE_URL } from "@env";
 
const data1 = [
  { label: 'In what city were you born?', value: '1' },
  { label: 'What is your favorite pet name?', value: '2' },
  { label: 'What is your mother maiden name?', value: '3' },
  { label: 'What was the make of your first car?', value: '4' },
  { label: 'What was your favorite food?', value: '5' },
]; 

export default function PasswordScreen({ navigation, route }) {
  const [pass, setPass] = useState('');
  const [conformPass, setConformPass] = useState('');
  const [values1, setValues1] = useState('SELECT Security Question');


  const { itemToken } = route.params;

  console.log('========pass=====>', JSON.stringify(itemToken))

  // ----------- POST API CALL -------------------

  const dataPost = () => {
    fetch(`${REACT_APP_BASE_URL}/registerPwd`, {
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
          style={{ width: 28, height: 26, marginLeft: 32, marginTop: 32 }}
          source={require('../assests/icons/cancel.png')}
        />
      </TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 28, fontFamily: 'JosefinSans-Regular', TextInputAlign: 'center', fontWeight: 'bold', marginTop: 50 }}> Password </Text>
      </View>
      <View style={{ borderWidth: 2, borderRadius: 28, width: '90%', margin: 10, padding: 10, marginTop: 65 }}>
        <TextInput placeholder='Enter Password' maxLength={18} onChangeText={(textid) => setPass(textid)} placeholderTextColor="grey" style={{ fontSize: 22, fontFamily: 'JosefinSans-Regular', textAlign: 'center', color: 'black', fontWeight: "500" }} />
      </View>

      <View style={{ borderWidth: 2, borderRadius: 28, width: '90%', margin: 10, padding: 10, marginTop: 25 }}>
        <TextInput placeholder='Conform Password' maxLength={18} onChangeText={(textid) => setConformPass(textid)} placeholderTextColor="grey"
          style={{ fontSize: 22, fontFamily: 'JosefinSans-Regular', textAlign: 'center', color: 'black', fontWeight: "500" }} />
      </View>

      <View style={{ borderWidth: 2, borderRadius: 28, width: '90%', margin: 10, padding: 10, marginTop: 25 }}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data1}
          search
          maxHeight={1000}
          labelField="label"
          valueField="value"
          placeholder={values1}
          searchPlaceholder="Search..."
          value={values1}
          onChange={item => {
            setValues1(item.label);
          }}

        />
        {/* {console.log(values)} */}
      </View>

      <View style={{ borderWidth: 2, borderRadius: 28, width: '90%', margin: 10, padding: 10, marginTop: 25 }}>
        <TextInput placeholder='ANSWER' onChangeText={(e) => { setData(e) }} keyboardType="numeric" maxLength={16} style={{ fontSize: 22, borderWidth: 0, width: 310, textAlign: 'center' }} />
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

const styles = StyleSheet.create({

  button: {
    borderWidth: 2,
    borderRadius: 22,
    borderColor: '#3f46c8',
    height: 68,
    width: '60%',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 90,
    backgroundColor: '#3f46c8'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    color: 'lightgrey',
    fontWeight: '12',
  },
  dropdown: {
    margin: 6,
    height: 25,
    fontWeight: '400',
    marginTop: 16,
    marginBottom: 16

  },
  selectedTextStyle: {
    fontSize: 22,
    color: 'grey',
    textAlign: 'center'
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
    fontSize: 18,
    color: 'grey',
    textAlign: 'center'
  },
});   
