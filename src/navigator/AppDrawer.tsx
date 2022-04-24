import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppContext } from '../context/AppContext';
import { HomeStack } from './HomeStack';
import { Splash } from '../screens/Splash';

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {

    const { showSplashScreen } = useContext(AppContext);

    return (
        <Drawer.Navigator>
            {
                (showSplashScreen == true)
                    ? (
                        <Drawer.Screen name="Splash" component={Splash} />
                    )
                    : (
                        <>
                            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={HomeStack} />
                        </>
                    )
            }
        </Drawer.Navigator>
    );
}