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
//192.168.1.5:7000/bills/getMobilePostpaidOperators
const PostpaidMobile = ({ navigation, route }) => {
  const { macId, ipId } = route.params;
 
  // console.log('=imei============>', JSON.stringify(macId))
  // console.log('=============>', JSON.stringify(ipId))
let macIDis=macId
let ipIDis=ipId 
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
  
  console.log('mobileNo is-----',mobileNo.length);

  // GET API for fetching all Operators

  const Data = () => {

    fetch('http://192.168.1.5:7000/bills/getMobilePostpaidOperators')
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
    fetch("http://192.168.1.5:7000/bills/fetchBills", {
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
          // setBiller_name(incomingData.accountHolderName)
          // setBillerAccountNo(incomingData.billNumber)
          // setBillerTotalAmount(incomingData.amount)
          // setBillDate(incomingData.billDate)
          // setDueDate(incomingData.dueDate)
          // setRefId(incomingData.refId)
          setLoading(false)

          navigation.navigate("UserBill", {
            'ipID': ipIDis,
            'macid': macIDis,
            'mobileNo': mobileNo,
            'billerId':datas, 
            'biller_name': incomingData.accountHolderName,
            'billDate':incomingData.billDate,
            'dueDate':incomingData.dueDate,
            'billerTotalAmount':incomingData.amount,
            'billerAccountNo':incomingData.billNumber,
            'refId':incomingData.refId,
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

  // const modeldatafetching = () => {

  //   setTimeout(() => {

  //     if (mobileNo.length === 10) {
  //       setLoading(true)
  //       setModalVisible(true)
      
  //       setLoading(false)
  //     } else {
  //       setModalVisible(false)
  //       alert(errors)
  //     } 
  //   }, 0)

  // }
  console.log('ipadd', ipId);
  console.log('macid', macId);
  console.log('biller_name si====', biller_name);


  return (
    <SafeAreaView>
      {/* header */}

      <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
        <View style={{ flexDirection: 'row', padding: 15, }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 25, height: 30, }}
              source={require('../../../assests/images/leftArrow.png')}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '20%' }}>POSTPAID  BILLS</ Text>
        </View>

      </View>

      {/* mobile No */}
      {/* <View style={{ padding: 20,}}> */}

      <View style={{ marginTop: '4%', padding: 20, }}>
        <Text style={{ fontSize: 20, padding: 8, fontWeight: '400', color: 'black', marginTop: '1%', marginBottom: -13 }}> Enter Mobile No </ Text>
        <View style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 1, borderColor: 'black' }}>
          <Text style={{ fontSize: 26, marginTop: 14, color: 'black' }}>{countryCode}</Text>
          <TextInput placeholder='0000000000' onChangeText={(text) => {setMobileNo(text) }} keyboardType="numeric" maxLength={10} style={{ fontSize: 24, borderWidth: 0, width: 210, marginLeft: 4, marginTop: 5, color: 'black' }} />
        </View>
      </View>
      <View style={{}}>
        <View style={{}}>
          {operatorValue === 'Select Operator'
            ? <Text style={{ fontSize: 20, padding: 8, fontWeight: 'bold', color: 'black', marginTop: 15, width: '100%', borderBottomWidth: 1 }}> {operatorValue}</ Text>
            : <View>
              <Text style={{ fontSize: 20, padding: 8, fontWeight: 'bold', color: 'blue', marginTop: 15, width: '100%', borderBottomWidth: 1 }}> <Text style={{ color: 'black' }}>Selected Operator:  </Text>{operatorValue}</ Text></View>
          }
        </View>

        <View style={{ height: '58%', marginTop: '3%' }}>
          {/* {loading ?
            (<ActivityIndicator size="large" style={{ marginTop: 20 }} />) : ( */}
          <FlatList
            data={postpaidValue}
            renderItem={({ item }) => (
              <View>
                <ScrollView>
                  <TouchableOpacity onPress={() => {
                    setOperatorValue(item.biller_alias_name)
                    setDatas(item.biller_id)
                  }} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                    <Text style={{ fontSize: 16, color: 'black', marginLeft: 8 }}> {item.biller_alias_name} / {item.biller_name}</Text>
                  </TouchableOpacity>

                </ScrollView>

              </View>

            )}
          />
          {/* )} */}
        </View>
        <View style={{ justifyContent: 'center', alignItems: "center", zIndex: 1, marginTop: '-3%', position: 'relative' }}>
          <Image
            style={{ width: 25, height: 30, }}
            source={require('../../../assests/images/bottomArrow.png')}
          />
        </View>
      </View>
   
      <View style={{ alignItems: 'center', }}>

        <TouchableOpacity
          onPress={() => {postUserData()}
          }
          style={{ width: '95%', height: 62, marginTop: '-28%',  borderRadius: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#132fba' }}>
         
          <Text style={{ fontSize: 22, color: 'white',padding: 2,textAlign:'center', }}>Processed</Text>
         
          {loading ?
            (<ActivityIndicator size="large" color='white' style={{marginLeft:12}} />) : null}
        
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}
export default PostpaidMobile


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
