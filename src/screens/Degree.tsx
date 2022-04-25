import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { colors, theme } from '../theme';
import { Circle } from '../components/Circle';
import { degreeOptions } from '../data';

interface Props extends StackScreenProps<any, any> { }

export const Degree = ({ route }: Props) => {

    const params = route.params as any;
    const { container, _3xl, bold, column, row, justifyBetween } = theme;

    return (
        <View style={[container, column, justifyBetween]}>
            <Text style={[_3xl, bold, styles.title]}>{params.title}</Text>
            <View style={[row, styles.wrap]}>
                {
                    degreeOptions.map(({ icon, text }) => (
                        <Circle key={text} icon={icon} gradient={params.gradient} text={text} />
                    ))
                }
            </View>
            <Text style={[_3xl, bold, styles.title]}>{params.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: colors.white
    },
    wrap: {
        flexWrap: 'wrap'
    }
})
