import React from 'react'
import { View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';

import CustomButton from '../CustomButton/CustomButton';
import Fox1 from '../../../assets/MainMenu/fox1.png'

const CardTask = ({ navigation, judul, isi, gambar, warnaBg, warnaBgButton, warnaTextButton, warnaTextDesc, onCardClick }) => {
    const [fontsLoaded] = useFonts({
        'NunitoReg': require('../../../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
        'NunitoSemiBold': require('../../../assets/fonts/Nunito/static/Nunito-SemiBold.ttf'),
        'NunitoBold': require('../../../assets/fonts/Nunito/static/Nunito-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const onPressMulai = () => {
        navigation.navigate('MapTask', { /* your params */ }, {
            // Set animationEnabled to false to disable the transition animation
            transitionSpec: {
                open: { animation: 'timing', config: { duration: 0 } },
                close: { animation: 'timing', config: { duration: 0 } },
            },
            animationEnabled: false,
        });

        navigation.navigate('MapTask');
    }

    return (
        <View className="mx-4 flex-row p-5 my-4" style={{ backgroundColor: warnaBg, borderRadius: 30, height: 220 }}>
            <View className="flex-col" style={{ width: '60%' }}>
                <Text className="text-3xl" style={{ color: warnaTextDesc, fontFamily: 'NunitoBold' }} >{judul}</Text>
                <Text className="text-sm" style={{ color: warnaTextDesc }}>{isi}</Text>
                <View className="my-3">
                    <CustomButton onPress={onPressMulai} roundCorner='7' text='YUK MAIN' warnaFont={warnaTextButton} jenisFont='NunitoBold' bgColor={warnaBgButton} sizeX='90%' sizeY='' />
                </View>
            </View>
            <View className="w-full justify-center" sytle={{ height: 40, }}>
                <Image style={{ width: 140, height: 140 }} source={gambar} />
            </View>
        </View>
    )
}

export default CardTask; 