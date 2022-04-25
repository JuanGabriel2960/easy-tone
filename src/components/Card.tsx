import React from 'react'
import { Text, View, StyleSheet, Image, ImageSourcePropType, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, theme } from '../theme';

interface Props {
    title: string;
    description: string;
    icon: ImageSourcePropType;
    gradient: ImageSourcePropType;
}

export const Card = ({ title, description, icon, gradient }: Props) => {

    const { _3xl, base, bold, row, column, justifyCenter, justifyBetween } = theme;

    return (
        <ImageBackground source={gradient} resizeMode="cover" style={[styles.card, column, justifyCenter]} imageStyle={[{ borderRadius: 20 }]}>
            <Text style={[_3xl, bold, styles.title]}>{title}</Text>
            <View style={[row, justifyBetween]}>
                <Text style={[base, styles.description]}>{description}</Text>
                <TouchableOpacity>
                    <Image source={icon} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: 'red',
        textAlign: 'center',
        width: '100%',
        height: 160,
        marginBottom: 20
    },
    title: {
        color: colors.white,
        marginBottom: 10
    },
    description: {
        color: colors.white,
        maxWidth: '70%'
    }
})
