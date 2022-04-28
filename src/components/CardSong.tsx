import React from 'react'
import { Text, StyleSheet, Linking, Alert, TouchableOpacity, Image } from 'react-native';
import { colors, theme } from '../theme';

interface Props {
    url: string;
    name: string;
    author: string;
    image: string;
}

export const CardSong = ({ image, url, name, author }: Props) => {

    const { lg, base, bold } = theme

    const openUrl = async (url: string) => {
        const isSupported = await Linking.canOpenURL(url)
        if (isSupported) {
            await Linking.openURL(url)
        } else {
            Alert.alert('Error', 'Could not play the tutorial video.')
        }
    }

    return (
        <TouchableOpacity style={[styles.cardSong]} onPress={() => openUrl(url)}>
            <Image source={{ uri: image }} style={[styles.image]} />
            <Text style={[lg, bold, styles.name]}>{name}</Text>
            <Text style={[base, styles.author]}>{author}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardSong: {
        marginBottom: 20
    },
    image: {
        height: 250
    },
    name: {
        color: colors.white,
    },
    author: {
        color: colors.white,
    },
})

