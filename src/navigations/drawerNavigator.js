import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './homeNavigator';
import { HOME_NAVIGATOR } from '../constants/routeName';
import SideMenu from './SideMenu/index';
import {GlobalContext} from '../context/provider'

const getDrawerContent = (navigation,authDispatch) => {
  return  <SideMenu navigation={navigation} authDispatch={authDispatch} />
}

const DrawerNavigator = () => {
    const {authDispatch} = useContext(GlobalContext);
    const Drawer=createDrawerNavigator();
    return(
    <Drawer.Navigator drawerContent={({navigation}) => getDrawerContent(navigation , authDispatch)}>
        <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
    );
}
export default DrawerNavigator;