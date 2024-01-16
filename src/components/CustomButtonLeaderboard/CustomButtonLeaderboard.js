// CustomButton.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

const CustomButtonLeaderboard = ({ text, onPress, sizeX, sizeY, roundCorner, jenisFont, warnaFont, bgColor }) => {
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
            style={{ height: `${sizeY}`, width: `${sizeX}`, borderRadius: 10, backgroundColor: `${bgColor}`, padding: 3}}
            onPress={onPress}
        >
            <Text className='text-center text-base text-white' style={{ fontFamily: 'NunitoSemiBold' }}>{text}</Text>
        </Pressable>
    );
};

export default CustomButtonLeaderboard;