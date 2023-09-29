import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './components/navigation/StackNavigation';

const App = () => {
 
  return ( 
    <NavigationContainer>
      <StackNavigation  /> 
   </NavigationContainer> 
 )
}
  
export default App