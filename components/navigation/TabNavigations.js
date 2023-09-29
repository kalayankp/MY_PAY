import { View, Text, Image } from 'react-native'
import React from 'react' 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrasactionScreen from '../../screens/DashboardScreens/TrasactionScreen';
import MiniStatement from '../../screens/DashboardScreens/MiniStatement';
import QrCode from '../../screens/DashboardScreens/QrCode';
import DashboardPage from '../../screens/DashboardScreens/DashboardPage'
import Profile from '../../screens/DashboardScreens/Profile';
import user from '../../assests/icons/images/user.png';
import userBlack from '../../assests/icons/images/userBlack.png'
import moneyTransaction from '../../assests/icons/images/moneyTransaction.png'
import moneyTransactionBlack from '../../assests/icons/images/moneyTransactionBlack.png'
import qrcode from '../../assests/icons/images/qrcode.png'
import qrcodeBlack from '../../assests/icons/images/qrcodeBlack.png'
import statement from '../../assests/icons/images/statement.png'
import home from '../../assests/icons/images/home.png';
import homeBlack from '../../assests/icons/images/homeBlack.png';
const TabNavigations = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        tabBarActiveTintColor: "#DD7D5D",
        tabBarInactiveTintColor: "black",

        tabBarStyle: {
          height: 95,
          position: 'absolute',
          bottom: -12,
          right: -1,
          left: -2,
          borderRadius: 18,
          backgroundColor:'#3f46c8',
        },
        style: {
          height: 90,
          borderColor: "blue", //Change Like This
          elevation: 10,
          shadowOffset: {
            width: 0, height: 0,
          }
        },
      }}>
      <Tab.Screen name="Home"
        component={DashboardPage}
        options={{
          headerShown: false,
          showLabel: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? homeBlack : home} style={{ width: '50%', height: "50%" }} />
          )
        }} />

      <Tab.Screen name="MiniStatement"
        component={MiniStatement}
        options={{
          headerShown: false,
          tabBarLabel: '',
          showLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={statement} style={{ width: '50%', height: "50%" }} />
          )
        }}
      />
      <Tab.Screen name="QrCode"
        component={QrCode}
        options={{
          headerShown: false,
          showLabel: false,
          tabBarLabel: '',

          tabBarIcon: ({ focused }) => (
            <Image source={focused ? qrcodeBlack : qrcode} style={{ width: '50%', height: "50%" }} />
          )
        }}
      />
      <Tab.Screen name="TrasactionScreen"
        component={TrasactionScreen}
        options={{
          headerShown: false,
          showLabel: false,
          tabBarLabel: '',

          tabBarIcon: ({ focused }) => (
            <Image source={focused ? moneyTransactionBlack : moneyTransaction} style={{ width: '50%', height: "50%" }} />
          )
        }}
      />
      <Tab.Screen name="Profile"
        component={Profile}
        options={{

          headerShown: false,
          showLabel: false,
          tabBarLabel: '',

          tabBarIcon: ({ focused }) => (
            <Image source={focused ? userBlack : user} style={{ width: '50%', height: "50%" }} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigations  