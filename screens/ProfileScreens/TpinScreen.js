import { View, Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const TpinScreen = ({navigation}) => {
  return (
    <View>
    <Text style={{marginTop:50,textAlign:'center',fontWeight:'bold',fontSize:28}}>TPIN</Text>

    <View style={{justifyContent:'center',alignItems:"center",marginTop:250 }}>
        <TouchableOpacity onPress={()=>navigation.navigate('EnableTPIN')}
            style={styles.button}>
            <Text style={styles.buttonText}>ENABLE TPIN</Text>
        </TouchableOpacity>
     </View>
          
          {/* <View style={{justifyContent:'center',alignItems:"center"}}>
          <Text >Forget TPIN</Text>
          </View>
        
        <View style={{marginTop:20,borderWidth:2,borderColor:'grey',borderRadius:20,margin:22,justifyContent:'center'}}>
          <TextInput placeholder='ENTER OLD TPIN' onChangeText={(e)=>{setData(e)}} keyboardType="numeric" maxLength={16} style={{fontSize:20,borderWidth: 0,width:210,textAlign:'center'}}/>
        </View>

        <View style={{marginTop:10,borderWidth:2,borderColor:'grey',borderRadius:20,margin:22,justifyContent:'center'}}>
         <TextInput placeholder='ENTER NEW TPIN' onChangeText={(e)=>{setData(e)}} keyboardType="numeric" maxLength={16} style={{fontSize:20,borderWidth: 0,width:210,textAlign:'center'}}/>
        </View>
      
        <View style={{marginTop:10,borderWidth:2,borderColor:'grey',borderRadius:20,margin:22,justifyContent:'center'}}>
          <TextInput placeholder='RE-Enter NEW TPIN' onChangeText={(e)=>{setData(e)}} keyboardType="numeric" maxLength={16} style={{fontSize:20,borderWidth: 0,width:210,textAlign:'center'}}/>
        </View>

        <View style={{marginTop:10,borderWidth:2,borderColor:'grey',borderRadius:20,margin:22,justifyContent:'center'}}>
         <TextInput placeholder='CHOOSE SECURITY QUESTION' onChangeText={(e)=>{setData(e)}} keyboardType="numeric" maxLength={16} style={{fontSize:20,borderWidth: 0,width:210,textAlign:'center'}}/>
        </View>
        <View style={{marginTop:10,borderWidth:2,borderColor:'grey',borderRadius:20,margin:22,justifyContent:'center'}}>
          <TextInput placeholder='ANSWER' onChangeText={(e)=>{setData(e)}} keyboardType="numeric" maxLength={16} style={{fontSize:20,borderWidth: 0,width:210,textAlign:'center'}}/>
        </View>

      

        <View style={{justifyContent:'center',alignItems:"center",marginTop:-50}}>
        <TouchableOpacity
            style={styles.button}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
          </View> */}
    </View>
  )
}





export default TpinScreen

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
    }
  });