
import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from 'react-native';
import DashboardPage from './DashboardPage';

 const Home=()=> {
  // const logout = async () => {
  //   await AsyncStorage.removeItem('token')
  //   navigation.navigate('Login')
  // } 
  // const [devMac,setDevMac] = useState('') 
  const macAdd= DeviceInfo.getMacAddressSync();
  const ipAd=DeviceInfo.getIpAddressSync()
 
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={{borderWidth:1,borderColor:'#EFEAE3',backgroundColor:'#DD7D5D',height:62,width:"100%",borderBottomLeftRadius:22,borderBottomRightRadius:22}}>         
        <Text style={{flex:1,textAlign:'center',justifyContent:'center',fontWeight:'bold',fontSize:28,color:'white',margin:12}}>WalletApp</Text>
      </View>
        
       <ScrollView>
             <DashboardPage />
       </ScrollView>
    {/* <Button onPress={logout} title="LOGOUT" /> */}
    </View>     
    </SafeAreaView> 
  );
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEAE3',
  },
});
