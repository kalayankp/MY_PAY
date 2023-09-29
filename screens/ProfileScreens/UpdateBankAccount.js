import { View, SafeAreaView, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import  { REACT_APP_BASE_URL } from "@env";
const data1 = [ 
    { label: 'Existing Account is Closed', value: '1' },
    { label: 'I want to used a new Account', value: '2' },
]; 
   
const UpdateBankAccount = ({ navigation }) => {
    const [reason, setReason] = useState('SELECT REASON');
    const [accountNo, setAccountNo] = useState('');
    const [accountName, setAccountName] = useState('')
    const [bankName, setBankName] = useState('')
    const [ifscCode, setIfscCode] = useState('')
    
    //  ----------- POST API CALL -------------------
    const UpdateBankAccountHandle = () => {
        fetch(`${ REACT_APP_BASE_URL }/addBankAccount`, {
            method: 'POST',
            body: JSON.stringify({
                account_name: accountName,
                bank_name: bankName,
                ifsc_code: ifscCode,
                account_number: accountNo,
                account_update_reason: reason
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === true && reason != "SELECT REASON") {
                    console.log('-------', data)
                    navigation.goBack()
                } else {
                    console.log('-----', data.message)
                    alert(data.message)
                }
            })
            .catch((err) => {
                alert(err.message)
                console.log(err.message);
            });
    }

    return (

        <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
            <ScrollView>
                {/* <TouchableOpacity style={{ justifyContent: 'flex-end' }} onPress={() => navigation.goBack()}>
                    <Image
                        style={{ width: 28, height: 26, marginTop: 10, marginLeft: '90%' }}
                        source={require('../../assests/icons/cancel.png')}
                    />
                </TouchableOpacity> */}
                <Text style={{ fontSize: 24, color: '#36454F', marginTop: "5%", marginLeft: 20, textAlign: 'center' }}>Update Account Details  </Text>
                <View style={{ justifyContent: 'center', margin: 20, marginTop: '10%', }}>
                    <Text style={{ fontSize: 20, color: '#36454F' }}> Bank Name</Text>
                    <TextInput placeholder='Enter Bank Name' onChangeText={(e) => { setBankName(e) }} style={{ borderBottomWidth: 1, paddingLeft: 20, fontSize: 18, borderBottomColor: '#36454F', color: '#353935' }} />
                </View>

                <View style={{ justifyContent: 'center', margin: 20, }}>
                    <Text style={{ fontSize: 20, color: '#36454F' }}>Account Holder Name</Text>
                    <TextInput placeholder='Account Holder Name' onChangeText={(e) => { setAccountName(e) }} style={{ borderBottomWidth: 1, paddingLeft: 20, fontSize: 18, borderBottomColor: '#36454F', color: '#353935' }} />
                </View>

                <View style={{ justifyContent: 'center', margin: 20, }}>
                    <Text style={{ fontSize: 20, color: '#36454F' }}>Bank Account Number</Text>
                    <TextInput placeholder='Bank Account' onChangeText={(e) => { setAccountNo(e) }} style={{ borderBottomWidth: 1, paddingLeft: 20, fontSize: 18, borderBottomColor: '#36454F', color: '#353935' }} />
                </View>

                <View style={{ justifyContent: 'center', margin: 20, }}>
                    <Text style={{ fontSize: 20, color: '#36454F' }}>IFSC CODE  </Text>
                    <TextInput placeholder='IFSC CODE' onChangeText={(e) => { setIfscCode(e) }} style={{ borderBottomWidth: 1, paddingLeft: 20, fontSize: 18, borderBottomColor: '#36454F', color: '#353935' }} />
                </View>

                <View style={{ borderBottomWidth: 1, width: '90%', borderColor: '#36454F', margin: 20, padding: 1, marginTop: 10 }}>

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
                        placeholder={reason}
                        searchPlaceholder="Search..."
                        value={reason}
                        onChange={item => {
                            setReason(item.label);
                        }}
                    />
                    {/* {console.log(values)} */}
                </View>

                <View style={{ alignItems: "center", marginTop: '10%', }}>
                    <TouchableOpacity onPress={UpdateBankAccountHandle} style={{ borderColor: '#3f46c8', backgroundColor: '#3f46c8', borderWidth: 1, borderRadius: 20, }}>
                        <Text style={{ textAlign: 'center', fontSize: 18, padding: 16, borderRadius: 20, color: 'white', width: '70%' }}> Update Account Detail</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default UpdateBankAccount


const styles = StyleSheet.create({

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
        fontWeight: '500',
        fontSize: 18,
        color: 'grey',
        marginLeft: 10

    },
});