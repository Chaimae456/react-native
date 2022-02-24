import React, { useEffect, useState ,useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './authNavigator.js';
import DrawerNavigator from './drawerNavigator.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalContext } from '../context/provider.js';
import { ActivityIndicator } from 'react-native';

const AppNavContainer = () => {
    const {
        authState : {IsLoggedIn},
    } = useContext(GlobalContext);

    const [isAuthenticated , setIsAuthenticated] = useState(IsLoggedIn);
    const [AuthLoaded, setAuthLoaded] = useState(false);

    const getUser = async () => {
        try {
          const user = await AsyncStorage.getItem('user');
            if(user){
                setAuthLoaded(true);
                setIsAuthenticated(true);
            }else{
                setAuthLoaded(true);
                setIsAuthenticated(false);
            }
        } catch (error) { }
    };
    useEffect(() => {
        getUser();
    } , [IsLoggedIn]);

    return(
        <>
        {AuthLoaded ? (
    <NavigationContainer>
        {isAuthenticated ? <DrawerNavigator/> : <AuthNavigator/> }  
    </NavigationContainer>
        ):(
            <ActivityIndicator />
        )}
    </>
    );
};
export default AppNavContainer;