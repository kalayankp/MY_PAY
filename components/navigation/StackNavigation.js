import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreens from '../../screens/LoginScreens';
import WelcomeScreen from '../../screens/WelcomeScreen';
import PasswordScreen from '../../screens/PasswordScreen';
import RegistrationForm from '../../screens/RegistrationForm';
//import PrepaidMobile from '../../screens/PrepaidMobile';
import OtpScreen from '../../screens/OtpScreen'
import ForgetPassword from '../../screens/ForgetPassword';
import TabNavigations from './TabNavigations';
import AddMoneyScreen from '../../screens/DashboardScreens/AddMoneyScreen'
import PayMoney from '../../screens/DashboardScreens/PayMoney'
import EditProfile from '../../screens/ProfileScreens/EditProfile';
import PaymentDone from '../../screens/PaymentDone'
import AddmoneySucessFully from '../../screens/DashboardScreens/AddmoneySucessFully';
import PostpaidMobile from '../../screens/services/Postpaid/PostpaidMobile';
import PrepaidMobile from '../../screens/services/Prepaid/PrepaidMobile';
import BroadBandScreen from '../../screens/services/BroadBandScreen';
import ElectricityBill from '../../screens/services/Electricity/ElectricityBill';
import ElectricityForm from '../../screens/services/Electricity/ElectricityForm';
import Dth from '../../screens/services/DTH/Dth';
import GasBill from '../../screens/services/GasBill';
import DatePick from '../datePick';
import ChangeEmail from '../../screens/ProfileScreens/ChangeEmail';
import ChangePassword from '../../screens/ProfileScreens/ChangePassword';
import LinkBankAcc from '../../screens/ProfileScreens/LinkBankAcc';
import ExistingBackAccount from '../../screens/ProfileScreens/ExistingBackAccount';
import UpdateBankAccount from '../../screens/ProfileScreens/UpdateBankAccount';
import AddNominee from '../../screens/ProfileScreens/AddNominee';
import WalletClosure from '../../screens/ProfileScreens/WalletClosure';
import TpinScreen from '../../screens/ProfileScreens/TpinScreen';
import Settings from '../../screens/ProfileScreens/Settings';
import IncomeVerification from '../../screens/ProfileScreens/IncomeVerification';
import AddressUpdate from '../../screens/ProfileScreens/AddressUpdate';
import UsageCap from '../../screens/ProfileScreens/UsageCap';
import EnableUsageCap from '../../screens/ProfileScreens/EnableUsageCap';
import DailyUsageCap from '../../screens/ProfileScreens/DailyUsageCap';
import MonthlyUsageCap from '../../screens/ProfileScreens/MonthlyUsageCap';
import EnableTPIN from '../../screens/ProfileScreens/EnableTPIN';
import ForgetTpin from '../../screens/ProfileScreens/ForgetTpin';
import ChangeTpin from '../../screens/ProfileScreens/ChangeTpin';
import ProfileInfo from '../../screens/ProfileScreens/ProfileInfo';
import FlightBook from '../../screens/ProfileScreens/FlightBook';
import BusBook from '../../screens/services/BusBook';
import HotelBook from '../../screens/services/HotelBook';
import FastTag from '../../screens/services/FastTag';
import MobileNoScreen from '../../screens/MobileNoScreen';
import RechargePlan from '../../screens/services/Prepaid/RechargePlan';
import FastTagOperator from '../../screens/services/FastTag/FastTagOperator';
import FastTagForm from '../../screens/services/FastTag/FastTagForm';

//import MobileScreen from '../../screens/services/Prepaid/MobileScreen';
import DeviceInfos from '../DeviceInfos';
import PaymentFailure from '../../screens/services/PaymentStatus/PaymentFailure/PaymentFailure';
import PaymentSucess from '../../screens/services/PaymentStatus/PaymentSucess/PaymentSucess';
import PaymentPending from '../../screens/services/PaymentStatus/PaymentPending/PaymentPending';
import UserBill from '../../screens/services/Postpaid/UserBill';
import Operator from '../../screens/services/DTH/Operator';
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (

    <Stack.Navigator initialRouteName="Homes">
      <Stack.Screen name="DatePick" component={DatePick} options={{ headerShown: false, }} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false, }} />
      <Stack.Screen name="LoginScreens" component={LoginScreens} options={{ headerShown: false, animation: 'slide_from_right' }} />
      {/* <Stack.Screen name="Signup" component={RegistrationForm}  options={{headerShown:false,}}/> */}
      <Stack.Screen name="RegistrationForm" component={RegistrationForm} options={{ headerShown: false, animation: 'slide_from_left' }} />
      <Stack.Screen name="PasswordScreen" component={PasswordScreen} options={{ headerShown: false, animation: 'slide_from_left' }} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="MobileNoScreen" component={MobileNoScreen} options={{
        headerShown: false,
        animation: 'slide_from_left'
      }} />
      <Stack.Screen name="OtpScreen" component={OtpScreen}
        options={{
          headerShown: false,
          animation: 'slide_from_left'
        }} />
      <Stack.Screen name="Homes" component={TabNavigations} options={{ headerShown: false, animation: "slide_from_bottom" }} />
      <Stack.Screen name="DeviceInfos" component={DeviceInfos} options={{ headerShown: false, }} />
      <Stack.Screen name="AddMoneyScreen" component={AddMoneyScreen} options={{ headerShown: false, }} />
      <Stack.Screen name="PayMoney" component={PayMoney} options={{ headerShown: false, }} />
      <Stack.Screen name="PaymentFailure" component={PaymentFailure} options={{ headerShown: false, }} />
      <Stack.Screen name="PaymentSucess" component={PaymentSucess} options={{ headerShown: false, }} />
      <Stack.Screen name="PaymentPending" component={PaymentPending} options={{ headerShown: false, }} />
      <Stack.Screen name="RechargePlan" component={RechargePlan} options={{ headerShown: false, }} />
      <Stack.Screen name="PaymentDone" component={PaymentDone} options={{ headerShown: false, }} />
      <Stack.Screen name="PostpaidMobile" component={PostpaidMobile} options={{ headerShown: false, title: 'POSTPAID' }} />
      <Stack.Screen name="UserBill" component={UserBill} options={{ headerShown: false, animation: "slide_from_bottom" }} />
      <Stack.Screen name="BroadBandScreen" component={BroadBandScreen} options={{ headerShown: true, title: 'BROADBAND' }} />
      <Stack.Screen name="Dth" component={Dth} options={{ headerShown: false, title: "DTH" }} />
      <Stack.Screen name="Operator" component={Operator} options={{ headerShown: false, title: "Operator" }} />
      <Stack.Screen name="GasBill" component={GasBill} options={{ headerShown: true, title: 'GAS BILL' }} />
      <Stack.Screen name="ElectricityBill" component={ElectricityBill} options={{ headerShown: false, }} />
      <Stack.Screen name="ElectricityForm" component={ElectricityForm} options={{ headerShown: false, }} />
      <Stack.Screen name="FastTagOperator" component={FastTagOperator} options={{ headerShown: false, }} />
      <Stack.Screen name="FastTagForm" component={FastTagForm} options={{ headerShown: false, }} />
      
      <Stack.Screen name="FlightBook" component={FlightBook} options={{ headerShown: true, title: 'FLIGHT BOOKING' }} />
      <Stack.Screen name="BusBook" component={BusBook} options={{ headerShown: true, title: "BUS BOOKING" }} />
      <Stack.Screen name="HotelBook" component={HotelBook} options={{ headerShown: true, title: 'HOTEL BOOKING' }} />
      <Stack.Screen name="FastTag" component={FastTag} options={{ headerShown: true, title: 'FAST TAG' }} />
      <Stack.Screen name="ExistAccount" component={ExistingBackAccount} options={{ animation: "slide_from_right", headerShown: true, title: 'Existing Bank Account' }} />
      <Stack.Screen name="UpdateBankAccount" component={UpdateBankAccount} options={{ animation: "slide_from_bottom", headerShown: true, }} />
      <Stack.Screen name="AddNominee" component={AddNominee} options={{ animation: "slide_from_bottom", headerShown: false, }} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ animation: "slide_from_right", headerShown: false }} />
      <Stack.Screen name="ChangeEmail" component={ChangeEmail} options={{ animation: "slide_from_right", headerShown: false }} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ animation: "slide_from_right", title: 'CHANGE PASSWORD' }} />
      <Stack.Screen name="LinkBankAcc" component={LinkBankAcc} />
      <Stack.Screen name="WalletClosure" component={WalletClosure} />
      <Stack.Screen name="IncomeVerification" component={IncomeVerification} options={{ animation: "slide_from_right", title: 'INCOME VERIFICATION' }} />
      <Stack.Screen name="TpinScreen" component={TpinScreen} options={{ animation: "slide_from_right", title: 'SET TPIN' }} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="AddressUpdate" component={AddressUpdate} options={{ animation: "slide_from_right", title: 'ADDRESS UPDATES' }} />
      <Stack.Screen name="UsageCap" component={UsageCap} options={{ headerShown: false, }} />
      <Stack.Screen name="EnableUsageCap" component={EnableUsageCap} options={{ headerShown: false, }} />
      <Stack.Screen name="DailyUsageCap" component={DailyUsageCap} options={{ headerShown: false, }} />
      <Stack.Screen name="MonthlyUsageCap" component={MonthlyUsageCap} options={{ headerShown: false, }} />
      <Stack.Screen name="EnableTPIN" component={EnableTPIN} options={{ headerShown: false, }} />
      <Stack.Screen name="ForgetTpin" component={ForgetTpin} options={{ headerShown: false, }} />
      <Stack.Screen name="ChangeTpin" component={ChangeTpin} options={{ headerShown: false, }} />
      <Stack.Screen name="PrepaidMobile" component={PrepaidMobile} options={{ headerShown: false, }} />
      <Stack.Screen name="ProfileInfo" component={ProfileInfo} options={{ animation: "slide_from_right", headerShown: false, }} />
      <Stack.Screen name="AddmoneySucessFully" component={AddmoneySucessFully} options={{ headerShown: false, }} />
    </Stack.Navigator>

  )
}

export default StackNavigation