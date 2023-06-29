import { View, Text, Image } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrasactionScreen from '../../screens/DashboardScreens/TrasactionScreen';
import {Ionicons} from 'react-native-vector-icons/Ionicons';
import MiniStatement from '../../screens/DashboardScreens/MiniStatement';
import QrCode from '../../screens/DashboardScreens/QrCode';
import {Home} from '../screen/DashboardScreens/Home'
import DashboardPage from '../../screens/DashboardScreens/DashboardPage'
import Profile from '../../screens/DashboardScreens/Profile';
import user from '../../assests/icons/images/user.png'
import moneyTransaction from '../../assests/icons/images/moneyTransaction.png'
import qrcode from '../../assests/icons/images/qrcode.png'
import statement from '../../assests/icons/images/statement.png'
import home from '../../assests/icons/images/home.png'
const TabNavigations = () => {
    const Tab = createBottomTabNavigator();
    
  return (      
    <Tab.Navigator 
      screenOptions={{
      headerShown:false,
      gestureEnabled: true,
      tabBarActiveTintColor: "#DD7D5D",
      tabBarInactiveTintColor: "black",
      
      tabBarStyle:{
        height:90,  
        position:'absolute',
        bottom:-12,
        right:-1,
        left:-2,
        borderRadius:18,
        backgroundColor: "#3f46c8",
      },
      style: {
        
          height: 60,
          borderColor: "red", //Change Like This
       elevation: 10,  
        shadowOffset: {
            width: 0, height: 0,
        }},
    }}>
        <Tab.Screen name="Home"
         component={DashboardPage} 
         options={{
          headerShown:false,
          showLabel: false,
          
          tabBarLabel:'',
          tabBarIcon:({color,size})=>(
            <Image source={home} style={{width:40, height:40}} />
          )
          
          }} />

          <Tab.Screen name="MiniStatement" 
        component={MiniStatement}  
        options={{
          headerShown:false,
          tabBarLabel:'',
          showLabel: false,
          tabBarIcon:({color,size})=>(
            <Image source={statement} style={{width:40, height:40,} } />
          )
          }} 
        />
    <Tab.Screen name="QrCode" 
        component={QrCode}  
        options={{
          headerShown:false,
          showLabel: false,
          tabBarLabel:'',
        
          tabBarIcon:({color,size})=>(
            <Image source={qrcode} style={{width:40, height:40,} } />
          )
          }} 
        />
        <Tab.Screen name="TrasactionScreen" 
        component={TrasactionScreen}  
        options={{
          headerShown:false,
          showLabel: false,
          tabBarLabel:'',
        
          tabBarIcon:({color,size})=>(
            <Image source={moneyTransaction} style={{width:40, height:40,} } />
          )
          }} 
        />
    <Tab.Screen name="Profile" 
        component={Profile}  
        options={{
          headerShown:false,
          tabBarLabel:'',
          tabBarLabelStyle: {
          
          
          },
          tabBarIcon:({color,size})=>(
            <Image source={user} style={{width:40, height:40}} />
          )
         }} 
        />
      </Tab.Navigator>
  )
}

export default TabNavigations  