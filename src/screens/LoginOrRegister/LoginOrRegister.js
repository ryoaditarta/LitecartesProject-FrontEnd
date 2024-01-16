import React from 'react';
import { View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Login/Login';
import Register from '../Register/Register';

//import components

import CustomButton from '../../components/CustomButton/CustomButton';

import foxImage from '../../../assets/LoginOrRegister/foxImage.png';

const LoginOrRegister = ({navigation}) => {
    const [fontsLoaded] = useFonts({
        'NunitoReg': require('../../../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
        'NunitoSemiBold': require('../../../assets/fonts/Nunito/static/Nunito-SemiBold.ttf'),
        'NunitoBold': require('../../../assets/fonts/Nunito/static/Nunito-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const onPressDaftarSekarang = () => {
        console.log("Daftar Sekarang");
        navigation.navigate('Register'); 
    };

    const onPressSayaSudahPunyaAkun = () => {
        console.log("SudahPunyaAkun");
        navigation.navigate('Login'); 
    };

    return (
        <View className="flex-1 justify-center items-center bg-cream w-full">
            <View className="items-center w-full justify-between h-full pt-40 pb-20">
                <View className="flex-col gap-3 items-center">
                    <Image className="w-40 h-40" source={foxImage}></Image>
                    <Text className="text-2xl text-center text-buttonColor" style={{ fontFamily: 'NunitoBold' }}>SELAMAT DATANG SOBAT LITECARTES</Text>
                    <Text className="text-base text-buttonColor" style={{ fontFamily: 'NunitoBold' }}>Mari Kita Mulai Petualangan Literasi </Text>
                </View>
                <View className="items-center w-full">
                    <CustomButton onPress={onPressDaftarSekarang} roundCorner='10' text='DAFTAR SEKARANG' warnaFont='#FFD4B8' jenisFont='NunitoBold' bgColor='#8B340D' sizeX='80%' sizeY='10' />
                    <CustomButton onPress={onPressSayaSudahPunyaAkun} roundCorner='10' text='Saya sudah punya akun' warnaFont='#8B340D' jenisFont='NunitoBold' bgColor='#FFD4B8' sizeX='80%' sizeY='3' />
                </View>
            </View>

        </View>
    )
}

export default LoginOrRegister