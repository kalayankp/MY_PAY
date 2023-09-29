
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const FlightBook = () => {

  const [hotel, setHotel] = useState('')
  const [selectedDate, setSelectedDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [checkout, setCheckout] = useState();
  const [isCheckoutin, setCheckoutin] = useState(false);
  const Proced = () => { };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  const showDatePickers = () => {
    setCheckoutin(true);
  };
  const hideDatePickers = () => {
    setCheckoutin(false);
  };
  const handleConfirms = (date) => {
    setCheckout(date);
    hideDatePicker();
  };

  return (
    <View style={{ margin: 20, justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', marginTop: 70, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 25, color: "black" }}>FLIGHT BOOKING  </Text>
        <Image source={require('../../assests/icons/images/take-off.png')} style={{ width: 42, height: 28, }} />
      </View>
      <View style={{ borderWidth: 1, marginTop: 50 }}>
        <TextInput
          style={{ padding: 10, paddingLeft: 22, fontSize: 18 }}
          placeholder="FROM "
          value={hotel}
          onChangeText={setHotel}
        />
      </View>
      <Image />
      <View style={{ borderWidth: 1, marginTop: 20 }}>
        <TextInput
          style={{ padding: 10, paddingLeft: 22, fontSize: 18 }}
          placeholder="TO"
          value={hotel}
          onChangeText={setHotel}
        />
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <DateTimePickerModal
        isVisible={isCheckoutin}
        mode="date"
        onConfirm={handleConfirms}
        onCancel={hideDatePickers}
      />


      <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center', marginLeft: 12 }}>
        <View style={{ borderColor: 'black', borderWidth: 1, borderTopWidth: 1, width: '48%', margin: 10, marginLeft: -5 }}>
           <Text style={{ marginTop: -11, backgroundColor: 'white', width: 75, marginLeft: 25 }}> Depart On</Text>
          <TouchableOpacity onPress={showDatePicker}  >
            <Text style={{ textAlign: 'center', justifyContent: 'center', marginTop: 2, padding: 6, fontSize: 15, color: 'black', }}>{`${selectedDate ? moment(selectedDate).format("DD / MM / YYYY") : "DD / MM / YYYY"}`}</Text>
          </TouchableOpacity>
        </View>
  
        <View style={{ borderColor: 'black', borderWidth: 1, borderTopWidth: 1, width: '48%', margin: 10, marginLeft: 12 }}>
          <Text style={{ marginTop: -11, backgroundColor: 'white', width: 75, marginLeft: 15 }}> Return On</Text>
          <TouchableOpacity onPress={showDatePicker}  >
            <Text style={{ textAlign: 'center', justifyContent: 'center', marginTop: 2, padding: 6, fontSize: 19, color: 'black', }}>{`${selectedDate ? moment(selectedDate).format("DD / MM / YYYY") : "Return On"}`}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center', marginLeft: 12 }}>
        <View style={{ borderColor: 'black', borderWidth: 1, borderTopWidth: 1, width: '48%', margin: 10, marginLeft: -5 }}>
          <Text style={{ marginTop: -11, backgroundColor: 'white', width: 75, marginLeft: 25 }}> Travellers</Text>
          <TextInput placeholder='1' style={{ paddingLeft: 15, }} />
        </View>

        <View style={{ borderColor: 'black', borderWidth: 1, borderTopWidth: 1, width: '48%', margin: 10, marginLeft: 12 }}>
          <Text style={{ marginTop: -11, backgroundColor: 'white', width: 45, marginLeft: 15 }}> Class</Text>
          <TextInput placeholder='Economy' style={{ paddingLeft: 15, }} />
        </View>
      </View>

      <TouchableOpacity style={{ backgroundColor: "#3f46c8", height: 45, width: 300, borderRadius: 8, marginTop: 50, justifyContent: "center", margin: 20 }} onPress={Proced} >
        <Text style={{ color: '#ffffff', textAlign: "center", fontSize: 20 }}>Search Flight </Text>
      </TouchableOpacity>
    </View>
  )
}

export default FlightBook

const styles = StyleSheet.create({
  input: {

    width: '30%',
    height: 10,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    padding: 10
  },
});

