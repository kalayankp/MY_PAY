import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { REACT_APP_BASE_URL } from "@env";
  
const data1 = [
    { label: 'House Wife', value: '1' },
    { label: 'Retired', value: '2' },
    { label: 'Salaried', value: '3' },
    { label: 'Self Employed', value: '4' },
    { label: 'Self Employed Professional', value: '5' },
    { label: 'Student Above 18 years', value: '6' },
    { label: 'Politicians', value: '7' },
    { label: 'Others', value: '7' },
  ];  
  const data2 = [
    { label: '< 1 Lakh per Annum', value: '1' }, 
    { label: 'Rs 1 to 3 Lakh per Annum', value: '2' },
    { label: '3 Lakh to 10 Lakh per Annum', value: '3' },
    { label: 'Rs 10 L to Rs 30 Lakh per Annum', value: '4' },
    { label: 'More than Rs. 30 Lakh per Annum', value: '5' },
  
  ];

const IncomeVerification = ({navigation}) => {
const [values1, setValues1] = useState('SELECT OCCUPATION');
const [values2, setValues2] = useState('SELECT EMPLOYMENT STATUS');

 // ----------- POST API CALL -------------------

 const dataPost = () => {
  fetch(`${REACT_APP_BASE_URL}/IncomeVerification`, {
    method: 'POST',
    body: JSON.stringify({
      occupation: values1,
     earning: values2
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === true) {
       
        navigation.goBack()
      }
    })
    .catch((err) => {
      alert(err.message)
      console.log(err.message);
    });
}

  return (
    <View>
      <Text style={{marginTop:80,textAlign:'center',fontWeight:'bold',fontSize:28}}>Income Verification</Text>

      <View style={{ borderWidth: 2, borderRadius: 28, width: '90%', margin: 20, padding: 1, marginTop: 175 }}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data1}
            search
            maxHeight={1000}
            labelField="label"
              valueField="value"
            placeholder={values1}
            searchPlaceholder="Search..."
            value={values1}
            onChange={item => {
              setValues1(item.label);
            }}
          />
          {/* {console.log(values)} */}
        </View>
 
        <View style={{ borderWidth: 2, borderRadius: 28, width: '90%', margin: 20, padding: 1, marginTop: 15 }}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data2}
            search
            maxHeight={1000}
            labelField="label"
            valueField="value"
            placeholder={values2}
            searchPlaceholder="Search..."
            value={values2}
            onChange={item => {
              setValues2(item.label);
            }}
               />
          {/* {console.log(values)} */}
        </View>
 <View style={{justifyContent:'center',alignItems:"center"}}>
        <TouchableOpacity onPress={dataPost}
            style={styles.button}>    
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
          </View>
    </View>
  )
}

export default IncomeVerification

const styles = StyleSheet.create({
   
    button: {
      borderWidth: 2,
      borderRadius: 22,
      borderColor: '#3f46c8',
      height: 58,
      width: '60%',
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      justifyContent: 'center',
      marginTop: 70,
      backgroundColor: '#3f46c8'
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 22,
      color: 'lightgrey',
      fontWeight: '12',
    },
    dropdown: {
        margin: 16,
        height: 25,
        fontWeight: 'bold',
    
      },
      selectedTextStyle: {
        fontSize: 18,
        color: 'grey',
        textAlign: 'center'
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
        fontSize: 18,
        color: 'grey',

        textAlign: 'center'
      },
  });