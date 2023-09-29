import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
 
const PaymentPending = ({navigation}) => {
    return (
         <View style={{flex:1,height:'100%'}}>        
            <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
                <View style={{ flexDirection: 'row', padding: 15, }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            style={{ width: 25, height: 30, }}
                            source={require('../../../../assests/images/leftArrow.png')}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, fontWeight: '400', color: 'white', marginLeft: '30%',elevation:0.5 }}> RINGPE</ Text>
                </View>
            </View> 
            <LinearGradient
                colors={['#FFAC1C', '#CD7F32',]}
                start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
                style={{borderWidth: 1, borderRadius: 22,borderBottomColor:'#CD7F32',borderBottomWidth:5,  padding: 20,marginTop:'10%',margin:10,borderWidth:1,borderColor:'white'}}>
            <View style={{ }}>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <Image source={require('../../../../assests/icons/ringpeIcon.png')} style={{ width: 112, height: 122, marginTop: -20, marginLeft: -20 }} />
                    </View>

                    <Text style={{ fontSize: 28, fontWeight: '600', marginLeft: 18, color: 'white', marginTop: '10%' }}> MR. ANAND  </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '0%',marginLeft:'10%' }}>
                    <Text style={{ fontSize: 44, fontWeight: '600', color: 'white' }}>{'\u20B9'}</Text>
                    <Text style={{ fontSize: 40, fontWeight: '600', color: 'white', marginLeft: 10 }}>2000.00</Text>
                </View>

                <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginLeft: "33%",padding:'1%' }}>24 AUG ,10:30 PM</Text>
                <Text style={{ fontSize: 20, fontWeight: '600', color: 'white', marginLeft: "25%",padding:'2%',marginTop:'2%' }}>Order ID : 34fd3fcf4f4d</Text>
               
                <Image source={require('../../../../assests/icons/error.png')} style={{ width: 110, height: 110, marginTop: 20, marginLeft: '36%' }} />
                <Text style={{ fontSize: 28, fontWeight: '600', marginLeft: '22%', color: 'white', marginTop: '1%' }}> Payment Pending </Text>
                
            </View>
            </LinearGradient>

            <View style={{width:"100%",flexDirection:'row',borderWidth:1,borderTopWidth:2,borderBottomWidth:2,elevation:1,padding:14,borderBottomColor:'white',borderTopColor:'white',backgroundColor:"white",marginTop:12,padding:20,}}>
                <Text style={{fontSize:16,color:'black'}}>Ref ID : </Text>
                <Text style={{fontSize:16,color:'grey'}}> 8d8d7df8e932h3bh</Text>
            </View>
            <View style={{width:"100%",flexDirection:'row',borderWidth:1,borderTopWidth:2,borderBottomWidth:2,elevation:1,padding:14,borderBottomColor:'white',borderTopColor:'white',backgroundColor:"white",marginTop:12,padding:20,}}>
                <Text style={{fontSize:16,color:'black'}}>we are currently processing your Bill payment, Please wait while we get status of your Bill Payment SucessFully.   </Text>
                {/* <Text style={{fontSize:16,color:'grey'}}> 8d8d7df8e932h3bh</Text> */}
            </View>

            <View style={{flex:2,width:"100%",flexDirection:'row',borderWidth:1,borderTopWidth:2,borderBottomWidth:2,elevation:1,padding:14,borderBottomColor:'white',borderTopColor:'white',backgroundColor:"white",position: 'absolute',bottom: 1,justifyContent:'center'}}>
                <Text style={{marginTop:3,fontSize:16,color:'grey'}}>Powered By </Text>
            <Image source={require('../../../../assests/icons/bbps.png')} style={{ width: 35, height: 30, marginLeft:'2%' }} />
          
            </View>
                
        </View>
    )
}

export default PaymentPending

const styles = StyleSheet.create({
   
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        width: '100%',
        height: '100%',
    },

})  
  