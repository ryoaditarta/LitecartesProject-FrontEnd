import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { useFonts } from 'expo-font';

import ImageUser from '../../../assets/KeteranganUser/ImageUser.png'

const KeteranganUser = ({ user }) => {
    const [fontsLoaded] = useFonts({
        'NunitoReg': require('../../../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
        'NunitoSemiBold': require('../../../assets/fonts/Nunito/static/Nunito-SemiBold.ttf'),
        'NunitoBold': require('../../../assets/fonts/Nunito/static/Nunito-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const icons = [
        { source: ImageUser, onPress: () => console.log('Home pressed') },
    ];

    const tier = ['Litera Rookie', 'Voyager', 'Luminary', 'Master Mind'];
    return (
        <View className="flex-row justify-center items-center bg-buttonColor rounded-b-3xl" style={{ height: '20%' }}>
            <View className="flex-row justify-around gap-1 mt-10">
                <Image className="w-30 h-30 mt-2" source={ImageUser} />
                <View className=" flex-col gap-1 items-center mr-4">
                    <Text className="text-cream text-xl" style={{ fontFamily: 'NunitoBold' }}>{user.username}</Text>
                    <Text className="text-cream text-xs" style={{ fontFamily: 'NunitoBold' }}>SMAN 1 KOTA BOGOR</Text>
                </View>
                <View className="flex flex-col items-center justify-center" style={{ widht: '20' }}>
                    <View className="flex-row justify-between gap-1 mb-1">
                        <View className="bg-cream w-12" style={{ borderRadius: 30 }}>
                            <Text className="text-center text-buttonColor" style={{ borderRadius: 10, fontFamily: 'NunitoReg' }}>{user.gems}</Text>
                        </View>
                        <View className="bg-cream w-12" style={{ borderRadius: 30 }}>
                            <Text className="text-buttonColor text-center" style={{ borderRadius: 10, fontFamily: 'NunitoReg' }}>{user.total_exp}</Text>
                        </View>
                    </View>
                    <View className="bg-cream w-full p-1" style={{ borderRadius: 10 }}>
                        <Text className="text-xs text-buttonColor text-center" style={{ fontFamily: 'NunitoReg' }}>{tier[user.level - 1]}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default KeteranganUser;
