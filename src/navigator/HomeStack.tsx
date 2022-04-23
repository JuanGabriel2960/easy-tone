import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';

export type RootStackParams = {
    Home: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{ title: "Home" }} component={Home} />
        </Stack.Navigator>
    );
}