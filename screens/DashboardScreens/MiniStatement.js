import { View, Text,Image } from 'react-native'
import React from 'react'

const MiniStatement = () => {
  return (
    <View>
    <View style={{flexDirection:'row'}}>
    <View style={{ borderWidth: 4, borderRadius: 52, height: 65, width: 65, margin: 25, alignItems: 'center', justifyContent: 'center', borderColor: '#DD7D5D' }}>
      <Image source={require('../../assests/icons/ringpeIcon.png')} style={{ width: 42, height: 50, }} />
    </View>
    <Text style={{fontSize:30,fontWeight:'bold',marginTop:40,color:'black'}}>Mini-Statement</Text>
    
  </View>
  <View style={{borderWidth:1,width:'100%',marginTop:-12}}></View>

{/* Data listing  */}

  </View>
  )
}

export default MiniStatement