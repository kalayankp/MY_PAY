import React, { useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import WalletCard from '../../components/walletCard';
import LinearGradient from 'react-native-linear-gradient';
import DeviceInfo, { getManufacturerSync } from 'react-native-device-info';

const DashboardPage = ({ navigation, route }) => {
  const macAdd = DeviceInfo.getMacAddressSync();
  const ipAd = DeviceInfo.getIpAddressSync()
  const imei = DeviceInfo.getPhoneNumber()

  console.log('imei---', imei)

  const update = route.params?.data
  const register = () => {
    navigation.navigate('AddMoneyScreen')
  }
  const Sendpayment = () => {
    navigation.navigate('PayMoney')
  }

  console.log(route.params?.data)

  return (
    <View style={styles.container}>
      <LinearGradient colors={['white', 'white']} style={styles.linearGradient}>
        <View style={{ height: 62, width: "100%", borderBottomLeftRadius: 22, borderBottomRightRadius: 22, flexDirection: 'row', justifyContent: 'space-between', marginTop: -2 }}>

          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Image source={require('../../assests/icons/images/menuBar.png')} style={{ width: 30, height: 25, marginTop: 24 }} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../../assests/icons/ringpeIcons.png')} style={{ width: 142, height: 122, marginTop: -24, marginRight: -58, }} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity
              onPress={() => { Linking.openURL('https://gmail.com/') }}
              style={{ marginTop: 7 }}>
              <Image source={require('../../assests/icons/support.png')} style={{ width: 35, height: 42, marginTop: 10, margin: 12 }} />
            </TouchableOpacity>
            <View>
              <Text style={{ borderWidth: 1, width: 21, height: 21, textAlign: 'center', borderRadius: 20, position: 'absolute', borderColor: 'red', marginTop: 13, color: 'white', backgroundColor: 'red', zIndex: 1, position: 'absolute', fontWeight: 'bold' }}>10 </Text>

              <TouchableOpacity>
                <Image source={require('../../assests/icons/reminder.png')} style={{ width: 28, height: 32, marginTop: 20, zIndex: -1, }} />
              </TouchableOpacity>
            </View>
          </View>

        </View>
        <WalletCard datas={update} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 2 }}>
          <TouchableOpacity onPress={register} style={{ margin: 18, borderWidth: 2, borderColor: "#3f46c8", borderRadius: 22, width: 125, alignItems: 'center', height: 45, justifyContent: 'center', fontWeight: 'bold', backgroundColor: "#3f46c8", }}>
            <Text style={{ fontWeight: '4oo', fontSize: 16, color: 'white' }}> LOAD </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Sendpayment} style={{ margin: 18, borderColor: "#3f46c8", borderWidth: 2, borderRadius: 22, width: 125, alignItems: 'center', height: 45, justifyContent: 'center', fontWeight: 'bold', backgroundColor: "#3f46c8", }} >
            <Text style={{ fontWeight: '400', fontSize: 16, color: 'white' }}> SEND </Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false} style={{ backgroundColor: 'white', borderWidth: 1.1, borderRadius: 31, width: '107%', marginLeft: -14, padding: 8, borderTopColor: "#3f46c8", }}>
          {/* -------------------------------------------- */}
          <View style={{ position: 'relative', zIndex: -1 }}>
            <View style={styles.card}>
              <TouchableOpacity onPress={() => {
                navigation.navigate('PrepaidMobile', {
                  'macId': macAdd,
                  'ipId': ipAd,
                  'imei': imei
                })
              }}>
                <Image source={require('../../assests/icons/images/postpaid.png')} style={{ width: 42, height: 42 }} />
                <Text style={{ color: 'black', }}>Prepaid</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                navigation.navigate('PostpaidMobile', {
                  'macId': macAdd,
                  'ipId': ipAd,
                  'imei': imei
                })
              }}>
                <Image source={require('../../assests/icons/images/postpaid.png')} style={{ width: 42, height: 42, }} />
                <Text style={{ marginLeft: 4, color: 'black', marginLeft: -7 }}>postpaid</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.navigate('BroadBandScreen') }}>
                <Image source={require('../../assests/icons/images/broadband.png')} style={{ width: 42, height: 42 }} />
                <Text style={{ marginLeft: -11, color: 'black' }}>Broadband</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                navigation.navigate('Operator', {
                  'macId': macAdd,
                  'ipId': ipAd,
                  'imei': imei
                })
              }}>
                <Image source={require('../../assests/icons/images/Dth.png')} style={{ width: 42, height: 42 }} />
                <Text style={{ color: 'black' }}> DTH</Text>
              </TouchableOpacity>
            </View>
            {/* ---------------------------- */}
            <View style={styles.card}>
              <TouchableOpacity>
                <Image source={require('../../assests/icons/water.png')} style={{ width: 42, height: 42 }} />
                <Text style={{ color: 'black' }}> Water</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.navigate('GasBill') }}>
                <Image source={require('../../assests/icons/images/gas-tank.png')} style={{ width: 42, height: 42, marginLeft: 12 }} />
                <Text style={{ marginLeft: -1, color: 'black' }}>   Gas Bill</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../assests/icons/images/gas-pipe.png')} style={{ width: 42, height: 42 }} />
                <Text style={{ color: 'black' }}>Gas Pipe </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.navigate('ElectricityBill') }} >
                <Image source={require('../../assests/icons/images/electricity.png')} style={{ width: 42, height: 42, marginLeft: 12 }} />
                <Text style={{ marginLeft: -5, color: 'black' }}>  Electricity</Text>
              </TouchableOpacity>
            </View>
            {/* --------------------------------------------- */}
            <View style={styles.card}>
              <TouchableOpacity onPress={() => { navigation.navigate('FlightBook') }} >
                <Image source={require('../../assests/icons/images/take-off.png')} style={{ width: 42, height: 28, marginTop: 10 }} />
                <Text style={{ color: 'black' }}> Flight</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.navigate('BusBook') }}>
                <Image source={require('../../assests/icons/images/bus.png')} style={{ width: 42, height: 42, }} />
                <Text style={{ color: 'black' }}>  BUS</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.navigate('FastTagOperator') }}>
                <Image source={require('../../assests/icons/images/toll.png')} style={{ width: 42, height: 42, marginLeft: 12 }} />
                <Text style={{ color: 'black' }}> Fast Tag</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.navigate('HotelBook') }}>
                <Image source={require('../../assests/icons/images/hotel-sign.png')} style={{ width: 42, height: 42 }} />
                <Text style={{ color: 'black' }}> Hotel</Text>
              </TouchableOpacity>
            </View>
            {/* ---------------------------------------------- */}
            <View style={styles.card}>
              <TouchableOpacity>
                <Image source={require('../../assests/icons/images/bank.png')} style={{ width: 42, height: 42 }} />
                <Text style={{ color: 'black' }}> Bank</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../assests/icons/images/bank-statement.png')} style={{ width: 38, height: 42, marginLeft: 10 }} />
                <Text style={{ marginLeft: -2, color: 'black' }}>Statement</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../assests/icons/images/transfer.png')} style={{ width: 42, height: 42 }} />

                <Text style={{ color: 'black' }}>Transfer</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../assests/icons/images/bill.png')} style={{ width: 46, height: 37, marginTop: 5 }} />

                <Text style={{ color: 'black' }}>     TV</Text>
              </TouchableOpacity>
            </View>

            {/* ------------------ */}
            <View style={{ marginBottom: 100 }}>
            </View>
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
    marginTop: 15,
    width: '100%',
    position: 'relative',
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