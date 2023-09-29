import React, { useState, useEffect } from 'react'
import {
  View, ScrollView, SafeAreaView, Text, TextInput, TouchableOpacity, Pressable, StyleSheet, Image,
  FlatList, ActivityIndicator, Alert, Modal
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BottomSheet } from 'react-native-btr';

const PrepaidMobile = ({ navigation, route }) => {
  const { macId, ipId } = route.params;

  // console.log('=macid============>', JSON.stringify(macId))
  // console.log('======ip=======>', JSON.stringify(ipId))
  // // let macIDis=macId
  // let ipIDis=ipId 


  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };
  console.log('---------dvfdvfdv=====', planName, planAmount, packageDescription, validity)

  let countryCode = '+91'
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  //const [reloaded, setReloaded] = useState(false);
  const [mobileNo, setMobileNo] = useState('');
  const [operatorValue, setOperatorValue] = useState("Select Operator");
  const [postpaidValue, setPostpaidValue] = useState([]);
  const [operatorid, setOperatorid] = useState(null)
  const [circleNames, setCircleNames] = useState()
  const [circleId, setCircleId] = useState()
  const [responseData, setResponseData] = useState([])
  const [visible, setVisible] = useState(false);
  const [circle, setCircle] = useState('')
  const [planName, setPlanName] = useState()
  const [planAmount, setPlanAmount] = useState('')
  const [packageDescription, setPackageDescription] = useState('')
  const [validity, setValidity] = useState('')
  //const [devMac, setDevMac] = useState('0.0.0.0.0')
  // console.log('operator ++----', responseData);

  console.log('mobileNo is-----', circleId, operatorid,planAmount);

  // GET API for fetching all Operators

  const PrepaidOperators = () => {

    fetch('http://192.168.1.5:7000/bills/getMobilePrepaidOperators')
      .then((response) => response.json())
      .then((data) => {
        console.log('---0----', data);
        const newData = data
        setPostpaidValue(newData.data)
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message)
        console.log(err.message);
      })
  };



  // GET API for fetching all Circles
  // http://192.168.1.31:7000/bills/fetchMobilePrepaidPlan

  const OperatorsCircle = () => {
    fetch('http://192.168.1.5:7000/bills/getMobilePrepaidCircles')
      .then((response) => response.json())
      .then((data) => {
        //  console.log('---Circle----', data);
        const newCircleData = data
        // setPostpaidValue(newData.data)
        setCircleNames(newCircleData.data)
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message)
        console.log(err.message);
      })
  };

  // Post Api Plan fetching

  const fetchPlan = () => {
    fetch('http://192.168.1.5:7000/bills/fetchMobilePrepaidPlan', {
      method: 'POST',
      body: JSON.stringify({
        circleId: circleId,
        operatorId: operatorid,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log('---Circle-is---')
        const data = res[0]["status"]
        console.log('+++++++++++++=', data);
        // const navData=datas.data[0]
        // console.log("=====navData====",navData);
        if (data === true) {
          setResponseData(res[0].data.result.payload[0].circleWisePlanLists[0].plansInfo)
          setModalVisible(true)
          console.log('passed-====');
        }
        else {
          alert(res.message)
        }
        // setData(datas);
        //setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err.message);
      });
  };

  const plans = responseData;
  // console.log('ipadd', ipId);
  // console.log('macid', macId);
  // console.log('biller_name si====', biller_name);
  useEffect(() => {
    PrepaidOperators()
    OperatorsCircle()
  }, [])

  // Proceed To Pay Api
  const ProceedToPay = () => {
    fetch('http://192.168.1.5:7000/bills/mobilePrepaidReachargePayment', {
      method: 'POST',
      body: JSON.stringify({
        "mobile": mobileNo,
        "ip": ipId,
        "mac": " 0.0.0.0",
        "amount": planAmount,
        "OperatorCode": "AT",
        "CircleRefID": circleId,
         "planId":planName,
        "operatorName": operatorValue,

      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === false) {
          console.log('clickeedeeeeeeee');
          console.log('******++++++===>>>',data);
          navigation.navigate('RechargePlan', {
            mac: "0.0.0.0.0",
            ip: ipId,
            mob: mobileNo,
            operatorValue: operatorValue,
            planCost: planAmount,
            planDesc: packageDescription,
            planValidation: validity
          })
        } else {
          alert(res.message)
        }
      }).catch((err) => {
        alert(err.message);
        console.log(err.message);
      });
  }


  return (
    <View>
      {/* header */}

      <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5 }}>
        <View style={{ flexDirection: 'row', padding: 15, }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 25, height: 30, }}
              source={require('../../../assests/images/leftArrow.png')}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '28%' }}>Prepaid  Bills</ Text>
        </View>

       </View>

      {/* mobile No */}
      {/* <View style={{ padding: 20,}}> */}

      <View style={{ marginTop: '5%', padding: 20, }}>
        <Text style={{ fontSize: 20, padding: 8, fontWeight: '400', color: 'black', marginTop: '1%', marginBottom: -13 }}> Enter Mobile No </ Text>
        <View style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 1, borderColor: 'black' }}>
          <Text style={{ fontSize: 26, marginTop: 14, color: 'black' }}>{countryCode}</Text>
          <TextInput placeholder='0000000000' onChangeText={(text) => { setMobileNo(text) }} keyboardType="numeric" maxLength={10} style={{ fontSize: 24, borderWidth: 0, width: 210, marginLeft: 4, marginTop: 5, color: 'black' }} />
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

        {/*------------- Prepaid Circle item List ----------------------- */}

        <View style={{ height: '58%', marginTop: '3%' }}>
          {/* {loading ?
            (<ActivityIndicator size="large" style={{ marginTop: 20 }} />) : ( */}
          <FlatList
            data={postpaidValue}
            renderItem={({ item }) => (
              <View>
                <ScrollView>
                  <TouchableOpacity onPress={() => {
                    setOperatorValue(item.operatorName)
                    setOperatorid(item.operatorCode)
                  }} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                    <Text style={{ fontSize: 16, color: 'black', marginLeft: 8 }}> {item.operatorName}</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            )}
          />

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
          onPress={toggleBottomNavigationView}
          style={{ width: '95%', height: 62, marginTop: '-28%', borderRadius: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#132fba' }}>
          <Text style={{ fontSize: 22, color: 'white', padding: 2, textAlign: 'center', }}>Processed</Text>
          {loading ?
            (<ActivityIndicator size="large" color='white' style={{ marginLeft: 12 }} />) : null}
        </TouchableOpacity>
      </View>
      <View>

        {/* //  ------------------------- BottomSheet Drawer -------------------------- */}
        <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBottomNavigationView}
        //Toggling the visibility state on the clicking out side of the sheet
        >
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 20,
                  fontSize: 22,
                  color: 'black'
                }}>
                Select Circle
              </Text>



              <View style={{ borderTopWidth: 2, borderTopColor: '#E8E8E8' }}>

                <FlatList
                  data={circleNames}
                  renderItem={({ item }) => (
                    <View style={{ borderWidth: 1, borderColor: '#E8E8E8', backgroundColor: 'white', padding: 10, }}>
                      <TouchableOpacity onPress={() => {
                        setCircle(item.circleName)
                        setCircleId(item.circleRefID)
                        fetchPlan()
                        setVisible(false)
                      }}>
                        <Text style={{ fontSize: 20, fontWeight: '300', color: 'black', margin: 10,marginTop:-8 }}>{item.circleName}</Text></TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
        </BottomSheet>
      </View>

      {/* ---------------------------- Select Plan using Model --------------------------*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{ backgroundColor: 'white', height: '100%' }}>
          <View>
            <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 0.5, marginRight: 0.5, }}>
              <View style={{ flexDirection: 'row', padding: 15 }}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Image
                    style={{ width: 25, height: 30, }}
                    source={require('../../../assests/images/leftArrow.png')}
                  />
                </TouchableOpacity>
                <Text style={{ fontSize: 22, fontWeight: '400', justifyContent: 'center', textAlign: 'center', color: 'white', marginLeft: '20%' }}>Choose Plans</ Text>

              </View>
            </View>
            <View>
              <View style={{ borderWidth: 4, borderRadius: 20, borderColor: '#F1F1F1', backgroundColor: '#FEFEFE', width: "100%", marginTop: '5%', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: '5%', }}>
                  <View style={{ borderWidth: 1, borderColor: '#3B3B3B', width: '50%', padding: 5, borderRadius: 10, backgroundColor: '#FEFEFE' }}>
                    <Text style={{ fontSize: 16, color: "#132FBA" }}>Mobile No</Text>
                    <Text style={{ fontSize: 22, color: "#1D1D1D", borderBottomWidth: 1, padding: 5, marginTop: -1 }}> {mobileNo}</Text>
                  </View>

                  <View style={{ borderWidth: 1, borderColor: '#3B3B3B', width: '40%', padding: 10, borderRadius: 10, backgroundColor: '#FEFEFE' }}>
                    <Text style={{ fontSize: 16, color: "#132FBA", fontWeight: 'bold' }}>operator</Text>
                    <Text style={{ fontSize: 18, color: "black", marginTop: 8 }}>{operatorValue}</Text>
                  </View>
                </View>
                <View style={{ marginTop: 2, marginBottom: '10%' }}>
                  <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginLeft: '60%', borderWidth: 1, width: '30%', borderRadius: 20, backgroundColor: '#132FBA', marginTop: '5%', flexDirection: 'row', justifyContent: 'space-evenly', padding: 5, }}>
                    <Text style={{ padding: 10, textAlign: 'center', fontWeight: '400', color: 'white', fontSize: 20 }}>
                      Edit
                    </Text>
                    <Image
                      style={{ width: 25, height: 25, marginTop: 12 }}
                      source={require('../../../assests/icons/edit.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ borderTopWidth: 1, borderBottomWidth: 1, alignItems: 'center', marginTop: -21, marginBottom: 2, backgroundColor: '#132fba' }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', padding: 10 }}>NEW PLANS</Text>
              </View>
              <View>

                <FlatList
                  data={plans}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <View style={{ marginTop: '5%', width: '100%' }}>
                      <ScrollView >

                        <View style={{ borderWidth: 1, backgroundColor: '#E8E8E8', borderColor: 'white', margin: 5, borderRadius: 20 }}>
                          <View style={{ flexDirection: 'row', padding: 10, margin: 10, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 20, color: '#132fba', textAlign: 'center', fontWeight: 600 }}>{item.validity}</Text>
                            <View style={{ width: '30%', borderRadius: 20 }}>

                              <Text style={{ fontSize: 22, color: 'black', textAlign: 'center', fontWeight: 'bold' }}>{'\u20B9'} {item.price}</Text>
                            </View>
                          </View>
                          <View style={{ padding: 15, marginTop: "-5%", borderTopWidth: 2, borderTopColor: 'grey' }}>
                            <Text style={{ color: 'black', fontSize: 14 }}>{item.packageDescription}</Text>
                          </View>
                          <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => {
                              ProceedToPay()
                              setModalVisible(false)
                              setPlanName(item.planName)
                              setPlanAmount(item.price)
                              setPackageDescription(item.packageDescription)
                              setValidity(item.validity)
                            }}
                              style={{ borderWidth: 1, backgroundColor: '#132fba', width: '60%', padding: 6, margin: 12, marginTop: "-1%", borderRadius: 20 }}>
                              <Text style={{ textAlign: 'center', color: 'white', fontWeight: 600, fontSize: 18 }}>Recharge</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </ScrollView>
                    </View>
                  )}
                />
              </View>
            </View>
            {/* onPress={() => setModalVisible(!modalVisible)} */}
          </View>
        </View>
      </Modal>
    </View>
  )
}
export default PrepaidMobile


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
    marginTop: "20%",
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
    fontSize: 18,
    marginTop: "10%"
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
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 450
  },
  centeredView: {
    flex: 1,
    width: '100%',
    height: '100%'

  },
  modalViews: {
    margin: 0,
    flex: 1,
    backgroundColor: 'white',

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
