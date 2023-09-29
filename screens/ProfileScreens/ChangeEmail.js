import { View, Text, TextInput, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { REACT_APP_BASE_URL } from "@env";
 
const data1 = [
  { label: 'House Wife', value: '1' },
  { label: 'Retired', value: '2' },
  { label: 'Salaried', value: '3' },
  { label: 'Self Employed', value: '4' },
  { label: 'Self Employed Professional', value: '5' },
  { label: 'Student Above 18 years', value: '6' },
  { label: 'Politicians', value: '7' },
  { label: 'Others', value: '7' },
];
 
 
const ChangeEmail = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [updateemail, setUpdateEmail] = useState('')
  const [values1, setValues1] = useState('SELECT REASOON');

  useEffect(() => {
    fetch(`${REACT_APP_BASE_URL}/profile`)
      .then((response) => response.json())

      .then((json) => {

        setEmail(json.data.email)
        console.log('---', json.data.email)
      })
  }, []);

  // ----------- POST API CALL -------------------
 
  const dataPost = () => {
    fetch(`${REACT_APP_BASE_URL}/emailUpdate`, {
      method: 'POST',
      body: JSON.stringify({
        newemail: updateemail,
        email_change_reason: values1
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
       <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
        <View style={{ flexDirection: 'row', padding: 15, }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 25, height: 30, }}
              source={require('../../assests/images/leftArrow.png')}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '29%' }}>Change Email</ Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: '15%', borderWidth: 2, borderColor: 'grey', borderRadius: 20, margin: 22, justifyContent: 'center' }}>
        <Text style={{ fontSize: 22, borderWidth: 0, width: 410, marginLeft: 65, padding: 10, color: 'black' }}>{email}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10, borderWidth: 2, borderColor: 'grey', borderRadius: 20, margin: 22, justifyContent: 'center' }}>

        <TextInput placeholder='Add New Email' onChangeText={(e) => { setUpdateEmail(e) }} keyboardType="numeric" maxLength={36} style={{ fontSize: 22, borderWidth: 0, width: 350, marginLeft: 18, paddingLeft: 8, color: 'black' }} />
      </View>

      <View style={{ borderWidth: 2, borderRadius: 22, width: '89%', margin: 20, padding: 5, borderColor: 'grey', marginTop: 15 }}>
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

      <View style={{ justifyContent: 'center', alignItems: "center" }}>
        <TouchableOpacity onPress={() => dataPost()}
          style={styles.button}>
          <Text style={styles.buttonText}>Update Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChangeEmail


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
    backgroundColor: '#132fba'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
    fontWeight: '12',
  },
  dropdown: {
    margin: 16,
    height: 8,
    fontWeight: 'bold',
  },
  selectedTextStyle: {
    fontSize: 18,
    color: 'grey',
    textAlign: 'center'
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