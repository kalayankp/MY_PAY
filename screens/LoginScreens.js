import React, { useState, createRef } from 'react';
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


import Loader from '../components/Loader';
import { REACT_APP_BASE_URL } from "@env";


const LoginScreen = ({ navigation }) => {
  console.log(REACT_APP_BASE_URL);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  // const [tokens, setToken] = useState('');

  const passwordInputRef = createRef();
 
  // ----------- POST API CALL -------------------
  //live server: http://13.233.224.129:7000/users/login
    
  const dataPosts = () => {
     fetch(`${REACT_APP_BASE_URL}/login`, {  
     // fetch('http://192.168.1.32:7000/users/login',{
      method: 'POST',  
      body: JSON.stringify({
        "mobile": userEmail,   
        "password": userPassword
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })  
      .then((response) => response.json())
      .then((data) => {
        if (data.status === true) {
          handleSubmitPress()
          navigation.navigate('Homes')

        } else {
          console.log('error')   
          alert(data.message)
        }
      })
   
      .catch((err) => {
        alert(err.message)
        console.log(err.message);
      });
  }

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

    let dataToSend = { email: userEmail, password: userPassword };
    let formBody = [];

    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
 
    formBody = formBody.join('&'); 
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
          marginTop: -123,
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: 'center' }}>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColor='#fff'
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Mobile No"
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
                underlineColor='#fff'
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password"
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

            <TouchableOpacity
              activeOpacity={0.4}
              onPress={dataPosts}
              style={styles.button}>
              <Text style={styles.buttonText}> Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', margin: -10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, color: 'black' }}>Don't have Account</Text>
              <TouchableOpacity onPress={() => navigation.navigate('MobileNoScreen')}>
                <Text style={{ paddingLeft: 10, color: 'blue', fontSize: 18 }}>SIGNUP</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }} onPress={() => navigation.navigate('ForgetPassword')}>
              <Text style={{ color: 'red', fontSize: 16, fontWeight: '300' }}>Forget Password</Text>
            </TouchableOpacity>

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
    marginTop: -62,
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
    margin: 20,
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
    padding: 10,
    paddingLeft: 35,
    paddingRight: 15,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
    height: 55,
    width: '90%'
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