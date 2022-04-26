import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Degree } from '../screens/Degree';
import { Theory } from '../screens/Theory';
import { Exercises } from '../screens/Exercises';
import { Pieces } from '../screens/Pieces';

export type RootStackParams = {
    Home: undefined,
    Degree: undefined,
    Theory: undefined,
    Exercises: undefined,
    Pieces: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{ title: "Home" }} component={Home} />
            <Stack.Screen name="Degree" options={{ title: "Degree" }} component={Degree} />
            <Stack.Screen name="Theory" options={{ title: "Theory" }} component={Theory} />
            <Stack.Screen name="Exercises" options={{ title: "Exercises" }} component={Exercises} />
            <Stack.Screen name="Pieces" options={{ title: "Pieces" }} component={Pieces} />
        </Stack.Navigator>
    );
}