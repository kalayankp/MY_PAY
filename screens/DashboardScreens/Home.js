
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DashboardPage from './DashboardPage';
import WallerCard from '../../components/coutdownTimer';
 const Home=()=> {
  // const logout = async () => {
  //   await AsyncStorage.removeItem('token')
  //   navigation.navigate('Login')
  // }

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
