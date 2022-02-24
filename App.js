import React from 'react';
import { ScrollView } from 'react-native';
import GlobalProvider from './src/context/provider.js';
import AppNavContainer from './src/navigations/index.js'

export default function App(){
  return(
    <GlobalProvider>
      <AppNavContainer/>
    </GlobalProvider>
  )
}
