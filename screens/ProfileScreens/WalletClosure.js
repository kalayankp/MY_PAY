import { View, Text,StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import React,{useState} from 'react'
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Unable to upgrade the Wallet', value: '1' },
    { label: 'Charges are not reasonable', value: '2' },
    { label: 'Wallet is not needed any more', value: '3' },
    { label: 'other', value: '4' },
  ];
const WalletClosure = () => {
    

  const [values, setValues] = useState('SELECT');
  console.log('--',values)
  return (
    <View>
      <Text style={{marginTop:80,textAlign:'center',fontWeight:'bold',fontSize:28}}>Wallet Closure</Text>

      <View style={{ borderWidth: 1, borderRadius: 28, width: '90%', margin: 20, padding: 1, marginTop: 155 }}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={1000}
            labelField="label"
              valueField="value"
            placeholder={values}
            searchPlaceholder="Search..."
            value={values}
            onChange={item => {
              setValues(item.label);
            }}

          />
          {/* {console.log(values)} */}
        </View>
       

{values=== 'other' ? (<TextInput placeholder='Enter Reason' style={{ borderBottomWidth: 1,paddingLeft:20,margin:30, fontSize: 20,borderBottomColor:'#36454F',color:'#353935'} }/>): console.log('updated')
    

} 
        <View style={{justifyContent:'center',alignItems:"center"}}>
        <TouchableOpacity
            style={styles.button}>
            <Text style={styles.buttonText}>Deactivate</Text>
          </TouchableOpacity>
          </View>
    </View>
  )
}

export default WalletClosure

const styles = StyleSheet.create({
   
    button: {
      borderWidth: 1,
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
        fontSize: 22,
        color: '#353935',
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
        fontWeight: '450',
        fontSize: 22,
        color: 'grey',
        textAlign: 'center'
      },
  });