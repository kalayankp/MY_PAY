import { View, Text, Image, TouchableOpacity,Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { REACT_APP_BASE_URL } from "@env";
const Profile = ({ navigation }) => {

  const [name, setName] = useState('')
   
  const LogOut = () => { 
    fetch(`${REACT_APP_BASE_URL}/logout`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.status);
        if (json.status === 'true') {
           //  navigation.navigate('WelcomeScreen')
          //navigation.goBack()
          Alert.alert("Sucessfully Logout")
          navigation.reset({ routes: [{ name: "WelcomeScreen" }], })
         
        }
      })
  }

  useEffect(() => {
    fetch(`${REACT_APP_BASE_URL}/profile`)
      .then((response) => response.json())
      .then((json) => {
        let fullName = json.data.first_name + ' ' + json.data.last_name
        setName(fullName)

      })
  }, []);
 
  return (
    <View >
      <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
      <View style={{ padding: 15, }}>
          <Text style={{ fontSize: 24, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white',}}>Profile </ Text>
        </View> 
        </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80 }} >
        <Image style={{ width: 120, height: 120, }} source={require('../../assests/images/userProfile.png')} />
        <Text style={{ marginTop: 20, fontWeight: '500', fontSize: 18, color: 'black' }}> {name}</Text>
        {/* <Text style={{ marginTop: 0, fontWeight: '600', fontSize: 20, color: 'black' }}> VIR ID: 623435345345</Text> */}
      </View>

      <View style={{ marginTop: 50 }}>

        <TouchableOpacity onPress={() => { navigation.navigate('ProfileInfo') }} style={{ borderBottomWidth: 1, marginTop: 25, justifyContent: 'space-between' }}>
          {/* <View style={{ flexDirection: 'row', marginBottom: 12, marginTop: 12 }}> */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 }}>
            <View style={{}}>
              <Image style={{ width: 30, height: 30, }} source={require('../../assests/icons/images/preferences.png')} />
            </View>
            <View style={{}}>
              <Text style={{ marginTop: 0, fontWeight: '400', fontSize: 20, color: 'black', width: 170 }}>Profile Info</Text>
            </View>
            <View>
              <Image style={{ width: 30, height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', }} source={require('../../assests/icons/arrow.png')} />
            </View>

          </View>

          {/* /</View> */}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('EditProfile') }} style={{ borderBottomWidth: 1, marginTop: 20, justifyContent: 'space-between' }}>
          {/* <View style={{ flexDirection: 'row', marginBottom: 12, marginTop: 12 }}> */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16, margin: 10 }}>
            <View style={{}}>
              <Image style={{ width: 30, height: 30, }} source={require('../../assests/images/editicon.png')} />
            </View>
            <View style={{}}>
              <Text style={{ marginTop: 0, fontWeight: '400', fontSize: 20, color: 'black', width: 177, }}> Edit Profile   </Text>
            </View>

            <View >

              <Image style={{ width: 30, height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', }} source={require('../../assests/icons/arrow.png')} />
            </View>

          </View>

          {/* /</View> */}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('') }} style={{ borderBottomWidth: 1, marginTop: 25, justifyContent: 'space-between' }}>
          {/* <View style={{ flexDirection: 'row', marginBottom: 12, marginTop: 12 }}> */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 }}>
            <View style={{}}>
              <Image style={{ width: 30, height: 30, }} source={require('../../assests/images/help.png')} />
            </View>
            <View style={{}}>
              <Text style={{ marginTop: 0, fontWeight: '400', fontSize: 20, color: 'black', width: 170 }}>About Us</Text>
            </View>

            <View >
              <Image style={{ width: 30, height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', }} source={require('../../assests/icons/arrow.png')} />
            </View>

          </View>
          {/* /</View> */}
        </TouchableOpacity>
 
        <TouchableOpacity onPress={() => LogOut()} style={{ borderBottomWidth: 1, marginTop: 25, justifyContent: 'space-between' }}>
          {/* <View style={{ flexDirection: 'row', marginBottom: 12, marginTop: 12 }}> */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 }}>
            <View style={{}}>
              <Image style={{ width: 30, height: 30, }} source={require('../../assests/images/switch.png')} />
            </View>
            <View style={{}}>
              <Text style={{ marginTop: 0, fontWeight: '400', fontSize: 20, color: 'black', width: 170 }}>Logout</Text>
            </View>
            <View >
              <Image style={{ width: 30, height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', }} source={require('../../assests/icons/arrow.png')} />
            </View>

          </View>

          {/* /</View> */}
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default Profile