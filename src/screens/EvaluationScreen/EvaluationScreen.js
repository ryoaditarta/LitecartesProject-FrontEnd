import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

import NextAndPrevButton from '../../components/NextAndPrevButton/NextAndPrevButton';

import foxwithtrophy from '../../../assets/EvaluationScreen/foxwithtrophy.png'

const EvaluationScreen = ({ navigation }) => {

    const closeClicked = () => {
        navigation.navigate('MainMenu');
    }
    const [fontsLoaded] = useFonts({
        'NunitoReg': require('../../../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
        'NunitoSemiBold': require('../../../assets/fonts/Nunito/static/Nunito-SemiBold.ttf'),
        'NunitoBold': require('../../../assets/fonts/Nunito/static/Nunito-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View className="items-center justify-center px-10 flex-1 bg-cream h-full">
            <View className="gap-2 items-center flex-col h-[60vh] w-full rounded-3xl bg-litecartesOrange px-5">
                <View className="w-full flex-row justify-end items-end">
                    <View className="">
                        <NextAndPrevButton onPress={closeClicked} jenisFont='NunitoBold' text={<AntDesign name="close" size={24} color="#FFD4B8" />} bgColor='#662500' warnaFont='white' sizeX='20' />
                    </View>
                </View>
                <Text className="text-3xl text-center text-white" style={{ fontFamily: 'NunitoBold' }}>SEMPURNA</Text>
                <Image source={foxwithtrophy} />
                <View className="flex-row gap-1">
                    <View className="w-1/2 flex-col items-center bg-cream rounded-3xl p-2 gap-2">
                        <AntDesign name="checkcircle" size={35} color="#62BD2A" />
                        <Text className="text-3xl text-center text-white" style={{ fontFamily: 'NunitoBold' }}>5</Text>
                    </View>
                    <View className="w-1/2 flex-col items-center bg-cream rounded-3xl p-2 gap-2">
                        <AntDesign name="closecircle" size={35} color="#FF542E" />
                        <Text className="text-3xl text-center text-white" style={{ fontFamily: 'NunitoBold' }}>0</Text>
                    </View>
                </View>
                <View className="w-full bg-cream p-3 rounded-3xl">
                    <Text className="text-center text-buttonColor" style={{ fontFamily: 'NunitoReg' }}>Yeay, kamu mendapatkan <Text className="text-litecartesOrange">+15</Text></Text>
                </View>
            </View>

        </View>
    );
}

export default EvaluationScreen;
