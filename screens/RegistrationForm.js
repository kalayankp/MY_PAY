import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { REACT_APP_BASE_URL } from "@env";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const data = [
  { label: 'Addhar Card', value: '1' },
  { label: 'Driving Licence', value: '2' },
  { label: 'Voter Id', value: '3' },
];
 
const RadioKey = [ 
  {
    key: 'Male',
    text: 'Male',
  },
  {
    key: 'Female',
    text: 'Female',
  },
  {
    key: 'Other',
    text: 'Other',
  },
];

export default function RegistrationForm({ navigation, route }) {
  // -------Getting  ID-------------------------

  const { itemIde } = route.params;

  console.log('========regform=====>', JSON.stringify(itemIde))

  //------------------------------------------------------ 

  const [values, setValues] = useState('SELECT ID');
  const [firstName, setFirstName] = useState('')
  const [midName, setMidName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [userId, setUserId] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedValues, setSelectedValues] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // console.log(selectedDate) 

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    let datas = moment(date).format("DD/MM/YYYY")
    setSelectedDate(datas);
    hideDatePicker();
  };

  // ----------- POST API CALL -------------------

  const dataPost = () => {
    fetch(`${REACT_APP_BASE_URL}/registerForm`, {
      method: 'POST',
      body: JSON.stringify({
        "id": itemIde,
        "first_name": firstName,
        "middle_name": midName,
        "last_name": lastName,
        "gender": selectedValues,
        "dob": selectedDate,
        "id_proof_name": values,
        "id_proof_number": userId,
        "email": email
      }),
      headers: {
        'Content-Type': 'application/json',
      }, 
    }) 
      .then((response) => response.json())
      .then((data) => {
        let newTokes = data.data.id
        let nTokens = newTokes.toString();
        if (data.status == true) {
          navigation.navigate('PasswordScreen', {
            'itemToken': nTokens
          })
        } else {
          // console.log('error')
          alert(data.message)
        }
      })
      .catch((err) => {
        alert(err.message)
        console.log("---%%%%-", err.message);
      });
  }

  const onSubmit = async () => {
    setLoading(true)
    dataPost()
    setLoading(false)
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flexDirection: 'row', marginTop: 24, }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 28, height: 26, marginLeft: 32, marginTop: 12 }}
              source={require('../assests/icons/cancel.png')}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, fontFamily: 'JosefinSans-Regular', textAlign: 'center', marginTop: 8, fontWeight: 'bold', color: 'grey', marginLeft: '18%' }}> REGISTER </Text>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 18 }}>
          <View style={{ borderWidth: 1, borderRadius: 28, width: '90%', marginTop: 30, alignItems: "center" }}>
            <TextInput placeholder='First Name' maxLength={18} onChangeText={(value) => setFirstName(value)} placeholderTextColor="grey" style={{ fontSize: 16, fontFamily: 'JosefinSans-Regular', textAlign: 'center', color: 'black', fontWeight: "400", padding: 5, height: 36 }} />
          </View>

          <View style={{ borderWidth: 1, borderRadius: 28, width: '90%', margin: 10, padding: 1, marginTop: 24 }}>
            <TextInput placeholder='Middle Name' maxLength={18} onChangeText={(value) => setMidName(value)} placeholderTextColor="grey" style={{ fontSize: 16, fontFamily: 'JosefinSans-Regular', textAlign: 'center', color: 'black', fontWeight: "400", padding: 5, height: 36 }} />
          </View>

          <View style={{ borderWidth: 1, borderRadius: 28, width: '90%', margin: 10, padding: 1, marginTop: 18 }}>
            <TextInput placeholder='Last Name' maxLength={18} onChangeText={(value) => setLastName(value)} placeholderTextColor="grey" style={{ fontSize: 16, fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontWeight: "400", padding: 5, height: 36 }} />
          </View>

          <View style={{ borderWidth: 1, borderRadius: 28, width: '90%', margin: 10, padding: 1, marginTop: 18 }}>
            <TextInput placeholder='Email' maxLength={18} onChangeText={(value) => setEmail(value)} placeholderTextColor="grey" style={{ fontSize: 16, fontFamily: 'JosefinSans-Regular', textAlign: 'center', color: 'black', fontWeight: "400", padding: 5, height: 36 }} />
          </View>

          <View style={{ borderWidth: 1, borderRadius: 28, width: '90%', margin: 10, padding: 1, marginTop: 18 }}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              // textColor="black"
              // itemTextStyle={{backgroundColor:"white",textColor:"black"}}
              data={data}
              search
              maxHeight={1000}
              labelField="label"
              valueField="value"
              placeholder={values}
              searchPlaceholder="Search..."
              value={values}
              onChange={item => {
                setValues(item.label);
              }}

            />

          </View>
          <View style={{ borderWidth: 1, borderRadius: 28, width: '90%', margin: 10, padding: 1, marginTop: 18 }}>
            <TextInput placeholder='Id Number' maxLength={14} onChangeText={(textid) => setUserId(textid)} placeholderTextColor="grey" style={{ fontSize: 16, fontFamily: 'JosefinSans-Regular', textAlign: 'center', color: 'black', fontWeight: "500", height: 36, padding: 1 }} />
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ marginTop: 15, }}>
              <Text style={{ marginTop: -10, fontSize: 22, color: 'black', marginLeft: -12 }}> Gender </Text>
              <View style={styles.radioContainer}>
                {RadioKey.map((res) => {
                  return (
                    <View key={res.key} style={styles.radioView}>
                      <Text style={styles.radioText}>{res.text}</Text>
                      <Text style={styles.radioSubText}>{res.Subtext}</Text>

                      <TouchableOpacity
                        style={styles.radioCircle}
                        onPress={() => setSelectedValues(res.key)}>
                        {selectedValues === res.key && <View style={styles.selectedRb} />}
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </View>

            <View style={{ marginTop: -31, }}>
              <View>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />

                <View style={{ flexDirection: 'row', margin: -2, marginLeft: 12, marginTop: 8 }}>
                  <Text style={{ margin: 10, color: 'black', fontSize: 22, marginTop: 16 }}>DOB</Text>
                  <View style={{ borderWidth: 1, borderRadius: 28, width: '72%', padding: 1, justifyContent: 'space-evenly', margin: 12, marginTop: 12 }}>
                    <TouchableOpacity onPress={showDatePicker}  >
                      <Text style={{ textAlign: 'center', justifyContent: 'center', marginTop: 4, padding: 2, fontSize: 18, color: 'black' }}>{`${selectedDate ? selectedDate : "DD/MM/YYYY"}`}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={onSubmit}
            style={{ width: '90%', height: 46, marginTop: '10%', padding: 8, borderRadius: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3f46c8' }}>
            <Text style={{ fontSize: 22, color: 'white', fontWeight: '400' }}>PROCEED</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 12,
    height: 12,
    fontWeight: '400',
    color: 'black'
  },
  selectedTextStyle: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 12,
    color: 'black'
  },
  placeholderStyle: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
    textAlign: 'center'
  },
  radioContainer: {
    flexDirection: 'row',
    margin: 15,
    marginLeft: 20,
  },
  radioView: {
    flexDirection: 'row',
  },
  radioText: {
    marginRight: 5,
    fontSize: 16,
    color: '#605052',
    fontWeight: '500',
  },
  radioSubText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '500',
    margin: 17,
  },

  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    left: -30,
    bottom: 3,
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#000',
  },
});

