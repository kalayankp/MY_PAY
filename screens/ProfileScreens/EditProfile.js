import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { REACT_APP_BASE_URL } from "@env";
export default function EditProfile({ navigation }) {
  console.log(REACT_APP_BASE_URL) 
  const handleClick = () => {
        
    fetch(`${REACT_APP_BASE_URL}/getBankAccount`)
      .then((response) => response.json())
      .then((json) => {
        if (json.status === false) {  
          navigation.navigate('LinkBankAcc')
        } else {

          navigation.navigate('ExistAccount')
        }
        console.log(json.status)
      })
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
          <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '29%' }}>Edit Profile</ Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => { navigation.navigate('ChangeEmail') }} style={{ borderBottomWidth: 1, marginTop: 20, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
          <View>
            <Image style={{ width: 30, height: 30, marginTop: 14 }} source={require('../../assests/images/editmemail.png')} />
          </View>
          <View>
            <Text style={{ marginTop: 0, fontWeight: '400', fontSize: 18, marginTop: 10, width: 220, color: 'black' }}>Change Email Address</Text>
          </View>
          <View>
            <Image style={{ width: 30, height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 10 }} source={require('../../assests/icons/arrow.png')} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('ChangePassword') }} style={{ borderBottomWidth: 1, marginTop: 10, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
          <View>
            <Image style={{ width: 30, height: 30, marginTop: 10, paddingTop: 10, }} source={require('../../assests/images/password.png')} />
          </View>
          <View>
            <Text style={{ marginTop: 4, fontWeight: '400', fontSize: 18, marginTop: 10, width: 220, color: 'black' }}>Change Password</Text>
          </View>
          <View>
            <Image style={{ width: 30, height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 10, }} source={require('../../assests/icons/arrow.png')} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('AddressUpdate') }} style={{ borderBottomWidth: 1, marginTop: 12, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
          <View>
            <Image style={{ width: 20, height: 30, marginTop: 10, paddingTop: 6, }} source={require('../../assests/images/location.png')} />
          </View>
          <View>
            <Text style={{ marginTop: 4, fontWeight: '400', fontSize: 18, marginTop: 6, width: 220, color: 'black' }}>Update Address   </Text>
          </View>
          <View>
            <Image style={{ width: 30, height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 10, }} source={require('../../assests/icons/arrow.png')} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('TpinScreen') }} style={{ borderBottomWidth: 1, marginTop: 10, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
          <View>
            <Image style={{ width: 30, height: 30, }} source={require('../../assests/images/Untitled.png')} />
          </View>
          <View>
            <Text style={{ fontWeight: '400', fontSize: 18, marginTop: 1, width: 220, color: 'black' }}>SET T-PIN </Text>
          </View>
          <View>
            <Image style={{ width: 30, height: 30, }} source={require('../../assests/icons/arrow.png')} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('UsageCap') }} style={{ borderBottomWidth: 1, marginTop: 10, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
          <View>
            <Image style={{ width: 40, height: 40, }} source={require('../../assests/images/wallet.png')} />
          </View>
          <View>
            <Text style={{ fontWeight: '400', fontSize: 18, marginTop: 8, width: 220, color: 'black' }}>Set Usage Cap</Text>
          </View>
          <View>
            <Image style={{ width: 30, height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 10, }} source={require('../../assests/icons/arrow.png')} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleClick()} style={{ borderBottomWidth: 1, marginTop: 10, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
          <View>
            <Image style={{ width: 30, height: 30, }} source={require('../../assests/images/bank.png')} />
          </View>
          <View>
            <Text style={{ fontWeight: '400', fontSize: 18, marginTop: -2, width: 220, color: 'black' }}> Update Bank Account</Text>
          </View>
          <View>
            <Image style={{ width: 30, height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 1, }} source={require('../../assests/icons/arrow.png')} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('IncomeVerification') }} style={{ borderBottomWidth: 1, marginTop: 10, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
          <View>
            <Image style={{ width: 40, height: 40 }} source={require('../../assests/images/income.png')} />
          </View>
          <View>
            <Text style={{ marginTop: 0, fontWeight: '400', fontSize: 18, marginTop: 3, width: 220, color: 'black' }}>Income Verification</Text>
          </View>
          <View>
            <Image style={{ width: 30, height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 10 }} source={require('../../assests/icons/arrow.png')} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('WalletClosure') }} style={{ borderBottomWidth: 1, marginTop: 10, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 5 }}>
          <View>
            <Image style={{ width: 50, height: 50, }} source={require('../../assests/images/editicon.png')} />
          </View>
          <View>
            <Text style={{ marginTop: 0, fontWeight: '400', fontSize: 18, marginTop: 10, width: 220, color: 'black' }}>Wallet Closure  </Text>
          </View>
          <View>
            <Image style={{ width: 30, height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 10, }} source={require('../../assests/icons/arrow.png')} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}