import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LOGIN, REGESTER } from '../constants/routeName';
import Register from '../screens/Register.js';
import logIn from '../screens/Login.js';



const AuthNavigator = () => {
  
    const HomeStack = createNativeStackNavigator();
    return(
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
        <HomeStack.Screen name={LOGIN} component={logIn}></HomeStack.Screen>
        <HomeStack.Screen name={REGESTER} component={Register}></HomeStack.Screen>
    </HomeStack.Navigator>
    );
}


export default AuthNavigator;