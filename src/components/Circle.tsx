import React from 'react'
import { Image, ImageSourcePropType, Text, StyleSheet, ImageBackground, View } from 'react-native';
import { theme, colors } from '../theme';

interface Props {
    icon: ImageSourcePropType;
    gradient: ImageSourcePropType;
    text: string;
}

export const Circle = ({ icon, gradient, text }: Props) => {

    const { row, justifyCenter, alignCenter, xl, bold } = theme;

    return (
        <View style={[alignCenter]}>
            <ImageBackground source={gradient} resizeMode="cover" style={[row, justifyCenter, styles.circle]} imageStyle={[{ borderRadius: 100 }]}>
                <Image source={icon} />
            </ImageBackground>
            <Text style={[xl, bold, styles.text]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        borderRadius: 100,
        height: 122,
        width: 122,
    },
    text: {
        color: colors.white,
        marginTop: 5,
        marginBottom: 25
    }
})

