import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const RadioKey = [
  {
    key: 'M',
    text: 'Male',
  },
  {
    key: 'F',
    text: 'Female',
  },
  {
    key: 'O',
    text: 'Other',  
  },
];

const RadioButton = () => {
  const [selectedValues, setSelectedValues] = useState();
  console.log(selectedValues)
  return (
    <View style={styles.containe1}>
      <Text style={{ marginLeft: 0, marginTop:-18, fontSize: 26,color:'black' }}> Gender </Text>
      <View style={styles.radioContainer}>
        {RadioKey.map((res) => {
          return (
            <View key={res.key} style={styles.radioView}>
              <Text style={styles.radioText}>{res.text}</Text>
              <Text style={styles.radioSubText}>{res.Subtext}</Text>

              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => setSelectedValues(res.key)}>
                {selectedValues === res.key && <View style={styles.selectedRb} />}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      {/* <Text style={{ color: 'green' }}> Selected: {value} </Text> */}
    </View>
  );
};
export default RadioButton;

const styles = StyleSheet.create({
  containe1: {
    flex: 1,
    padding: 10,
   
  },
  radioContainer: {
    flexDirection: 'row',
    margin: 20,
    marginLeft: 22  ,
  },
  radioView: {
    flexDirection: 'row',
  },
  radioText: {
    marginRight: 5,
    fontSize: 19,
    color: '#605052',
    fontWeight: '500',
  },
  radioSubText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '500',
    margin: 17,
  }, 

  radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    left: -30,
    bottom: 3,
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#000',
  },
});
