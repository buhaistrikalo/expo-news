import { StyleSheet } from 'react-native';
import base from '../styles/base';

export const gStyle = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        fontFamily: 'Montserrat-Light',
    },
    header: {
        backgroundColor: base.colors.primary,
    },
    title: {
        fontSize: 20,
        color: base.colors.white,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
    },
});
