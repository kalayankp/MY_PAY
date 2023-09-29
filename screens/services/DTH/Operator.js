import { View, Text,SafeAreaView,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Operator = ({ navigation, route }) => {
    const { macId, ipId } = route.params;
     console.log('=imei============>', JSON.stringify(macId))
     console.log('=============>', JSON.stringify(ipId))


  return (
   <SafeAreaView>
  
      {/* header */}

      <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
        <View style={{ flexDirection: 'row', padding: 15, }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 25, height: 30, }}
              source={require('../../../assests/images/leftArrow.png')}
            />
          </TouchableOpacity>
          <View style={{alignItems:'center'}}>
          <Text style={{ fontSize: 20, fontWeight: '400', textAlign: 'center', color: 'white', marginLeft:'20%'}}>SELECT DTH OPERATOR</ Text>
          </View>
          </View>

      </View>

      <View style={{ alignItems: 'center',justifyContent:'center',marginTop:'50%' }}>

<TouchableOpacity
  onPress={() => {navigation.navigate('Dth',{
    'macId': macId,
     'ipId':ipId,
  })}
  }
  style={{ width: '95%', height: 62,borderRadius: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#132fba' }}>
 
  <Text style={{ fontSize: 22, color: 'white',padding: 2,textAlign:'center', }}>Processed</Text>
 
  {/* {loading ?
    (<ActivityIndicator size="large" color='white' style={{marginLeft:12}} />) : null} */}

</TouchableOpacity>
</View>
   </SafeAreaView>
  )
}

export default Operator