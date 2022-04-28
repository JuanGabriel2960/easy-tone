import React, { createContext, useEffect, useReducer } from "react";
import { appReducer, AppState } from './AppReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppContextProps = {
    showSplashScreen: Boolean;
    onboardingStep: number;
    setSplashScreen: (show: boolean) => void;
    setOnboardingStep: (step: number) => void;
}

const appInitialState: AppState = {
    showSplashScreen: true,
    onboardingStep: 0
}

export const AppContext = createContext({} as AppContextProps)

export const AppProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(appReducer, appInitialState)

    useEffect(() => {
        checkSplashScreen();
    }, [])

    const checkSplashScreen = async () => {
        const splash = await AsyncStorage.getItem('Splash') || 'true'

        // TODO
        
        // if (splash === 'false') {
        //     return dispatch({
        //         type: 'setSplashScreen', payload: {
        //             show: false
        //         }
        //     })
        // }

        dispatch({
            type: 'setSplashScreen', payload: {
                show: true
            }
        })
    }

    const setSplashScreen = async (show: boolean) => {
        await AsyncStorage.setItem('Splash', show.toString())

        dispatch({
            type: 'setSplashScreen', payload: {
                show
            }
        })
    };

    const setOnboardingStep = async (step: number) => {
        dispatch({
            type: 'setOnboardingStep', payload: {
                step
            }
        })
    };

    return (
        <AppContext.Provider value={{
            ...state,
            setSplashScreen,
            setOnboardingStep
        }}>
            {children}
        </AppContext.Provider>
    )
}