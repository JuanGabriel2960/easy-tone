import { StyleSheet } from 'react-native';

export const colors = {
    dark: '#202430',
    white: '#FFFFFF',
    gray: '#C4C4C4',
    red: '#F54B65',
}

export const theme = StyleSheet.create({
    container: {
        backgroundColor: colors.dark,
        padding: 15,
        flex: 1,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    center: {
        justifyContent: 'center'
    },
    light: {
        fontWeight: '300'
    },
    normal: {
        fontWeight: '400'
    },
    medium: {
        fontWeight: '500'
    },
    bold: {
        fontWeight: '700'
    },
    xs: {
        fontSize: 12
    },
    sm: {
        fontSize: 14
    },
    base: {
        fontSize: 16
    },
    lg: {
        fontSize: 18
    },
    xl: {
        fontSize: 20
    },
    _2xl: {
        fontSize: 24
    },
    _3xl: {
        fontSize: 30
    },
})