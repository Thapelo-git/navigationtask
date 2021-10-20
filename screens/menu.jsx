import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import About from "../screens/about";
//import Home from '../screens/home';
import Contact from "../screens/Contact";
import Home from './home';
import Adduser from './Adduser';
import ReviewDetails from './reviewDetails';
import combpage from './combpage';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
const Menu = () => {
    const Tab = createMaterialBottomTabNavigator();
    const Stack = createNativeStackNavigator()
    return (
        <>
         <NavigationContainer>
         <Tab.Navigator
  initialRouteName={"Home"}
  activeColor="#f0edf6"
  inactiveColor="#3e2465"
  barStyle={{ backgroundColor: '#fff' }}
>

        <Tab.Screen  name="Home" component={combpage}/>

         
          
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name={"Contact"} component={Contact} />
     
    </Tab.Navigator>
   
    </NavigationContainer>
    
            
        </>
    )
}

export default Menu
