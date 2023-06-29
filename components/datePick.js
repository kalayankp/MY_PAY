import React, { useState } from 'react';
import { Button, View, Text,TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DatePick = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return (
 

    <View>
    
     <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View style={{flexDirection:'row',margin:-2,marginLeft:12}}>
<Text style={{margin:10,color:'black',fontSize:26,marginTop:16}}>DOB</Text>
<View style={{borderWidth: 2, borderRadius: 28, width: '75%', padding: 1, justifyContent:'space-evenly',margin:12,marginTop:11}}>

<TouchableOpacity onPress={showDatePicker}  >
    <Text style={{textAlign:'center',justifyContent:'center',marginTop:4,padding:4,fontSize:20,color:'black'}}>{`${selectedDate? moment(selectedDate).format("DD / MM / YYYY"):"DD / MM / YYYY"}`}</Text>
</TouchableOpacity>
</View>
</View>
    </View>
    
  );
};

export default DatePick;
