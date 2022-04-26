import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { colors, theme } from '../theme';
import { useDegree } from '../hooks/useDegree';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import { CardExercises } from '../components/CardExercises';

interface Props extends StackScreenProps<any, any> { }

export const Exercises = ({ route }: Props) => {

    const { exercise, getExercise } = useDegree()
    const params = route.params as any;
    const { container, lg, _3xl, bold, column } = theme;

    useEffect(() => {
        getExercise(params.degree)
    }, [])

    return (
        <View style={[container, column]}>
            <Text style={[_3xl, bold, styles.title]}>Exercises Check</Text>
            <Text style={[lg, styles.content]}>Do this series of daily exercises and you will notice an improvement with the instrument.</Text>
            <ScrollView>
                {
                    exercise?.exercises.map(({ name, content }) => (
                        <CardExercises key={name} name={name} content={content} />
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
    }
})

