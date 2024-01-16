import React from 'react';
import { View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';

import foxImageMantap from '../../../assets/YaySelesaiPretest/foxImageMantap.png'

import CustomButton from '../../components/CustomButton/CustomButton';

const YaySelesaiPretest = ({navigation}) => {
    const [fontsLoaded] = useFonts({
        'NunitoReg': require('../../../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
        'NunitoSemiBold': require('../../../assets/fonts/Nunito/static/Nunito-SemiBold.ttf'),
        'NunitoBold': require('../../../assets/fonts/Nunito/static/Nunito-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const onPressYukLanjutkan = () =>{
        console.log("On Press Yuk Lanjutkan"); 
        navigation.navigate('MainMenu'); 
    }
    return (

        <View className="justify-center items-center  bg-cream h-full w-full">
            <Image source={foxImageMantap} />
            <View className=" w-80 h-50 bg-litecartesOrange rounded-3xl p-10">
                <Text className="my-2 text-3xl text-center text-white" style={{ fontFamily: 'NunitoBold' }}>YAY SELESAI</Text>
                <Text className="my-2 text-base text-center text-white" style={{ fontFamily: 'NunitoSemiBold' }}>Kamu sudah melangkah lebih dekat ke dunia literasi. Soal-soal selanjutnya akan disesuaikan dengan kemampuanmu, jadi tetap semangat dan nikmati petualangan literasi bersama litecartes!</Text>
                <CustomButton onPress={onPressYukLanjutkan} roundCorner='10' text='Yuk Lanjutkan' warnaFont='#FFD4B8' jenisFont='NunitoBold' bgColor='#8B340D' sizeX='100%' sizeY='5' />
            </View>
        </View >
    )
}

export default YaySelesaiPretest