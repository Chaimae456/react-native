import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CONTACT, CONTACT_DETAIL, CREATE_CONTACT, SITTING } from '../constants/routeName';
import Contacts from '../screens/contacts';
import ContactsDetails from '../screens/Details';
import CreateContacts from '../screens/Create';
import Setting from '../screens/Setting';

const HomeNavigator = () => {
    const HomeStack=createStackNavigator()
    return(
    <HomeStack.Navigator initialRouteName={CONTACT}>
        <HomeStack.Screen name={CONTACT} component={Contacts}></HomeStack.Screen>
        <HomeStack.Screen name={CONTACT_DETAIL} component={ContactsDetails}></HomeStack.Screen>
        <HomeStack.Screen name={CREATE_CONTACT} component={CreateContacts}></HomeStack.Screen>
        <HomeStack.Screen name={SITTING} component={Setting}></HomeStack.Screen>
    </HomeStack.Navigator>
    );
}


export default HomeNavigator;