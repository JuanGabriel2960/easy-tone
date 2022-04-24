import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppDrawer } from './src/navigator/AppDrawer';
import { AppProvider } from './src/context/AppContext';

const AppState = ({ children }: any) => {
  return (
    <AppProvider>
      {children}
    </AppProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <AppDrawer />
      </AppState>
    </NavigationContainer>
  )
}

export default App;
