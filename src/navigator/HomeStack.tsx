import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Degree } from '../screens/Degree';
import { Theory } from '../screens/Theory';

export type RootStackParams = {
    Home: undefined,
    Degree: undefined,
    Theory: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{ title: "Home" }} component={Home} />
            <Stack.Screen name="Degree" options={{ title: "Degree" }} component={Degree} />
            <Stack.Screen name="Theory" options={{ title: "Theory" }} component={Theory} />
        </Stack.Navigator>
    );
}