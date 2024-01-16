import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

import AlbertEinstein from '../../../assets/Leaderboard/AlbertEinstein.png'
import AliceNorin from '../../../assets/Leaderboard/AliceNorin.png'
import TasyaGutawa from '../../../assets/Leaderboard/TasyaGutawa.png'

const Pemenang = ({ image, username, score, peringkat, nama }) => {
    const [fontsLoaded] = useFonts({
        'NunitoReg': require('../../../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
        'NunitoSemiBold': require('../../../assets/fonts/Nunito/static/Nunito-SemiBold.ttf'),
        'NunitoBold': require('../../../assets/fonts/Nunito/static/Nunito-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'http://54.255.34.229:8060/users',
                );
                setData(response.data);
                setLoading(false);
            } catch (e) {
                setError(e);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    // fetch('http://54.255.34.229:8060/users/:uid')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => console.error('Error:', error));



    return (
        <View className="relative flex-col items-center">
            <View className="absolute z-10 rounded-full h-[2.5vh] w-[2.5vh] bg-litecartesOrange right-3 items-center justify-center">
                <Text className="text-white" sytle={{ fontFamily: 'NunitoBold' }}>1</Text>
            </View>
            <View className="items-center justify-center rounded-full h-[10vh] w-[10vh] bg-cream">
                <MaterialCommunityIcons name="account" size={50} color="#F37704" />
            </View>
            <Text className="text-center text-white mt-2" style={{ fontFamily: 'NunitoBold' }}>Albert Einstein</Text>
            <Text className="text-center text-white" style={{ fontFamily: 'NunitoReg' }}>@albertoo</Text>
            <Text className="text-center text-xl text-white my-2" style={{ fontFamily: 'NunitoBold' }}>2000 XP</Text>
        </View>
    )
}

export default Pemenang; 