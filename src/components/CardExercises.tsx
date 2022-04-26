import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { colors, theme } from '../theme';

interface Props {
    name: string;
    content: string;
}

export const CardExercises = ({ name, content }: Props) => {

    const { base, bold } = theme;

    return (
        <View style={[styles.cardExercises]}>
            <Text style={[base, bold, styles.title]}>{name}</Text>
            <Text style={[styles.content]}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardExercises: {
        marginBottom: 20
    },
    title: {
        color: colors.white,
    },
    content: {
        color: colors.white,
        backgroundColor: colors.silver,
        borderRadius: 20,
        padding: 15,
        marginLeft: 10,
        marginTop: 10
    }
})

