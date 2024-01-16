import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CardLeaderBoarUser = () => {
    return (
        <View className="flex-row rounded-2xl h-[8vh] w-[85vw] bg-[#FCC99F] items-center px-5 justify-between">
            <View className="flex-row items-center gap-3">
                <Text className="text-buttonColor text-xl" style={{ fontFamily: 'NunitoBold' }}>1</Text>
                <View className="items-center justify-center rounded-full h-[5vh] w-[5vh] bg-cream">
                    <MaterialCommunityIcons name="account" size={30} color="#F37704" />
                </View>
                <View className="flex-col">
                    <Text className="text-buttonColor text-base" style={{ fontFamily: 'NunitoSemiBold' }}>Albert Einstein</Text>
                    <Text className="text-buttonColor text-base" style={{ fontFamily: 'NunitoReg' }}>@albertoo</Text>
                </View>
            </View>
            <View>
                <Text className="text-litecartesOrange text-xl" style={{ fontFamily: 'NunitoBold' }}>2000 XP</Text>
            </View>
        </View>
    )
}

export default CardLeaderBoarUser; 