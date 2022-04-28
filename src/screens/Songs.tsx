import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { colors, theme } from '../theme';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import { useResources } from '../hooks/useResources';
import { CardSong } from '../components/CardSong';

interface Props extends StackScreenProps<any, any> { }

export const Songs = ({ route }: Props) => {

    const { songs, getSongs } = useResources()
    const params = route.params as any;
    const { container, _3xl, bold, column } = theme;

    useEffect(() => {
        getSongs()
    }, [])

    return (
        <View style={[container, column]}>
            <Text style={[_3xl, bold, styles.title]}>Piano Tutorial</Text>
            <ScrollView>
                {
                    songs?.map(({ ID, image, url, name, author }) => (
                        <CardSong key={ID} image={image} url={url} name={name} author={author} />
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
    },
})
