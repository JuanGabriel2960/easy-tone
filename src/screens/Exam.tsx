import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { colors, theme } from '../theme';
import { StackScreenProps } from '@react-navigation/stack';
import { useExam } from '../hooks/useExam';
import { getExamDescription, getExamImage, getExamOptions } from '../helpers';

interface Props extends StackScreenProps<any, any> { }

export const Exam = ({ route }: Props) => {

    const { gameOptions, correctAnswer, checkAnswer } = useExam()
    const params = route.params as any;
    const { container, lg, _3xl, _2xl, row, base, bold, column, justifyCenter, alignCenter } = theme;

    return (
        <View style={[container, column]}>
            <Text style={[_3xl, bold, styles.title]}>Music Test</Text>
            <Text style={[lg, styles.content]}>Select which is the {getExamDescription(params.degree)} represented in the keyboard image.</Text>
            <View style={[row, justifyCenter]}>
                <Image source={getExamImage(params.degree, correctAnswer)} style={[styles.image]} />
            </View>
            <View style={[row, justifyCenter, alignCenter, styles.wrap]}>
                {
                    getExamOptions(params.degree).map((options) => (
                        <TouchableOpacity key={options} activeOpacity={0.5} onPress={() => checkAnswer(params.degree, options)} style={[styles.option, params.degree === 'professional' ? { flexBasis: '30%' } : { flexBasis: '45%' }]}>
                            <Text style={[base, bold, _2xl, styles.optionText]}>{options}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <Text style={[_2xl, bold, styles.score]}>Score: {gameOptions.score}</Text>
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
    },
    image: {
        height: 150,
        marginVertical: 20,
    },
    option: {
        backgroundColor: colors.silver,
        borderRadius: 20,
        paddingVertical: 5,
        margin: 6,
    },
    optionText: {
        color: colors.white,
        textAlign: 'center',
    },
    wrap: {
        flexWrap: 'wrap'
    },
    score: {
        color: colors.white,
        textAlign: 'center',
        marginTop: 20
    }
})
