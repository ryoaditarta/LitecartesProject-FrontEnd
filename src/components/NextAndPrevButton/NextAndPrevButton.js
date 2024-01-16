// CustomButton.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

const NextAndPrevButton = ({ text, onPress, sizeX, sizeY, roundCorner, jenisFont, warnaFont, bgColor }) => {
    const [fontsLoaded] = useFonts({
        'NunitoReg': require('../../../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
        'NunitoSemiBold': require('../../../assets/fonts/Nunito/static/Nunito-SemiBold.ttf'),
        'NunitoBold': require('../../../assets/fonts/Nunito/static/Nunito-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Pressable
            style={{ height: `${sizeY}`, width: 40, borderRadius: 15, backgroundColor: `${bgColor}`, padding: 8 }}
            onPress={onPress}
        >
            <Text className='text-center text-base' style={{ fontFamily: `${jenisFont}`, color: `${warnaFont}` }}>{text}</Text>
        </Pressable>
    );
};

export default NextAndPrevButton;