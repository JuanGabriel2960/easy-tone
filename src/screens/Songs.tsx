import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { colors, theme } from '../theme';
import { useDegree } from '../hooks/useDegree';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> { }

export const Songs = ({ route }: Props) => {

    const params = route.params as any;
    const { container, lg, _3xl, base, bold, column } = theme;


    return (
        <View style={[container, column]}>
            <Text style={[_3xl, bold, styles.title]}>Piano Tutorial</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: colors.white,
        marginBottom: 20
    },
    content: {
        color: colors.white,
        marginBottom: 20
    },
    pieces: {
        color: colors.white,
        marginBottom: 15
    }
})
