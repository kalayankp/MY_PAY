import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
 
const UserBill = ({ navigation, route }) => {
  const { ipID, macid, mobileNo, billerId, biller_name, billDate, dueDate, refId, billerTotalAmount, billerAccountNo } = route.params;
  const [loading, setLoading] = useState(false);

  console.log('=imei============>', JSON.stringify(refId))
  console.log('=======ip is======>', JSON.stringify(biller_name))

  // ----------------- POST API CALL UserData Send ----------------------------

  const postUserData = () => {
    setLoading(true)
    fetch("http://192.168.1.30:7000/bills/mobilePostpaidBillPay", {
      method: 'POST',
      body: JSON.stringify({
        mobile: mobileNo,
        ip: ipID,
        mac: '0.0.0.0',
        billerId: billerId,
        refId: refId,
        amount: billerTotalAmount

      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
      
        const incomingData = data.data.result.payload
        console.log('updated---',data);
        if(data.data.status === 200) {
            navigation.navigate("PaymentSucess", {
            'mobileNo': mobileNo,
            'cust_name': data.data.name,
            'billerTotalAmount': incomingData.paidAmount,
            'billerAccountNo': incomingData.billNumber,
            'refId': incomingData.refId,
            'billerReferenceNumber': data.data.txnId,
            'payTime': incomingData.requestTimeStamp,
            'bbpsNo': incomingData.additionalParams.billerReferenceNumber,
            'time': data.data.Timestamp,
          })
        }
         else if(data.data.status === 400) {
          navigation.navigate("PaymentFailure", {
            'mobileNo': mobileNo, 
            'cust_name': data.data.name,
            'billerTotalAmount': incomingData.paidAmount,
            'billerAccountNo': incomingData.billNumber,
            'refId': incomingData.refId,
            'billerReferenceNumber': data.data.txnId,
            'payTime': incomingData.requestTimeStamp,
            'bbpsNo': incomingData.additionalParams.billerReferenceNumber,
            'time': data.data.Timestamp,
           
          })
        }
        else {
         alert(data.data.result.message)
        }
      })
      .catch((err) => {
        alert(err.message)
        console.log('---jnj===',err.data.result.message);
      })
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F9F6EE", flex: 1 }}>
      <View style={{ backgroundColor: '#132fba', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, marginLeft: 0.5, marginRight: 0.5 }}>
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
      <View >
        {/* <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>Total Amount</Text> */}
        <View style={styles.modalView}>
          <Text style={{ fontSize: 22, color: 'black', marginTop: '5%' }}>Bill Detail</Text>
          {/* biller_name, billerAccountNo, billerTotalAmount, billDate, dueDate, refId */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '8%' }}>
            <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>Total Amount</Text>
            <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>{billerTotalAmount}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
            <Text style={{ fontSize: 16, color: 'black' }}>Name</Text>
            <Text style={{ fontSize: 16, color: 'black' }}>{biller_name}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
            <Text style={{ fontSize: 16, color: 'black' }}>Mobile No</Text>
            <Text style={{ fontSize: 16, color: 'black' }}>{mobileNo}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
            <Text style={{ fontSize: 16, color: 'black' }}>Bill No</Text>
            <Text style={{ fontSize: 16, color: 'black' }}>{billerAccountNo}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
            <Text style={{ fontSize: 16, color: 'black' }}>Bill Period</Text>
            <Text style={{ fontSize: 16, color: 'black' }}>{billDate} </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
            <Text style={{ fontSize: 16, color: 'black' }}>Due Period</Text>
            <Text style={{ fontSize: 16, color: 'black' }}>{dueDate}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { postUserData() }}
          >
            <Text style={styles.textStyle}>Pay now</Text>
            {loading ?
              (<ActivityIndicator size="large" color='white' style={{ marginLeft: 12 }} />) : null}
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default UserBill

const styles = StyleSheet.create({

  modalView: {
    width: '96%',
    height: '55%',
    margin: 8,
    marginTop: '50%',
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
    padding: 1,
    margin: 24,
    elevation: 2,
    marginTop: "8%",
    backgroundColor: '#132fba',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  textStyle: {
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
    padding: 10,
    fontSize: 20
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
