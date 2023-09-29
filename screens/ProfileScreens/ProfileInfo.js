import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { REACT_APP_BASE_URL } from "@env";

const ProfileInfo = ({ navigation }) => {

  const [firstName, setFirstName] = useState('')
  const [dob, setDob] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [pan, setPan] = useState('')
  const [lastLogin, setLastLogin] = useState() //wallet_no
  const [address, setAddress] = useState('')
  const [wallet_no, setWallet_no] = useState('')
  
  useEffect(() => {
    fetch(`${REACT_APP_BASE_URL}/profileInfo`)
      .then((response) => response.json())
      .then((json) => {
        
        const fname = json.data.first_name + ' ' + json.data.last_name
        const email = json.data.email
        const dob = json.data.dob
        const mobileNo = json.data.mobile
        const panNo = json.data.PAN
        const lastLogin = json.data.last_login
        let address = json.data.address

        setFirstName(fname)
        setEmail(email)
        setDob(dob)
        setMobile(mobileNo)
        setPan(panNo)
        setLastLogin(lastLogin)
        setAddress(address)
        setWallet_no(json.data.wallet_no)
        console.log('&&&&&&&&&&&&&--->',json)
      })

  }, []);
 
  return (
    <SafeAreaView style={{ flex: 1,}}>
      <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
        <View style={{ flexDirection: 'row', padding: 15, }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 25, height: 30, }}
              source={require('../../assests/images/leftArrow.png')}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '30%' }}>Profile Info </ Text>
        </View>

       </View>
      <ScrollView>
        <Text style={{ margin: 10, color: 'black', marginLeft: 22, marginTop: 52 }}>NAME  (AS PER PAN)</Text>
        <Text style={{ textAlign: "center", color: 'black', borderBottomWidth: 1, marginTop: 5, margin: 5, width: '95%', fontSize: 18, borderBottomColor: 'black' }}>{firstName}</Text>

        <Text style={{ margin: 10, color: 'black', marginLeft: 22 }}>EMAIL</Text>
        <Text style={{ textAlign: "center", color: 'black', borderBottomWidth: 1, borderBottomColor: 'black', marginTop: 5, margin: 5, width: '95%', fontSize: 18 }}>{email}</Text>

        <Text style={{ margin: 10, color: 'black', marginLeft: 22 }}>DOB</Text>
        <Text style={{ textAlign: "center", color: 'black', borderBottomWidth: 1, borderBottomColor: 'black', marginTop: 5, margin: 5, width: '95%', fontSize: 18 }}>{dob}</Text>

        <Text style={{ margin: 10, color: 'black', marginLeft: 22 }}>Mobile No</Text>
        <Text style={{ textAlign: "center", color: 'black', borderBottomWidth: 1, borderBottomColor: 'black', marginTop: 5, margin: 5, width: '95%', fontSize: 18 }}>{mobile}</Text>

        <Text style={{ margin: 10, color: 'black', marginLeft: 22 }}>PAN NO</Text>
        <Text style={{ textAlign: "center", color: 'black', borderBottomWidth: 1, borderBottomColor: 'black', marginTop: 5, margin: 5, width: '95%', fontSize: 18 }}>{pan}</Text>

        <Text style={{ margin: 10, color: 'black', marginLeft: 22 }}>VIRTUAL ID</Text>
        <Text style={{ textAlign: "center", color: 'black', borderBottomWidth: 1, borderBottomColor: 'black', marginTop: 5, margin: 5, width: '95%', fontSize: 18 }}>{wallet_no}</Text>

        <Text style={{ margin: 10, color: 'black', marginLeft: 22 }}>KYC STATUS</Text>
        <Text style={{ textAlign: "center", color: 'black', borderBottomWidth: 1, borderBottomColor: 'black', marginTop: 5, margin: 5, width: '95%', fontSize: 18 }}>Verify</Text>

        <Text style={{ margin: 10, color: 'black', marginLeft: 22 }}>Last Login Date and Time</Text>
        <Text style={{ textAlign: "center", color: 'black', borderBottomWidth: 1, borderBottomColor: 'black', marginTop: 5, margin: 5, width: '95%', fontSize: 18 }}>{lastLogin}</Text>

        <Text style={{ margin: 10, color: 'black', marginLeft: 22 }}>No. of Login Failures since last Successful login</Text>
        <Text style={{ textAlign: "center", color: 'black', borderBottomWidth: 1, borderBottomColor: 'black', marginTop: 5, margin: 5, width: '95%', fontSize: 22 }}>0</Text>

        <Text style={{ margin: 10, color: 'black', marginLeft: 22 }}>Current Address</Text>
        <Text style={{ textAlign: "center", color: 'black', borderBottomWidth: 1, borderBottomColor: 'black', marginTop: 5, margin: 5, width: '95%', fontSize: 17 }}>{address}</Text>

      </ScrollView>
    </SafeAreaView>

  )
}

export default ProfileInfo