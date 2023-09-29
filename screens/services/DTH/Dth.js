import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList, ActivityIndicator, Modal, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const data = [
//   { values: 'Airtel', biller_id: '1' },
//   { values: 'BSNL', biller_id: '2' },
//   { values: 'Airtel', biller_id: '1' },
//   { values: 'BSNL', biller_id: '2' },
//   { values: 'Airtel', biller_id: '1' },
//   { values: 'BSNL', biller_id: '2' },
//   { values: 'Airtel', biller_id: '1' },
//   { values: 'BSNL', biller_id: '2' },
// ];
//192.168.1.24:7000/bills/getMobilePostpaidOperators
const Dth = ({ navigation, route }) => {
  const { macId, ipId } = route.params;

  // console.log('=imei============>', JSON.stringify(macId))
  // console.log('=============>', JSON.stringify(ipId))
  let macIDis = macId
  let ipIDis = ipId
  let countryCode = '+91'
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  //const [reloaded, setReloaded] = useState(false);
  const [mobileNo, setMobileNo] = useState('');
  const [statuss, setStatuss] = useState('');
  const [datas, setDatas] = useState(null);
  const [operatorValue, setOperatorValue] = useState("Select Operator");
  const [postpaidValue, setPostpaidValue] = useState();
  //const [devMac, setDevMac] = useState('0.0.0.0.0')
  let [biller_name, setBiller_name] = useState('');
  const [errors, setErrors] = useState()

  console.log('mobileNo is-----', mobileNo.length);

  // GET API for fetching all Operators

  const Data = () => {

    fetch('http://192.168.1.22:7000/bills/getMobilePostpaidOperators')
      .then((response) => response.json())
      .then((data) => {

        const newData = data
        setPostpaidValue(newData.data)
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message)
        console.log(err.message);
      })
  };

  useEffect(() => {
    Data()
  }, [])

  // ----------------- POST API CALL UserData Send ----------------------------

  const postUserData = () => {
    setLoading(true)
    fetch("http://192.168.1.22:7000/bills/fetchBills", {
      method: 'POST',
      body: JSON.stringify({
        mobile: mobileNo,
        ip: ipId,
        mac: 'B8-8A-60-9E-F2-B',
        billerId: datas,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        console.log('resp is ----', data.data.result.payload);
        console.log('status is ----', data.status);
        setStatuss(data.status)
        setErrors(data.message)
        if (data.status === true) {
          const incomingData = data.data.result.payload
          console.log('bill data is--', incomingData.refId);
          setLoading(false)

          navigation.navigate("UserBill", {
            'ipID': ipIDis,
            'macid': macIDis,
            'mobileNo': mobileNo,
            'billerId': datas,
            'biller_name': incomingData.accountHolderName,
            'billDate': incomingData.billDate,
            'dueDate': incomingData.dueDate,
            'billerTotalAmount': incomingData.amount,
            'billerAccountNo': incomingData.billNumber,
            'refId': incomingData.refId,
          })
        } else {
          alert(errors)
        }
      })
      .catch((err) => {
        alert(err.message)
        console.log(err.message);
      })
  };
  let places = 'DishTV'
  console.log('ipadd', ipId);
  console.log('macid', macId);
  console.log('biller_name si====', biller_name);


  return (
    <SafeAreaView>
      {/* header */}

      <View style={{ backgroundColor: '#132fba', marginLeft: 0.5, marginRight: 0.5 }}>
        <View style={{ flexDirection: 'row', padding: 15, }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 25, height: 30, }}
              source={require('../../../assests/images/leftArrow.png')}
            />
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '400', textAlign: 'center', color: 'white', marginLeft: '45%' }}>DTH</ Text>
          </View>
          </View>
      </View>
      <View style={{ padding: 20, backgroundColor: '#e5e4e2', marginTop: '0%' }}>
        <Text style={{ fontSize: 24, fontWeight: '500', color: '#232b2b' }}>DTH recharge</Text>
      </View>
      <Text style={{ fontSize: 20, padding: 8, fontWeight: '400', color: 'black', marginTop: '3%', marginBottom: -13 }}> Enter details</ Text>

      <View style={{ marginTop: "2%", height: '15%' }}>
        <View style={{ borderWidth: 1, borderColor: 'black', padding: 0, margin: '5%', borderRadius: 20, }}>
          <Text style={{ fontSize: 18, marginTop: 6, color: 'grey', marginLeft: 15 }}>Select Operator</Text>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <View>
            <Text style={{ fontSize: 20, borderWidth: 0, width: 170, marginLeft: 14, color: 'black' }} > {places}</Text></View>
            <View>
              <TouchableOpacity style={{padding:5}}>
                <Text style={{ color: 'blue', fontSize: 22, marginRight: 31,marginTop:-2 }}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={{ marginTop: "2%", height: '15%' }}>
        <View style={{ borderWidth: 1, borderColor: 'black', padding: 0, margin: '5%', borderRadius: 20, }}>
          <Text style={{ fontSize: 18, marginTop: 6, color: 'grey', marginLeft: 15 }}>Select Operator</Text>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <View>
            <Text style={{ fontSize: 20, borderWidth: 0, width: 170, marginLeft: 14, color: 'black' }} > {places}</Text></View>
            <View>
              <TouchableOpacity style={{padding:5}}>
                <Text style={{ color: 'blue', fontSize: 22, marginRight: 31,marginTop:-2 }}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={{ alignItems: 'center', marginTop: '50%' }}>

        <TouchableOpacity
          onPress={() => { postUserData() }
          }
          style={{ width: '80%', height: 62, marginTop: '-28%', borderRadius: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#132fba' }}>

          <Text style={{ fontSize: 22, color: 'white', padding: 2, textAlign: 'center', }}>Processed</Text>

          {loading ?
            (<ActivityIndicator size="large" color='white' style={{ marginLeft: 12 }} />) : null}

        </TouchableOpacity>
      </View>
      <View style={{ padding: 20, backgroundColor: '#e5e4e2', marginTop: '0%', height: '1%' }}>
      </View>
    </SafeAreaView>
  )
}
export default Dth


const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 60,
    color: 'black',
    fontWeight: 'bold'
  },

  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  placeholderStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  },
  modalView: {
    margin: 8,
    marginTop: '65%',
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'white',
    borderBottomWidth: 1.5,
    borderLeftWidth: 1,
    borderRightWidth: 1.5,
    borderTopWidth: 1,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 9,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    margin: 24,
    elevation: 2,
    marginTop: "10%",
  },
  buttonOpen: {
    backgroundColor: '#132fba',
  },
  buttonClose: {
    backgroundColor: '#132fba',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontSize: 18
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  indicator: {
    padding: 12,
    backgroundColor: '#555',
    borderRadius: 12,
    zIndex: -1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: '20%',
    marginTop: -220,
  },
});
