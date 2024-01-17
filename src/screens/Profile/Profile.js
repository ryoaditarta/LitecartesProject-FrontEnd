import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import ProfileUserKomponen from '../../components/ProfileUserKomponen/ProfileUserKomponen';

import MainMenuNavigation from '../../components/MainMenuNavigation/MainMenuNavigation';

const Profile = ({ navigation }) => {
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
            <View className="absolute h-[30vh]"></View>
            <View className="px-5 my-3" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View className="w-full items-end">
                    <Text className="text-right"><AntDesign name="setting" size={24} color="#8B340D" /></Text>
                </View>
                <ProfileUserKomponen />
                <View className="w-full gap-3 flex-row my-2 justify-center items-center">
                    <View className="rounded-xl" style={{ backgroundColor: '#F9BD85', padding: 5, elevation: 5 }}>
                        <Text style={{ color: 'black' }}>10 mengikuti</Text>
                    </View>
                    <View className="rounded-xl" style={{ backgroundColor: '#F9BD85', padding: 5, elevation: 5 }}>
                        <Text style={{ color: 'black' }}>10 mengikuti</Text>
                    </View>
                </View>
                <View className="bg-[#F9BD85] mx-2" style={{ flexDirection: 'row', justifyContent: 'space-around', height: '12.5%', elevation: 5, borderRadius: 20 }}>
                    <View className="bg-[#F9BD85]" style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center', borderRadius: 20, margin: 5 }}>
                        <FontAwesome name="diamond" size={24} color={'#F37704'} />
                        <Text className="text-base" style={{ color: '#D2764C', fontFamily: 'Nunito Bold' }}>Reward</Text>
                        <Text style={{ color: '#D2764C' }}>Reward</Text>
                    </View>
                    <View className="bg-[#F9BD85]" style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center', borderRadius: 20, margin: 5 }}>
                        <Entypo name="flash" size={24} color="#F37704" />
                        <Text className="text-base" style={{ color: '#D2764C', fontFamily: 'Nunito Bold' }}>Reward</Text>
                        <Text style={{ color: '#D2764C' }}>XP</Text>
                    </View>
                    <View className="bg-[#F9BD85]" style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center', borderRadius: 20, margin: 5 }}>
                        <FontAwesome name="fire" size={24} color="#F37704" />
                        <Text className="text-base" style={{ color: '#D2764C', fontFamily: 'Nunito Bold' }}>Reward</Text>
                        <Text style={{ color: '#D2764C' }}>Streaks</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: '12.5%', borderRadius: 20 }}>
                    <View className="bg-[#F9BD85]" style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center', elevation: 5, borderRadius: 20, margin: 5 }}>
                        <FontAwesome5 name="medal" size={24} color="#F37704" />
                        <Text className="text-base" style={{ color: '#D2764C', fontFamily: 'Nunito Bold' }}>Reward</Text>
                        <Text style={{ color: '#D2764C' }}>Peringkat Nasional</Text>
                    </View>
                    <View className="bg-[#F9BD85]" style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center', elevation: 5, borderRadius: 20, margin: 5 }}>
                        <MaterialCommunityIcons name="home-city" size={24} color="#F37704" />
                        <Text className="text-base" style={{ color: '#D2764C', fontFamily: 'Nunito Bold' }}>Reward</Text>
                        <Text style={{ color: '#D2764C' }}>Peringkat Kota</Text>
                    </View>
                    <View className="bg-[#F9BD85]" style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center', elevation: 5, borderRadius: 20, margin: 5 }}>
                        <FontAwesome5 name="city" size={24} color="#F37704" />
                        <Text className="text-base" style={{ color: '#D2764C', fontFamily: 'Nunito Bold' }}>Reward</Text>
                        <Text style={{ color: '#D2764C' }}>Peringkat Sekolah</Text>
                    </View>
                </View>

                <View className="my-3 w-full">
                    <Text className="text-left text-2xl text-litecartesOrange" style={{ fontFamily: 'NunitoBold' }}>
                        Pencapaian
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: '12.5%', borderRadius: 20 }}>
                    <View className="bg-cream " style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center', elevation: 5, borderRadius: 20, margin: 5 }}>
                        <MaterialCommunityIcons name="medal" size={24} color="#F37704" />
                        <Text style={{ color: '#D2764C' }}>Reward</Text>
                    </View>
                    <View className="bg-cream " style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center', elevation: 5, borderRadius: 20, margin: 5 }}>
                        <MaterialCommunityIcons name="medal" size={24} color="#F37704" />
                        <Text style={{ color: '#D2764C' }}>Reward</Text>
                    </View>
                    <View className="bg-cream " style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center', elevation: 5, borderRadius: 20, margin: 5 }}>
                        <MaterialCommunityIcons name="medal" size={24} color="#F37704" />
                        <Text style={{ color: '#D2764C' }}>Reward</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: '12.5%', borderRadius: 20 }}>
                    <View className="bg-cream " style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center', elevation: 5, borderRadius: 20, margin: 5 }}>
                        <MaterialCommunityIcons name="medal" size={24} color="#F37704" />
                        <Text style={{ color: '#D2764C' }}>Reward</Text>
                    </View>
                    <View className="bg-cream " style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center', elevation: 5, borderRadius: 20, margin: 5 }}>
                        <MaterialCommunityIcons name="medal" size={24} color="#F37704" />
                        <Text style={{ color: '#D2764C' }}>Reward</Text>
                    </View>
                    <View className="bg-cream " style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center', elevation: 5, borderRadius: 20, margin: 5 }}>
                        <MaterialCommunityIcons name="medal" size={24} color="#F37704" />
                        <Text style={{ color: '#D2764C' }}>Reward</Text>
                    </View>
                </View>
            </View>
            <MainMenuNavigation menuSekarang={4} navigation={navigation} />
        </View>
    );
}

export default Profile;
