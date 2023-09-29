import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Modal, TouchableOpacity, TextInput, Image } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import RNOtpVerify from 'react-native-otp-verify';
import LinearGradient from 'react-native-linear-gradient';
import { REACT_APP_BASE_URL } from "@env"
const CELL_COUNT = 4;

const OtpScreen = ({ navigation, route }) => {
  const [value, setValue] = useState();

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [modalVisible, setModalVisible] = useState(false);
  // console.log(value);
  // auto detect otp code
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);
  // const [tokenId, setTokenId] = useState('');
  // const [statuss,setStatuss]  = useState('')
  // const [errOtp,seterrOtp]  = useState('')
  const [panValue, setPanValue] = useState('')

  //-------Getting  ID-------------------------

  const { itemId } = route.params;

  console.log('=============>', JSON.stringify(itemId))

  // useEffect(() => {
  //   if (route.params?.itemId) {
  //     setTokenId(itemId)
  //     console.log('---UPDATED>>>')
  //     // For example, send the post to the server
  //   }
  // }, [route.params?.post]);
  // const callLocalData = async () => {
  //   try {
  // //  await AsyncStorage.getItem('tokens');
  //    // setTokenId(values)
  //    // console.log('---------------',values);

  //   } catch (error) {
  //     console.log('Error....');
  //     // Error retrieving data
  //   }
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
  const resendOTP = () => {
    setMinutes(0);
    setSeconds(30);
  };

  const otpHandler = (message) => {
    const otp = /(\d{4})/g.exec(message)[1];
    setValue({ otp });

    RNOtpVerify.removeListener();
    Keyboard.dismiss();
  }
  console.log(value);

  // -----------------OTP VERIFY POST API CALL ----------------------------

  const OtpData = () => {
    fetch(`${REACT_APP_BASE_URL}/registerValidateOTP`, {
      method: 'POST',
      body: JSON.stringify({
        "id": itemId,
        "OTP": value
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {

        if (data.status == true) {
          setModalVisible(true)
        } else {
          alert(data.message)
        }

        //  
      })
      .catch((err) => {
        alert(err.message)
        //  alert('Please Enter Valid OTP No')
        console.log(err.message);

      })
  };
  const OtpValidate = () => {
    OtpData()
  }

  // -----------------PAN CARD API CALL ----------------------------
  let newId = itemId

  const PanCardData = () => {
    fetch(`${REACT_APP_BASE_URL}/registerPAN`, {
      method: 'POST',
      body: JSON.stringify({
        "id": newId,
        "PAN": panValue
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('user Id is---> ', data.data.id)
        console.log('pan status is ', data.status)
        let newToks = data.data.id
        let nToks = newToks.toString();
        if (data.status == true) {
          setModalVisible(!modalVisible)
          navigation.navigate('RegistrationForm', {
            'itemIde': nToks
          })
        }
        else {
          alert(data.message)
        }
      })
      .catch((err) => {
        console.log("----", err.message);
      });
  };
  const register = () => {
    PanCardData()
    console.log(panValue);
  }

  return (
    <View>
      <LinearGradient
        colors={['white', 'white',]}
        start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.root}>
          <Image style={styles.logo} source={require('../assests/icons/ringpeIcons.png')} />

          <Text style={styles.title}>OTP</Text>

          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (

              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={resendOTP} style={{ width: 120, margin: 18 }}>
              <Text style={{ fontSize: 20 }}>Resend OTP </Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 20, marginTop: 18, color: '#DD7D5D', marginLeft: -12, }}>0{minutes}:{seconds} </Text>

          </View>

          {/* <TouchableOpacity onPress={() => { navigation.navigate('') }}
        style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}> 
          Verify OTP
        </Text>
      </TouchableOpacity> */}

          {/* <TouchableOpacity style={{ marginTop: '150%', marginLeft: 280 }} onPress={() => { navigation.navigate('Login') }}>
        <Text style={{ color: 'grey', fontSize: 18, fontWeight: 'bold' }}>
          {value}
        </Text>
      </TouchableOpacity> */}

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Enter PAN NO</Text>
                  <TextInput placeholder='XXXXXXXX'
                    onChangeText={(panValue) => setPanValue(panValue)}
                    maxLength={10} placeholderTextColor="grey" autoCapitalize={"characters"}
                    style={{
                      fontSize: 24, margin: 29, borderWidth: 1, borderRadius: 10, width: '70%',
                      justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: 'black'
                    }} />
                  <TouchableOpacity
                    style={[styles.buttons, styles.buttonClose]}
                    onPress={register}>
                    <Text style={styles.textStyle}>Processed</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            {/* //------------------- */}

            <TouchableOpacity
              style={[styles.buttonStyle, styles.buttonOpen]}

              onPress={() => { OtpValidate() }}>

              <Text style={styles.buttonTextStyle}>
                Verify OTP
              </Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
            style={[styles.buttons, styles.buttonClose]}
            onPress={() => callLocalData()}>
            <Text style={styles.textStyle}>GEtDATA FROM LOCAL</Text>
          </TouchableOpacity> */}
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,

    marginTop: -10,
  },
  logo: {
    marginTop: 22,
    width: 140,
    height: 120,
    marginLeft: -2,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: '100%',
    height: '100%',
  },
  title: { textAlign: 'center', fontSize: 30, marginTop: 40, color: 'black' },
  codeFieldRoot: {
    marginTop: 40,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: 'black',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#3f46c8',
    borderBottomWidth: 2,
  },
  buttonStyle: {
    fontSize: 26,
    width: '120%',
    color: 'white',
    backgroundColor: '#3f46c8',
    top: '42%',
    borderColor: 'white',
    padding: 5,
    borderRadius: 22,

  },
  buttonTextStyle: {
    fontWeight: 'bold',
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
    borderRadius: 20
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,

  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 4,
    borderRadius: 29,
    padding: 35,
    width: '99%',
    height: '80%',
    marginTop: 228,
    alignItems: 'center',
    shadowColor: 'green',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
  },
  buttons: {
    borderWidth: 1,
    borderRadius: 22,
    padding: 10,
    fontSize: 25,
    elevation: 6,
    width: '100%',
    marginTop: -222,
    heigth: 122,
  },
  buttonOpen: {
    backgroundColor: '#3f46c8',

  },
  buttonClose: {
    marginTop: '40%',
    backgroundColor: '#3f46c8',
    borderRadius: 9,
    height: '13%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
    width: 122,
  },
  modalText: {
    marginTop: 45,
    textAlign: 'center',
    fontSize: 24,
    color: 'black'
  },
});

export default OtpScreen;
 