import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { colors, theme } from '../theme';
import { useDegree } from '../hooks/useDegree';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> { }

export const Pieces = ({ route }: Props) => {

    const { piece, getPiece } = useDegree()
    const params = route.params as any;
    const { container, lg, _3xl, base, bold, column } = theme;

    useEffect(() => {
        getPiece(params.degree)
    }, [])

    return (
        <View style={[container, column]}>
            <Text style={[_3xl, bold, styles.title]}>Pieces Check</Text>
            <Text style={[lg, styles.content]}>One of the objectives of the {params.degree} grade is to learn this series of musical pieces.</Text>
            <ScrollView>
                {
                    piece?.pieces.map((pieces) => (
                        <View key={pieces}>
                            <Text style={[base, bold, styles.pieces]}>{pieces}</Text>
                        </View>
                    ))
                }
            </ScrollView>
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
