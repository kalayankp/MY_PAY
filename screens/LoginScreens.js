// import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Pressable,SafeAreaView } from 'react-native'
// import React,{useState} from 'react'
// import LinearGradient from 'react-native-linear-gradient';

// const LoginScreens = () => {
//   const [mobileNo,setmobileNo] = useState('')
//   const [password,setPassword] = useState('')
// const [data,setData]=useState([])
//   const onSubmit=()=>{
//     const datas= mobileNo
   
//     setData(datas)
    
//   }
//   console.log(data)
//   return (
//     <SafeAreaView >
//       <View>
//       <LinearGradient
//         colors={['#03f0ff', '#F9F6EE']}
//         start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
//         style={styles.linearGradient}>
//         <Image
//           style={styles.logo}
//           source={require('../assests/icons/ringpeIcon.png')}
//         />
//         <Text style={{ fontWeight: 'bold', fontSize: 32, alignSelf: 'center', color: '#3f46c8', fontFamily: "Raleway", fontStyle: "", }}>Login</Text>
//         <Text style={{ padding: 25, fontSize: 22, marginTop: 42 }}>Enter Email Id / Phone No</Text>
//         <TextInput placeholder='asdfg@xxxxx.com' 
//          onChangeText={newText => setmobileNo(newText)}
//         style={{ borderWidth: 1, paddingLeft:32,borderRadius: 28, marginTop: -12, margin: 19, padding: 15, fontSize: 22 }} />

//         <Text style={{ padding: 25, fontSize: 22, marginTop: -12, }}>Enter Password</Text>
//         <TextInput
//          onChangeText={newText => setmobileNo(newText)}
//         placeholder='**************' style={{ borderWidth: 1, paddingLeft:32,borderRadius: 28, marginTop: -12, margin: 19, padding: 15, fontSize: 22 }} />

//         <TouchableOpacity  onPress={onSubmit}
//           style={styles.button}>
//           <Text style={styles.buttonText}> Login</Text>
//         </TouchableOpacity>
//         <View style={{ flexDirection: 'row', margin: -10, marginLeft: 190 }}>
//           <Text>Don't have Account</Text>
//           <TouchableOpacity >
//             <Text style={{ paddingLeft: 10, color: 'blue' }}>SignUp</Text>
//           </TouchableOpacity>
//         </View>
//       </LinearGradient>
//       </View>
//     </SafeAreaView>
//   )
// }

// export default LoginScreens

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   logo: {
//     marginTop: 22,
//     width: 140,
//     height: 120,
//     marginLeft: -2,
//   },
//   linearGradient: {
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 5,
//     width: '100%',
//     height: '100%',
//   },
//   button: {
//     borderWidth: 2,
//     borderRadius: 22,
//     borderColor: 'white',
//     height: 58,
//     fontFamily: 'Gill Sans',
//     textAlign: 'center',
//     justifyContent: 'center',
//     margin: 20,
//     backgroundColor: '#3f46c8'
//   },
//   buttonText: {
//     textAlign: 'center',
//     fontSize: 25,
//     color: 'lightgrey',
//     fontWeight: '12',
//   }
// });


import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

import Loader from '../components/Loader';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [tokens, setToken] = useState('');

  const passwordInputRef = createRef();

 // ----------- POST API CALL -------------------
 const dataPosts = () => {
  fetch('http://192.168.1.5:7000/users/login', {
    method: 'POST',
    body: JSON.stringify({

    "mobile": userEmail,
    "password":userPassword
      }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if(data.status === true){
        handleSubmitPress()
        navigation.navigate('Homes')
      
      }else{
        console.log('error')
        alert(data.message)
      }
})
     
    .catch((err) => {
      alert(err.message)
      console.log(err.message);
    });
}
//
  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail && !userPassword) {
      alert('Please fill email and Password');
      return;
    }

    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
  
    setLoading(false);
   
    let dataToSend = {email: userEmail, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    } 
    formBody = formBody.join('&');
   
    // fetch('http://localhost:3000/api/user/login', {
    //   method: 'POST',
    //   body: formBody,
    //   headers: {
    //     //Header Defination
    //     'Content-Type':
    //     'application/x-www-form-urlencoded;charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.log(responseJson);
        // If server response message same as Data Matched
      //   if (responseJson.status === 'success') {
      //     AsyncStorage.setItem('user_id', responseJson.data.email);
      //     console.log(responseJson.data.email);
      //     navigation.replace('DrawerNavigationRoutes');
      //   } else {
      //     setErrortext(responseJson.msg);
      //     console.log('Please check your email id or password');
      //   }
      // })
      // .catch((error) => {
      //   //Hide Loader
      //   setLoading(false);
      //   console.error(error);
      // });
  };

  return (
    <View style={styles.mainBody}>
      <Image
          style={styles.logo}
          source={require('../assests/icons/ringpeIcons.png')}
        />
      <Loader loading={loading} />
      <View
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          marginTop:-152,
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Mobile No" //dummy@abc.com
                placeholderTextColor="black"
                autoCapitalize="none"
                keyboardType="numberic"
                returnKeyType="next"
                maxLength={10}
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="black"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}


{/* //         <Text style={{ padding: 25, fontSize: 22, marginTop: 42 }}>Enter Email Id / Phone No</Text>
//         <TextInput placeholder='asdfg@xxxxx.com' 
//          onChangeText={newText => setmobileNo(newText)}
//         style={{ borderWidth: 1, paddingLeft:32,borderRadius: 28, marginTop: -12, margin: 19, padding: 15, fontSize: 22 }} />

//         <Text style={{ padding: 25, fontSize: 22, marginTop: -12, }}>Enter Password</Text>
//         <TextInput
//          onChangeText={newText => setmobileNo(newText)}
//         placeholder='**************' style={{ borderWidth: 1, paddingLeft:32,borderRadius: 28, marginTop: -12, margin: 19, padding: 15, fontSize: 22 }} /> */}

<TouchableOpacity  
          activeOpacity={0.5}
          onPress={dataPosts}
          style={styles.button}>
          <Text style={styles.buttonText}> Login</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', margin: -10, marginLeft: 70 }}>
          <Text style={{fontSize:22}}>Don't have Account</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MobileNoScreen')}>
            <Text style={{ paddingLeft: 10, color: 'blue',fontSize:22 }}>SignUp</Text>
          </TouchableOpacity>
        </View>
            {/* <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              New Here ? Register
            </Text> */}
          </KeyboardAvoidingView>
        </View>
      </View>
      
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 40,
    
    marginLeft: 35,
    marginRight: 35,


  },
  linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        width: '100%',
        height: '100%',
      },
      logo: {
            marginTop: -22,
            width: 240,
            height: 220,
            marginLeft: -2,
          },
          button: {
                borderWidth: 5,
                borderRadius: 22,
                borderColor: '#3f46c8',
                height: 58,
                fontFamily: 'Gill Sans',
                textAlign: 'center',
                justifyContent: 'center',
                marginTop: 90,
                margin:20,
                backgroundColor: '#3f46c8'
              },
              buttonText: {
                textAlign: 'center',
                fontSize: 25,
                color: 'lightgrey',
                fontWeight: '12',
              },
               buttonStyle: {
                backgroundColor: '#7DE24E',
                borderWidth: 3,
                color: '#FFFFFF',
                borderColor: '#7DE24E',
                height: 40,
                alignItems: 'center',
                borderRadius: 30,
                marginLeft: 35,
                marginRight: 35,
                marginTop: 20,
                marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    padding:10,
    paddingLeft: 35,
    paddingRight: 15,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
    height:55,
    width:'90%'
  },
  registerTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});