import React,{useEffect} from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

import WallerCard from '../../components/coutdownTimer';
import LinearGradient from 'react-native-linear-gradient';
1
const DashboardPage = ({ props, navigation ,route}) => {
  const handleQuestion = () => { };
  const handlebell = () => { };
const update=route.params?.data

  const register = () => {
    navigation.navigate('AddMoneyScreen')
  }
  const Sendpayment = () => {
    navigation.navigate('PayMoney')
  }

  // useEffect(() => {
  //   fetch('http://192.168.1.5:7000/users/dashboard')
  //     .then((response) => response.json())
  //     .then((json) => console.log(json))
  // }, []);

  console.log(route.params?.data)
  return (
    <View style={styles.container}>
      <LinearGradient colors={['white', 'white']} style={styles.linearGradient}>
        <View style={{ height: 62, width: "100%", borderBottomLeftRadius: 22, borderBottomRightRadius: 22, flexDirection: 'row', justifyContent: 'space-between', marginTop: -5 }}>
          <Image source={require('../../assests/icons/Profiles.png')} style={{ width: 62, height: 62, marginLeft: 5 }} />
         <TouchableOpacity>
            <Image source={require('../../assests/icons/bell.png')} style={{ width: 42, height: 42, margin: 10 }} />
          </TouchableOpacity>
        </View>
        <WallerCard  datas={update}/>
        <View style={{ flexDirection: 'row',justifyContent:'space-between',margin:2 }}>
          <TouchableOpacity onPress={register} style={{ margin: 18, borderWidth: 2,borderColor:"#3f46c8", borderRadius: 22, width: 125, alignItems: 'center', height: 45, justifyContent: 'center', fontWeight: 'bold', backgroundColor: "#3f46c8", }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}> LOAD </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Sendpayment} style={{ margin: 18,borderColor:"#3f46c8", borderWidth: 2, borderRadius: 22, width: 125, alignItems: 'center', height: 45, justifyContent: 'center', fontWeight: 'bold', backgroundColor: "#3f46c8", }} >
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}> SEND </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ backgroundColor: 'white', borderWidth: 1.1, borderRadius: 31, width: '107%', marginLeft: -14, padding: 8,borderTopColor:"#3f46c8" }}>
          {/* -------------------------------------------- */}
          <Text style={{ marginLeft: 20,marginTop:10, fontSize: 18, fontWeight: 'bold' }}>Bill Pay </Text>
          <View style={styles.card}>
          <TouchableOpacity onPress={()=>{navigation.navigate('PrepaidMobile')}}>
              <Image source={require('../../assests/icons/images/postpaid.png')} style={{ width: 42, height: 42 }} />
              <Text>Prepaid</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('PostpaidMobile')}}>
              <Image source={require('../../assests/icons/images/postpaid.png')} style={{ width: 42, height: 42, marginLeft: 12 }} />
              <Text style={{ marginLeft: 4 }}>postpaid</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('BroadBandScreen')}}>
              <Image source={require('../../assests/icons/images/broadband.png')} style={{ width: 42, height: 42 }} />
              <Text style={{ marginLeft: -11 }}>Broadband</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Dth')}}>
              <Image source={require('../../assests/icons/images/Dth.png')} style={{ width: 42, height: 42 }} />
              <Text> DTH</Text>
            </TouchableOpacity>
          </View>
          {/* ---------------------------- */}
          <View style={styles.card}>
            <TouchableOpacity>
              <Image source={require('../../assests/icons/water.png')} style={{ width: 42, height: 42 }} />
              <Text> Water</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('GasBill')}}>
              <Image source={require('../../assests/icons/images/gas-tank.png')} style={{ width: 42, height: 42, marginLeft: 12 }} />
              <Text style={{ marginLeft: -1 }}>   Gas Bill</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assests/icons/images/gas-pipe.png')} style={{ width: 42, height: 42 }} />
              <Text>Gas Pipe </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assests/icons/images/electricity.png')} style={{ width: 42, height: 42, marginLeft: 12 }} />
              <Text style={{ marginLeft: -5 }}>  Electricity</Text>
            </TouchableOpacity>
          </View>
          {/* --------------------------------------------- */}
          <View style={styles.card}>
            <TouchableOpacity>
              <Image source={require('../../assests/icons/images/take-off.png')} style={{ width: 42, height: 42 }} />
              <Text> Flight</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assests/icons/images/bus.png')} style={{ width: 42, height: 42, marginLeft: 12 }} />
              <Text style={{}}>      BUS</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assests/icons/images/toll.png')} style={{ width: 42, height: 42 }} />
              <Text> Fast Tag</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Image source={require('../../assests/icons/images/hotel-sign.png')} style={{ width: 42, height: 42 }} />
              <Text> Hotel</Text>
            </TouchableOpacity>
          </View>
          {/* ---------------------------------------------- */}
          <View style={styles.card}>
            <TouchableOpacity>
              <Image source={require('../../assests/icons/images/bank.png')} style={{ width: 42, height: 42 }} />
              <Text> Bank</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assests/icons/images/bank-statement.png')} style={{ width: 42, height: 42, marginLeft: 12 }} />
              <Text style={{ marginLeft: -2 }}>  Statement</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assests/icons/images/transfer.png')} style={{ width: 42, height: 42 }} />

              <Text>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assests/icons/bill.png')} style={{ width: 42, height: 42 }} />

              <Text>   TV</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 100 }}>
          </View>
        </ScrollView>

      </LinearGradient>
    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EE0BE',
    margin: 2,
  },

  circle: {
    width: 180,
    height: 180,
    borderRadius: 200,
    overflow: 'hidden',
    borderEndColor: 'red',
  },

  image: {
    width: '100%',
    height: '100%',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  card: {
    borderWidth: 4,
    marginTop: 20,
    width: '100%',

    justifyContent: 'space-evenly',
    flexDirection: 'row',

    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 2.9,
    borderRadius: 20,

  }
});

export default DashboardPage;