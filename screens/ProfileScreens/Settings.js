import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Settings = () => {

  return (
 
    <View>
      <Text>Settings</Text>
      <TouchableOpacity onPress={() => { navigation.navigate('EditProfile') }} style={{ borderBottomWidth: 1, marginTop: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
          <View>
            <Image style={{ width: 22, height: 30, }} source={require('../../assests/images/location.png')} />
          </View>
          <View>
            <Text style={{ marginTop: 0, fontWeight: '600', fontSize: 24, marginTop: -10, padding: 10, marginLeft: -20 }}>Address  </Text>
          </View>
          <View>
            <Image style={{ width: 20, height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 10, marginLeft: 28 }} source={require('../../assests/icons/arrow.png')} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('EditProfile') }} style={{ borderBottomWidth: 1, marginTop: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
          <View>
            <Image style={{ width: 22, height: 30, }} source={require('../../assests/images/location.png')} />
          </View>
          <View>
            <Text style={{ marginTop: 0, fontWeight: '600', fontSize: 24, marginTop: -10, padding: 10, marginLeft: -20 }}>Address  </Text>
          </View>
          <View>
            <Image style={{ width: 20, height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 10, marginLeft: 28 }} source={require('../../assests/icons/arrow.png')} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('EditProfile') }} style={{ borderBottomWidth: 1, marginTop: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
          <View>
            <Image style={{ width: 22, height: 30, }} source={require('../../assests/images/location.png')} />
          </View>
          <View>
            <Text style={{ marginTop: 0, fontWeight: '600', fontSize: 24, marginTop: -10, padding: 10, marginLeft: -20 }}>Address  </Text>
          </View>
          <View>
            <Image style={{ width: 20, height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 10, marginLeft: 28 }} source={require('../../assests/icons/arrow.png')} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Settings