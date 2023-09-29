import React, { useState, useEffect } from 'react'
import {
  View, ScrollView, SafeAreaView, Text, TextInput, TouchableOpacity, Pressable, StyleSheet, Image,
  
} from 'react-native';

const RechargePlan = ({ navigation, route }) => {
  const { mac, ip, mob, operatorValue, planCost, planDesc, planValidation } = route.params;
  console.log('=macid============>', JSON.stringify(mac))
  console.log('=ip============>', JSON.stringify(ip))
  console.log('=mob============>', JSON.stringify(mob))
  console.log('=operatorValue============>', JSON.stringify(operatorValue))
  console.log('=planCost============>', JSON.stringify(planCost))
  console.log('=planDesc============>', JSON.stringify(planDesc))
  console.log('=planValidation============>', JSON.stringify(planValidation))

  return (
    <View>
      <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
        <View style={{ flexDirection: 'row', padding: 15, }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 25, height: 30, }}
              source={require('../../../assests/images/leftArrow.png')}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '20%' }}>Recharge  Plans</ Text>
        </View>
      </View>

      <View style={{ borderWidth: 2, backgroundColor: '#E8E8E8', elevation: -0.2, padding: 20, margin: 10, borderRadius: 20, borderColor: 'white', marginTop: '10%' }}>
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <Text style={{ textAlign: 'left', fontSize: 20, color: "#132fba", fontWeight: "500" }}>Mobile No :</Text>
          <Text style={{ textAlign: 'center', fontSize: 20, color: 'black', marginLeft: 5 }}>{mob}</Text>
        </View>
        <Text style={{ textAlign: 'center', fontSize: 18, color: 'grey' }}>Operator: {operatorValue}</Text>
      </View>

      <View style={{ borderWidth: 2, backgroundColor: '#E8E8E8', elevation: -0.2, padding: 20, margin: 10, borderRadius: 20, borderColor: 'white', marginTop: '2%' }}>
        <Text style={{ textAlign: 'left', fontSize: 24, color: "#132fba", fontWeight: "500",borderBottomWidth:1,padding:10 }}>Plan</Text>
        <Text style={{ textAlign: 'center', fontSize: 30, color: 'black',marginTop:20 }}>{'\u20B9'}{planCost}</Text>
        <Text style={{ marginTop: '5%', color: 'black', fontSize: 16 }}>{planDesc}</Text>
      </View>

      <View style={{margin:'5%',marginTop:'20%'}}>
        <TouchableOpacity
          onPress={() => { }}
          style={{  height: 62, marginTop: '28%', borderRadius: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#132fba' }}>
          <Text style={{ fontSize: 22, color: 'white', padding: 2, textAlign: 'center', }}>
            Proceed To Pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RechargePlan