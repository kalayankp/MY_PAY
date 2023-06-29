import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreens from '../../screens/LoginScreens';
import WelcomeScreen from '../../screens/WelcomeScreen';
import PasswordScreen from '../../screens/PasswordScreen';
import RegistrationForm from '../../screens/RegistrationForm';
import MobileNoScreen from '../../screens/MobileNoScreen';
import OtpScreen from '../../screens/OtpScreen'
import RegisterPage from '../../screens/Signup'
import TabNavigations from '../navigation/TabNavigations';
import AddMoneyScreen from '../../screens/DashboardScreens/AddMoneyScreen'
import PayMoney from '../../screens/DashboardScreens/PayMoney'
import PaymentDone from '../../screens/PaymentDone'
import AddmoneySucessFully from '../../screens/DashboardScreens/AddmoneySucessFully'
import PostpaidMobile from '../../screens/services/PostpaidMobile';
import PrepaidMobile from '../../screens/services/PrepaidMobile';
import BroadBandScreen from '../../screens/services/BroadBandScreen';
import Dth from '../../screens/services/Dth';
import GasBill from '../../screens/services/GasBill';
import DatePick from '../../components/datePick'
const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
  
    <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="DatePick" component={DatePick} options={{headerShown:false,}} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false,}} />
        <Stack.Screen name="LoginScreens" component={LoginScreens}  options={{headerShown:false,}}/>
        {/* <Stack.Screen name="Signup" component={RegistrationForm}  options={{headerShown:false,}}/> */}
        <Stack.Screen name="RegistrationForm" component={RegistrationForm}  options={{headerShown:false,}}/>
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} options={{headerShown:false,}} />
        <Stack.Screen name="MobileNoScreen" component={MobileNoScreen} options={{headerShown:false,}}/>
        <Stack.Screen name="OtpScreen" component={OtpScreen} options={{headerShown:false,}}/>
        <Stack.Screen name="Homes" component={TabNavigations} options={{ headerShown: false, }} />
        <Stack.Screen name="AddMoneyScreen" component={AddMoneyScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="PayMoney" component={PayMoney} options={{ headerShown: false, }} />
        <Stack.Screen name="PaymentDone" component={PaymentDone} options={{ headerShown: false, }} />
        <Stack.Screen name="PostpaidMobile" component={PostpaidMobile} options={{ headerShown: false, }} />
        <Stack.Screen name="PrepaidMobile" component={PrepaidMobile} options={{ headerShown: false, }} />
        <Stack.Screen name="BroadBandScreen" component={BroadBandScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="Dth" component={Dth} options={{ headerShown: false, }} />
        <Stack.Screen name="GasBill" component={GasBill} options={{ headerShown: false, }} />
       



        <Stack.Screen name="AddmoneySucessFully" component={AddmoneySucessFully} options={{ headerShown: false, }} />
    </Stack.Navigator>
   
  )
}

export default StackNavigation