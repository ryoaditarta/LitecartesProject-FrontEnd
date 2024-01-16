import React from 'react';
import { View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';

import PeekingFox from '../../../assets/Pretest/PretestFoxPeeking.png'
import chatbox from '../../../assets/Pretest/chatbox.png'
import apayaini from '../../../assets/Pretest/apayaini.png'


import CustomButton from '../../components/CustomButton/CustomButton';


const Pretest = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'NunitoReg': require('../../../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
        'NunitoSemiBold': require('../../../assets/fonts/Nunito/static/Nunito-SemiBold.ttf'),
        'NunitoBold': require('../../../assets/fonts/Nunito/static/Nunito-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const onPressLanjutkan = () => {
        console.log("Yuk Lanjutkan");
        navigation.navigate('TesPretest');
    }

    return (
        <View className="flex-2 justify-end w-full h-full bg-cream">
            <View className="flex-row ">
                <Image className="bottom-0 left-5 " source={PeekingFox} />
            </View>
            <View className="   py-10 items-center w-full rounded-t-3xl bg-litecartesOrange " style={{ height: '30%' }}>
                <Text className="text-white text-center text-xl mb-2" style={{ fontFamily: 'NunitoBold' }}>LITECARTES QUICKCHECK</Text>
                <Text className="text-white text-center text-base mb-10" style={{ fontFamily: 'NunitoSemiBold' }}>Sebelum kita mulai petualangan literasi, jawab 4 pertanyaan cepat untuk menentukan level literasi kamu</Text>
                <CustomButton onPress={onPressLanjutkan} text="Yuk Lanjutkan" sizeX='90%' sizeY='10' jenisFont='NunitoBold' warnaFont='#FFD4B8' bgColor='#610502' />
            </View>
        </View>
    )
}

export default Pretest