import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import MainStack from './navigate';

import * as Font from 'expo-font';
import { gStyle } from './styles/style';

const fonts = () =>
    Font.loadAsync({
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    });

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fonts}
                onFinish={() => setFontLoaded(true)}
                onError={console.warn}
            />
        );
    }

    return <MainStack />;
}