import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { colors, theme } from '../theme';
const iconMessage = require('../assets/icon-message.png')

interface Props {
    message: string
}

export const CardMessage = ({ message }: Props) => {

    const { _3xl, base, bold } = theme;

    return (
        <ImageBackground source={iconMessage} resizeMode="cover" style={[styles.card]} imageStyle={[{ borderRadius: 20 }]}>
            <Text style={[_3xl, bold, styles.title]}>Did you know...</Text>
            <Text style={[base, styles.message]}>{message}</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 15,
        width: '100%',
        height: 200,
        paddingTop: 20,
    },
    title: {
        color: colors.white,
        marginBottom: 20
    },
    message: {
        color: colors.white,
        maxWidth: '90%'
    }
})

