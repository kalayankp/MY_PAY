import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
 
const UsageCap = ({navigation}) => {
  return (
    <View style={{flex:1,marginTop:122}}> 
    <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image
            style={{ width: 28, height: 26, marginLeft: 10, marginTop: 12 }}
            source={require('../../assests/icons/cancel.png')} 
          /> 
        </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { navigation.navigate('EnableUsageCap') }}  style={{ borderWidth: 1, borderRadius: 24, width: '75%', height: 60, justifyContent: 'center', backgroundColor: '#3f46c8', marginTop: 42, marginBottom: 28, fontSize: 18 }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 800, fontSize: 20 }}>ENABLE USAGE CAP</Text>
                 </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { navigation.navigate('DailyUsageCap') }} style={{ borderWidth: 1, borderRadius: 24, width: '75%', height: 60, justifyContent: 'center', backgroundColor: '#3f46c8', marginTop: 42, marginBottom: 28, fontSize: 18 }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 800, fontSize: 20 }}>DAILY USAGE CAP</Text>
                </TouchableOpacity>
            </View>  
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity  onPress={() => { navigation.navigate('MonthlyUsageCap') }}   style={{ borderWidth: 1, borderRadius: 24, width: '75%', height: 60, justifyContent: 'center', backgroundColor: '#3f46c8', marginTop: 42, marginBottom: 28, fontSize: 18 }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 800, fontSize: 20 }}>MONTHLY USAGE CAP</Text>
                </TouchableOpacity>
            </View>

    </View>
  )
}

export default UsageCap