
import { View, Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { REACT_APP_BASE_URL } from "@env";

const ChangePassword = ({navigation}) => {
    const [data,setData] = useState('')
    const [pass, setPass] = useState('');
    const [conformPass, setConformPass] = useState('');
    const dataPost = () => {
      fetch(`${REACT_APP_BASE_URL}/passwordUpdate`, {
        method: 'POST',
        body: JSON.stringify({
          "password": data,
          "newpassword": conformPass
        }),
        headers: {
          'Content-Type': 'application/json',
        }, 
      })  
        .then((response) => response.json())
        .then((data) => {
          if (data.status == true) {
            navigation.navigate('WelcomeScreen')
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
  
    //--------------HANDLE SUBMIT--------------------
  
    const handleSubmit = () => {
      if (pass !== conformPass) {
        alert('Passwords do not match');
        return;
      } else {
        dataPost()
        console.log('done')
      }
    };

  return (
    <View>
      <Text style={{marginTop:80,textAlign:'center',fontWeight:'bold',fontSize:28}}>Change Password</Text>
      <View style={{marginTop:70,borderWidth:2,borderColor:'grey',borderRadius:20,margin:22,justifyContent:'center'}}>
     <TextInput placeholder='Old Password' onChangeText={(e)=>{setData(e)}} keyboardType="numeric" maxLength={16} style={{fontSize:26,borderWidth: 0,width:210,textAlign:'center'}}/>
        </View>
        <View style={{marginTop:10,borderWidth:2,borderColor:'grey',borderRadius:20,margin:22,justifyContent:'center'}}>
 
         <TextInput placeholder='New Password' onChangeText={(e)=>{setPass(e)}} keyboardType="numeric" maxLength={16} style={{fontSize:26,borderWidth: 0,width:210,textAlign:'center'}}/>
        </View>
        <View style={{marginTop:10,borderWidth:2,borderColor:'grey',borderRadius:20,margin:22,justifyContent:'center'}}>
 
         <TextInput placeholder='RE-Enter Password' onChangeText={(e)=>{setConformPass(e)}} keyboardType="numeric" maxLength={26} style={{fontSize:26,borderWidth: 0,width:260,textAlign:'center'}}/>
        </View>
       <View style={{justifyContent:'center',alignItems:"center"}}>
        <TouchableOpacity  onPress={handleSubmit}
            style={styles.button}>
            <Text style={styles.buttonText}>Add Password</Text>
          </TouchableOpacity>
          </View>
    </View>
  )
}



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
export default ChangePassword