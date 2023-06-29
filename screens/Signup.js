
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';


// const RegisterPage = ({ navigation: { goBack },navigation
//  }) => {
//   const handleLoginPress = () => {
//     navigation.navigate('Home')

//   };
//   const [emailid, setEmailId] = useState('');
//   const [error, setError] = useState(null);

//   const [Enterpassword, setEnterPassword] = useState('');
//   const [error2, setError2] = useState(null);



//   const [fulName, setFullName] = useState("");
//   const [address, setAddress] = useState("");
//   const [aadharno, setAaadharno] = useState("");
//   const [bankAccount, setBankAccount] = useState("");
//   const [ifsc, setIfdc] = useState("");
//   const onSubmit = async () => {
//     goBack()
//   }

//   // const handleRegister = async () => {



//   //   fetch('http://192.168.0.105:3000/register', {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify({
//   //       mobile: Mobilenumber,

//   //       enterpassword:Enterpassword,


//   //       firstName:firstName,
//   //       middleName:middleName,
//   //       lastName:lastName,

//   //     }),
//   //   })
//   //     .then((response) => response.json())
//   //     .then ((data)=>{
//   //       console.log(data)
//   //       if(data.status==true){
//   //         alert("Registeration is successfull !")
//   //         navigation.navigate('Home');
//   //       }
//   //       else{
//   //         alert(" Invalid Credentials !!!")
//   //       }
//   //     })
//   //     .catch(error => console.error(error));
//   // };


//   const validateMobilenumber = (Email) => {

//     const MobilenumberRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/

//     return MobilenumberRegex.test(Email);

//   };
//   // const validater = (FullName) => {

//   //   const MobilenumberRegex = /^(?=.*[a-z])(?=.*[A-Z])$/

//   //   return MobilenumberRegex.test(FullName);

//   // };

//   const Validatepassword = (Enterpassword) => {
//     const EnterpasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
//     return EnterpasswordRegex.test(Enterpassword);
//   };

//   const handleSubmit = () => {
//     if (Enterpassword !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     } else {
//       alert('Password matched')
//     }
//   };
// const hanldleAccount
//   return (
//     <SafeAreaView>
//     <View style={styles.container}>

//       <Text style={{ color: 'black', fontSize: 25, alignItems: 'center', justifyContent: 'center', margin: 10,marginTop: }}>Registeration</Text>

//       <TextInput
//         style={(styles.input)}
//         placeholder="ajay@gmail.com"

//         onChangeText={(text) => {

//           setEmailId(text);

//           if (!validateMobilenumber(text)) {

//             setError('Please Enter Valid Phone No');

//           } else {

//             setError(null);

//           }

//         }}

//       />
//       {error && <Text style={{ color: 'red' }}>{error}</Text>}

//       <TextInput
//         style={styles.input}
//         placeholder="Gender"
//         onChangeText={(text) => {

//           setEnterPassword(text);
//           if (!Validatepassword(text)) {
//             setError2('Invalid gender ');
//           } else {
//             setError2(null);
//           }
//         }}
//       />
//       {error2 && <Text style={{ color: 'red' }}>{error2}</Text>}

//       <TextInput
//         style={styles.input}
//         placeholder="Enter Full name"
//         secureTextEntry
//         onChangeText={setFirstName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter DOB"

//         onChangeText={setMiddleName}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Enter Address"

//         onChangeText={setLastName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Bank Acc No"
//         secureTextEntry
//         keyboardType="numeric"
//         onChangeText={setLastName}
//       />
//        <TextInput
//         style={styles.input}
//         placeholder="ReEnter Bank Acc No"
//         keyboardType="numeric"
//         onChangeText={setLastName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter IFSC CODE"
//         onChangeText={setLastName}
//       />
//       <TouchableOpacity style={styles.button} onPress={onSubmit}>
//         <Text style={styles.buttonText}>Register</Text>
//       </TouchableOpacity>


//       <Text style={{ color: 'black', marginLeft: 15, alignItems: 'center', fontSize: 16 }}><TouchableOpacity ></TouchableOpacity>  <Text style={{ color: 'blue' }}></Text></Text>


//       <Text style={styles.signUpText}>
//         Already have an account ? {''}
//         <TouchableOpacity onPress={handleLoginPress}>
//           <Text style={{
//             fontWeight: 'bold',
//             color: '#DD7D5D',
//             fontSize: 22,
//             marginTop: -26,
//           }}>Login</Text>
//         </TouchableOpacity>
//       </Text>

//     </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#EFEAE3',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   input: {
//     width: '88%',
//     height: 54,
//     marginVertical: 10,
//     paddingHorizontal: 40,
//     borderWidth: 2,
//     borderColor: 'gray',
//     borderRadius: 50,
//     fontSize:19,

//   },
//   button: {
//     width: '50%',
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#DD7D5D',
//     justifyContent: 'center',
//     alignItems: 'center',
//     top: 1,
//     margin: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     alignContent: 'center',
//     fontSize: 18,
//   },
//   signUpText: {
//     color: 'black',
//     fontSize: 16,

//   },

// });

// export default RegisterPage;
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import RadioButton from '../components/radioButton';
import DatePick from '../components/datePick';
import LinearGradient from 'react-native-linear-gradient';
const SignupSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('PLease Enter Valid FirstlName'),
  lname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('PLease Enter Valid LastName'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please Enter a valid Email'),

  address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('PLease Enter Valid address'),
  aadharNo: Yup.string()
    .min(8, 'Too Short!')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .required('PLease Enter Valid Addhar No'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(18, 'Too Long!')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .required('Please Enter Valid password'),
  reEnterpassword: Yup.string()
    .min(2, 'Too Short!')
    .max(18, 'Too Long!')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .oneOf([Yup.ref('password')], 'your password does not match')
    .required('Please Enter Valid password'),
  // ifscCode: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(8, 'Too Long!')
  //   .required('PLease Enter Valid ifscCode as per your Bank PassBook '),
});

const RegisterPage = ({navigation}) => {
const [loading,setLoading] = useState(false)
  const onSubmit = async () => {
    setLoading(true)
    navigation.navigate('WelcomeScreen')
  }
  return (

    <View style={styles.container}>
      
      <Text style={styles.header}>Registeration Form</Text>
      <ScrollView>
        <Formik
          initialValues={{
            fname: '',
            mname: '',
            lname: '',
            email: '',
            address: '',
            aadharNo: '',
            password: '',
            reENterAccount: '',
            // ifscCode: '',
          }}
          validationSchema={SignupSchema}
        >
          {({ values, handleChange, setFieldTouched, isValid, errors, touched, handleSubmit }) => (

            <View>
              <Text style={styles.title}>First Name *</Text>
              <TextInput
                style={styles.input}
                placeholder='Abhisek'
                value={values.fname}
                autoCapitalize={true}
                onChangeText={handleChange('fname')}
              />
              {errors.fname && (
                <Text style={styles.errorText}> {errors.fname}</Text>
              )}
              <Text style={styles.title}>Middle Name </Text>
              <TextInput
                style={styles.input}
                placeholder='Kumar'
                value={values.mname}
                autoCapitalize={true}
                onChangeText={handleChange('mname')}
              />
              {errors.mname && (
                <Text style={styles.errorText}> {errors.mname}</Text>
              )}
              <Text style={styles.title}>Last Name *</Text>
              <TextInput
                style={styles.input}
                placeholder='Sinha'
                value={values.lname}
                autoCapitalize={true}
                onChangeText={handleChange('lname')}
              />
              {errors.lname && (
                <Text style={styles.errorText}> {errors.lname}</Text>
              )}
              <Text style={styles.title}>Email ID *</Text>
              <TextInput
                style={styles.input}
                placeholder='xyzwe@xxx.com'
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {errors.email && (
                <Text style={styles.errorText}> {errors.email}</Text>
              )}
              <Text style={styles.title}>Full Address *</Text>
              <TextInput
                style={styles.input}
                placeholder='ENTER Full Address'
                value={values.address}
                onChangeText={handleChange('address')}
              />
              {errors.address && (
                <Text style={styles.errorText}> {errors.address}</Text>
              )}
              <Text style={styles.title}>AADHAR NO *</Text>
              <TextInput
                style={styles.input}
                placeholder='XXXXXXXXXXXX'
                value={values.aadharNo}
                keyboardType="numeric"
                maxLength={12}
                onChangeText={handleChange('aadharNo')}
              />
              {errors.aadharNo && (
                <Text style={styles.errorText}> {errors.aadharNo}</Text>
              )}
              <Text style={styles.title}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder='******************'
                value={values.password}
                keyboardType="numeric"
                maxLength={20}
                secureTextEntry
                onChangeText={handleChange('password')}
              />
              {errors.password && (
                <Text style={styles.errorText}> {errors.password}</Text>
              )}
              <Text style={styles.title}>Conform Password *</Text>
              <TextInput
                style={styles.input}
                placeholder='RE-ENTER Password'
                value={values.reENterAccount}
                keyboardType="numeric"
                maxLength={20}
                onChangeText={handleChange('reENterAccount')}

              />
              {errors.reENterAccount && (
                <Text style={styles.errorText}> {errors.reENterAccount}</Text>
              )}
             {/*  <Text style={styles.title}>ENTER IFSC CODE *</Text>
              <TextInput
                style={styles.input}
                placeholder='ENTER IFSC CODE'
                value={values.ifscCode}
                maxLength={12}
                onChangeText={handleChange('ifscCode')}
              /> */}
              {/* {errors.ifscCode && (
                <Text style={styles.errorText}> {errors.ifscCode}</Text>
              )} */}
            </View>
          )}
        </Formik>
        <View >
          <RadioButton style={{ marginTop: 100 }} />
        </View>
    
        <DatePick /> 
      
      </ScrollView>

      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      
    </View>  

  )
}

export default RegisterPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: '28%',
    marginTop: 10,
    marginBottom: 10,
    color: 'black'
  },
  title: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 40,
    bottom: 10,

    color: 'black'
  },
  input: {
    width: '88%',
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 50,
    fontSize: 19,
    marginTop: -22,
    marginLeft: 30,
  },

  errorText: {
    color: 'red',
    marginLeft: 26,
  },
  button: {
    fontSize: 26,
    color: 'white',
    backgroundColor: '#3f46c8',
    marginBottom: '10%',
    padding: 5,
    marginBottom: '1      %',
  },
  buttonText: {
    fontWeight: 'bold',
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
  },
})
