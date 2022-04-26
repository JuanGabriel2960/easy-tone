import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { colors, theme } from '../theme';
import { useDegree } from '../hooks/useDegree';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> { }

export const Theory = ({ route }: Props) => {

    const { theory, getTheory } = useDegree()
    const params = route.params as any;
    const { container, lg, _3xl, bold, column } = theme;

    useEffect(() => {
        getTheory(params.degree)
    }, [])

    return (
        <ScrollView style={[container, column]}>
            <Text style={[_3xl, bold, styles.title]}>{theory?.data?.title}</Text>
            <Text style={[lg, styles.content]}>{theory?.data?.content}</Text>
            <View style={{ height: 20 }}></View>
        </ScrollView>
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
    }
})
