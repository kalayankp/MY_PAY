import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigation from './components/Auth/StackNavigation';

const App = () => {
 
  return (  
    <NavigationContainer>
      <StackNavigation  />
   </NavigationContainer>
 )
}

export default App