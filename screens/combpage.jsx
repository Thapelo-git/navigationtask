import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from './reviewDetails';
import Home from './home';
import Adduser from './Adduser'
const Stack = createNativeStackNavigator()
const combpage = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}
            />
            <Stack.Screen
            name="ReviewDetails"
            component={ReviewDetails}
            />
            <Stack.Screen
            name="Adduser"
            component={Adduser}
            />
        </Stack.Navigator>
    )
}

export default combpage
