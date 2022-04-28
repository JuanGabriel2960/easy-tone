import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { colors, theme } from '../theme';
import { Circle } from '../components/Circle';
import { degreeOptions } from '../data';
import { CardMessage } from '../components/CardMessage';
import { getDegreeMessage } from '../helpers';

interface Props extends StackScreenProps<any, any> { }

export const Degree = ({ route, navigation }: Props) => {

    const params = route.params as any;
    const { container, _3xl, bold, column, row, justifyBetween, alignCenter } = theme;

    return (
        <View style={[container, column, justifyBetween]}>
            <Text style={[_3xl, bold, styles.title]}>{params.title}</Text>
            <View style={[row, styles.wrap]}>
                {
                    degreeOptions.map(({ icon, text }) => (
                        <TouchableOpacity key={text} onPress={() => navigation.navigate(text, { degree: params.title })} activeOpacity={0.7} style={[alignCenter, { flexBasis: "50%" }]}>
                            <Circle icon={icon} gradient={params.gradient} text={text} />
                        </TouchableOpacity>
                    ))
                }
            </View>
            <CardMessage message={getDegreeMessage(params.title)} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: colors.white,
        textTransform: 'capitalize'
    },
    wrap: {
        flexWrap: 'wrap'
    }
})
