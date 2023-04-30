import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeBottomTabNavigator from './homeBottomTabNavigator';

const Stack = createStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Uno" component={HomeBottomTabNavigator} />
        </Stack.Navigator> 
    </NavigationContainer>
  )
}

export default Navigation