import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarStyle: {
            backgroundColor: '#000',
        },
        tabBarActiveTintColor: '#fff',
        headerShown: false,
    }}>
        <Tab.Screen name='Home' component={Home} options={{tabBarIcon: ({color}) => (<Entypo name={'home'} size={24} color={color}/>)}} />
        <Tab.Screen name='Search' component={Home} options={{tabBarIcon: ({color}) => (<AntDesign name={'search1'} size={24} color={color}/>)}}/>
        <Tab.Screen name='Upload' component={Home} options={{tabBarIcon: ({color}) => (<Entypo name={'upload'} size={24} color={color}/>)}}/>
        <Tab.Screen name='Inbox' component={Home} options={{tabBarIcon: ({color}) => (<Entypo name={'inbox'} size={24} color={color}/>)}}/>
        <Tab.Screen name='Profile' component={Home} options={{tabBarIcon: ({color}) => (<Ionicons name={'md-person-outline'} size={24} color={color}/>)}}/>
    </Tab.Navigator>
  )
}

export default HomeBottomTabNavigator