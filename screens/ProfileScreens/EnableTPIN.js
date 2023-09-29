import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const EnableTPIN = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginTop: -150, textAlign: 'center', fontWeight: 'bold', fontSize: 28 }}>ENABLE TPIN</Text>

      {/* <View style={{marginTop:20,borderWidth:2,borderColor:'grey',borderRadius:20,margin:22,justifyContent:'center'}}>
          <TextInput placeholder='ENTER OLD TPIN' onChangeText={(e)=>{setData(e)}} keyboardType="numeric" maxLength={16} style={{fontSize:20,borderWidth: 0,width:210,textAlign:'center'}}/>
        </View> */}

      <View style={{ marginTop: 110, borderWidth: 2, borderColor: 'grey', borderRadius: 20, margin: 22, justifyContent: 'center' }}>
        <TextInput placeholder='ENTER NEW TPIN' onChangeText={(e) => { setData(e) }} keyboardType="numeric" maxLength={16} style={{ fontSize: 20, borderWidth: 0, width: 310, textAlign: 'center' }} />
      </View>

      <View style={{ marginTop: 10, borderWidth: 2, borderColor: 'grey', borderRadius: 20, margin: 22, justifyContent: 'center' }}>
        <TextInput placeholder='RE-Enter NEW TPIN' onChangeText={(e) => { setData(e) }} keyboardType="numeric" maxLength={16} style={{ fontSize: 20, borderWidth: 0, width: 310, textAlign: 'center' }} />
      </View>

      <View style={{ marginTop: 10, borderWidth: 2, borderColor: 'grey', borderRadius: 20, margin: 22, justifyContent: 'center' }}>
        <TextInput placeholder='CHOOSE SECURITY QUESTION' onChangeText={(e) => { setData(e) }} keyboardType="numeric" maxLength={16} style={{ fontSize: 20, borderWidth: 0, width: 310, textAlign: 'center' }} />
      </View>
      <View style={{ marginTop: 10, borderWidth: 2, borderColor: 'grey', borderRadius: 20, margin: 22, justifyContent: 'center' }}>
        <TextInput placeholder='ANSWER' onChangeText={(e) => { setData(e) }} keyboardType="numeric" maxLength={16} style={{ fontSize: 20, borderWidth: 0, width: 310, textAlign: 'center' }} />
      </View>



      <View style={{ justifyContent: 'center', alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetTpin')}
          style={styles.button}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EnableTPIN


const styles = StyleSheet.create({

  button: {
    borderWidth: 2,
    borderRadius: 22,
    borderColor: '#3f46c8',
    height: 58,
    width: 282,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 70,
    backgroundColor: '#3f46c8'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    color: 'lightgrey',
    fontWeight: '12',
  }
});