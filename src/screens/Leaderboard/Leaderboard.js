import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useFonts } from 'expo-font';

import MainMenuNavigation from '../../components/MainMenuNavigation/MainMenuNavigation';
import CustomButtonLeaderboard from '../../components/CustomButtonLeaderboard/CustomButtonLeaderboard';

import Pemenang from '../../components/Pemenang/Pemenang';
import CardLeaderBoarUser from '../../components/CardLeaderBoardUsers/CardLeaderBoardUser';

const Leaderboard = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'NunitoReg': require('../../../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
        'NunitoSemiBold': require('../../../assets/fonts/Nunito/static/Nunito-SemiBold.ttf'),
        'NunitoBold': require('../../../assets/fonts/Nunito/static/Nunito-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View className="bg-cream" style={{ flex: 1 }}>
            <View className="bg-litecartesOrange h-[55vh] rounded-3xl p-5">
                <View className=" h-[40vh] mt-[5vh] items-center">
                    <Text className="text-3xl text-white my-3" style={{ fontFamily: 'NunitoBold' }}>Leaderboard</Text>
                    <View className="flex-row justify-between w-[80vw] rounded-xl bg-[#F9BD85] h-[5vh] p-1">
                        <View className="w-1/3">
                            <CustomButtonLeaderboard bgColor='#F37704' text='Nasional' />
                        </View>
                        <View className="w-1/3">
                            <CustomButtonLeaderboard bgColor='#F9BD85' text='Kota' />
                        </View>
                        <View className="w-1/3">
                            <CustomButtonLeaderboard bgColor='#F9BD85' text='Sekolah' />
                        </View>
                    </View>
                    <View className="flex-row gap-5 my-2">
                        <View className="top-10">
                            <Pemenang />

                        </View>
                        <View>
                            <Pemenang />

                        </View>
                        <View className="top-10">

                            <Pemenang />
                        </View>
                    </View>

                </View>

            </View>
            <ScrollView>
                <View className="flex-col items-center py-5 gap-3">
                    <View>
                        <CardLeaderBoarUser />
                    </View>
                    <View>
                        <CardLeaderBoarUser />
                    </View>
                    <View>
                        <CardLeaderBoarUser />
                    </View>
                    <View>
                        <CardLeaderBoarUser />
                    </View>
                    <View>
                        <CardLeaderBoarUser />
                    </View>
                    <View>
                        <CardLeaderBoarUser />
                    </View>
                    <View>
                        <CardLeaderBoarUser />
                    </View>
                </View>
            </ScrollView>
            <MainMenuNavigation menuSekarang={1} navigation={navigation} />
        </View>
    );
}

export default Leaderboard;
