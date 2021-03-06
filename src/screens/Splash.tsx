import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { theme, colors } from '../theme';
import { AppContext } from '../context/AppContext';
import { onboarding } from '../data';

const redGradient = require('../assets/red-gradient.png')

export const Splash = () => {

    const { onboardingStep, setSplashScreen, setOnboardingStep } = useContext(AppContext);
    const { container, column, alignCenter, justifyCenter, base, _2xl, _3xl, bold, row } = theme;

    const next = () => {
        if (onboardingStep === onboarding.length - 1) {
            return setSplashScreen(false)
        }

        setOnboardingStep(Math.min(onboardingStep + 1, onboarding.length - 1))
    }

    return (
        <View style={[container, column, alignCenter, justifyCenter]}>
            <Text style={[_3xl, bold, styles.title]}>{onboarding[onboardingStep].title}</Text>
            <Text style={[base, styles.aboutText]}>{onboarding[onboardingStep].description}</Text>
            <View style={[row, styles.btnPointsContainer]}>
                {
                    onboarding.map(({ id }) => (
                        <TouchableOpacity key={id} style={[styles.btnPoint, onboardingStep == id && styles.check]} onPress={() => setOnboardingStep(id)}>
                            <Text style={[_2xl, bold,]}></Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <TouchableOpacity style={[styles.btn]} onPress={() => next()}>
                <ImageBackground source={redGradient} resizeMode="cover" style={[{ paddingVertical: 12 }]} imageStyle={{ borderRadius: 30 }}>
                    <Text style={[_2xl, bold, styles.btnText]}>{onboardingStep === onboarding.length - 1 ? 'START' : 'NEXT'}</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSplashScreen(false)}>
                <Text style={[styles.btnSkip]}>Skip introduction</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: colors.white
    },
    btn: {
        borderRadius: 30,
        width: '100%',
        maxWidth: '70%',
        marginTop: 25,
        marginBottom: 10
    },
    aboutText: {
        color: colors.white,
        marginTop: 15,
        marginBottom: 25,
        textAlign: 'center',
        maxWidth: '65%'
    },
    btnText: {
        textAlign: 'center',
        color: colors.white
    },
    btnSkip: {
        color: colors.gray
    },
    btnPoint: {
        backgroundColor: colors.gray,
        width: 10,
        height: 10,
        borderRadius: 100
    },
    btnPointsContainer: {
        width: '100%',
        maxWidth: '28%',
        justifyContent: 'space-between',
    },
    check: {
        backgroundColor: colors.red,
        width: 14,
        height: 14,
    }
})
