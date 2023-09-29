import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { REACT_APP_BASE_URL } from "@env";
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import moment from 'moment';
import DropDown from 'react-native-drop-down-mith';
const data = [
    { value: 'Father', id: '1' },
    { value: 'Mother', id: '2' },
    { value: 'Son', id: '3' },
    { value: 'Husband', id: '2' },
    { value: 'Wife', id: '3' },
];
     
const AddNominee = ({ navigation }) => {
    const [accountNo, setAccountNo] = useState('');
    const [relationShip, setRelationShip] = useState('')
    const [selectedDate, setSelectedDate] = useState();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [value, setValue] = useState(null);
    console.log(selectedDate);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        let datas = moment(date).format("DD/MM/YYYY")
        setSelectedDate(datas);
        hideDatePicker();
    };


    // ----------- POST API CALL -------------------

    const dataPost = () => {
        fetch(`${REACT_APP_BASE_URL}/addNominee`, {
            method: 'POST',
            body: JSON.stringify({
                name: accountNo,
                relation: value,
                dob: selectedDate
 
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
        <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
            <ScrollView style={{ margin: 20 }}>
                <TouchableOpacity style={{ justifyContent: 'flex-end' }} onPress={() => navigation.goBack()}>
                    <Image
                        style={{ width: 28, height: 26, marginTop: 10, marginLeft: '90%' }}
                        source={require('../../assests/icons/cancel.png')}
                    />
                </TouchableOpacity>

                <Text style={{ fontSize: 24, color: '#36454F', marginTop: "5%", marginLeft: 20, textAlign: 'center' }}>ADD Nominee Details  </Text>
                <View style={{ justifyContent: 'center', margin: 20, marginTop: '10%', }}>
                    <Text style={{ fontSize: 20, color: '#36454F' }}>  Nominee Name</Text>
                    <TextInput placeholder='Enter Nominee Name' onChangeText={(e) => { setAccountNo(e) }} style={{ borderBottomWidth: 1, paddingLeft: 20, fontSize: 18, borderBottomColor: '#36454F', color: '#353935' }} />
                </View>

                <View style={{ margin: 12, }}>
                    <Text style={{ fontSize: 20, color: '#36454F',marginLeft:12 }}> RelationShip</ Text>
                    <View style={{ borderWidth: 1, borderColor: 'black', padding: 2, marginTop: 12 }}>
                        <DropDown
                            itemTextStyle={{ fontSize: 18, color: 'black' }}
                            selectedTextStyle={{ fontSize: 18, fontWeight: '500', margin: 16 }}
                            dropDownStyle={{ borderWidth: 1 }}
                            data={data}
                            onClick={item => setValue(item.value)}
                            placeHolder="select Network"
                            placeholderStyle={{ fontSize: 18, fontWeight: 'bold' }}
                        />
                    </View></View>

                <View style={{ marginTop: 16, }}>
                    <View>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                         <Text style={{ fontSize: 20, color: '#36454F',marginLeft:24 }}> DOB</ Text>
                        <View style={{ flexDirection: 'row', margin: -2, marginLeft:12, marginTop: 16 }}>
                            
                            <View style={{ borderWidth: 1, width: '95%', justifyContent: 'space-evenly', margin: 4, marginTop: 12,height:46}}>
                                <TouchableOpacity onPress={showDatePicker}>
                                    <Text style={{ textAlign: 'center', justifyContent: 'center', marginTop: 4, padding: 2, fontSize: 18, color: 'black' }}>{`${selectedDate ? selectedDate : "DD/MM/YYYY"}`}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: "center", marginTop: '27%', }}>
                    <TouchableOpacity style={{ borderColor: '#3f46c8', backgroundColor: '#3f46c8', borderWidth: 1, borderRadius: 20, }} onPress={dataPost}>
                        <Text style={{ textAlign: 'center', fontSize: 18, padding: 16, borderRadius: 20, color: 'white', width: '70%' }}> Update Nominee Detail</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default AddNominee


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