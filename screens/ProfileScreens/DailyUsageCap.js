import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider';

const DailyUsageCap = ({ navigation }) => {
  const [sliderValue, setSliderValue] = useState(15);
  return (
    <SafeAreaView style={{ flex: 1, margin: 22 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{ width: 28, height: 26, marginLeft: 10, marginTop: 12 }}
          source={require('../../assests/icons/cancel.png')}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 112, textAlign: 'center' }}>SET LIMIT</Text>
      <View style={{ marginTop: 112 }}>

        <Slider
          maximumValue={20000}
          minimumValue={500}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green', }}>0</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', }}>10000</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green', }}>Limit is  {sliderValue}</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: '25%' }}>
        <TouchableOpacity onPress={() => { navigation.navigate('') }} style={{ borderWidth: 1, borderRadius: 24, width: '75%', height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3f46c8', marginTop: 42, marginBottom: 28, fontSize: 18 }}>
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: 800, fontSize: 20 }}>ENABLE Daily CAP</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

    backgroundColor: '#ecf0f1',
  },
});

export default DailyUsageCap