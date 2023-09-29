import { View, Text,TouchableOpacity,Image,SafeAreaView } from 'react-native'
import React from 'react'


import LinearGradient from 'react-native-linear-gradient';
const PaymentDone = ({navigation,route}) => { 
  
  const { name,amount,transferId,message,time } = route.params;
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
        <View style={{ flexDirection: 'row', padding: 15, }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 25, height: 30, }}
              source={require('../assests/images/leftArrow.png')}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '33%' }}>RingPe</ Text>
        </View>
      </View>
      <View style={{ width: '100%', height: '8%', zIndex: -1,  backgroundColor: '#E8E8E8' }}>
      </View>
      
      <LinearGradient
                colors={['#132fba', '#6495ED',]}
                start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
                style={{borderWidth: 1, borderRadius: 22,borderBottomColor:'blue',borderBottomWidth:5,  padding: 20,marginTop:'10%',margin:10,borderWidth:1,borderColor:'white',marginBottom:41}}>
            <View style={{ }}>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <Image source={require('../assests/icons/ringpeIcon.png')} style={{ width: 112, height: 122, marginTop: -20, marginLeft: -20 }} />
                    </View>
 
                    <Text style={{ fontSize: 28, fontWeight: '600', marginLeft: 18, color: 'white', marginTop: '10%' }}>{name}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '0%',marginLeft:'4%' }}>
                    <Text style={{ fontSize: 44, fontWeight: '600', color: 'white' }}>{'\u20B9'}</Text>
                    <Text style={{ fontSize: 40, fontWeight: '600', color: 'white', marginLeft: 10 }}>{amount}</Text>
                </View>

                <Text style={{ fontSize: 18, fontWeight: '600', color: 'skyblue',textAlign:'center',padding:'1%' }}>{time}</Text>
                <Text style={{ fontSize: 20, fontWeight: '600', color: 'white',textAlign:'center', padding:'2%',marginTop:'2%' }}>Order ID: {transferId}</Text>
               
                <Image source={require('../assests/images/sucess.png')} style={{ width: 60, height: 60, marginTop: 26, marginLeft: '40%' }} />
                <Text style={{ fontSize: 28, fontWeight: '600', marginLeft: '18%', color: 'white', marginTop: '3%' }}> {message}</Text>
                
            </View> 
            </LinearGradient> 
            <View style={{ width: '100%', height: '12%', zIndex: -1,  backgroundColor: '#E8E8E8' }}>
      </View> 

            <View style={{width:"100%",borderWidth:1,borderTopWidth:2,borderBottomWidth:2,elevation:1,borderBottomColor:'white',borderTopColor:'white',backgroundColor:"white",padding:20,alignItems:'stretch'}}>
                <Text style={{fontSize:16,color:'orange',textAlign:'center'}}>Powerd By RingPe Wallet</Text>
            </View>
           
    </SafeAreaView>
  )
}

export default PaymentDone