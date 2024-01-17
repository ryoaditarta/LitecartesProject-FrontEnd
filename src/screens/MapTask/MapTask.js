import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Layout from '../../Layout';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';

import MainMenuNavigation from '../../components/MainMenuNavigation/MainMenuNavigation';
import KeteranganUser from '../../components/KeteranganUser/KeteranganUser';
import CardTask from '../../components/CardTask/CardTask';
import LevelButton from '../../components/LevelButton/LevelButton';

import map from '../../../assets/MapTask/map.png'

const MapTask = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'NunitoReg': require('../../../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
        'NunitoSemiBold': require('../../../assets/fonts/Nunito/static/Nunito-SemiBold.ttf'),
        'NunitoBold': require('../../../assets/fonts/Nunito/static/Nunito-Bold.ttf'),
    });

    if (!fontsLoaded) {
        console.log("not founded font");
    }

    const levelPressed = (uid) => {
        navigation.navigate('DoTasks', { uid });


    }

    const [tasks, settasks] = useState([])

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            if (user) {
                //user logged in
                const uid = user.uid

                fetch(`http://54.255.34.229:8060/tasks/users/${uid}/category/1`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json(); // This returns a Promise
                    })
                    .then(data => {
                        // console.log(data.data);
                        settasks(data.data);
                    })
                    .catch(error => {
                        console.error('Fetch error:', error);
                    });

            } else {
                navigation.navigate('Login');
                alert('Belum Login!');
            }
        })
    }, [])

    return (
        <Layout>
            <View className="bg-cream" style={{ flex: 1 }}>
                <ScrollView className="h-full bg-black">
                    {/* chunk 1 */}
                    <ImageBackground className="h-[100vh] w-full" source={map}>
                        <View className=" w-full h-full relative">
                            <View className="absolute top-[2vh] left-[2vh]">
                                <LevelButton onPress={()=>{levelPressed(tasks[0].uid)}} warnaTepi={'#662500'} warnaDalam={'#F5E9B8'} isiDalam={1} />
                            </View>
                            <View className="absolute top-[11vh] left-[13vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#662500'} warnaDalam={'#F5E9B8'} isiDalam={2} />
                            </View>
                            <View className="absolute top-[11vh] left-[29vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#662500'} warnaDalam={'#F5E9B8'} isiDalam={3} />
                            </View>
                            <View className="absolute top-[23vh] left-[41vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#662500'} warnaDalam={'#F5E9B8'} isiDalam={<FontAwesome name="key" size={24} color="#662500" />} />
                            </View>
                            <View className="absolute top-[35vh] left-[33vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#662500'} warnaDalam={'#F5E9B8'} isiDalam={4} />
                            </View>
                            <View className="absolute top-[36vh] left-[15vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#662500'} warnaDalam={'#F5E9B8'} isiDalam={5} />
                            </View>
                            <View className="absolute top-[46vh] left-[5vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={6} />
                            </View>
                            <View className="absolute top-[55vh] left-[15vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<Entypo name="open-book" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[55vh] left-[30vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[65vh] left-[39vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[76vh] left-[30vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[77vh] left-[15vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[88vh] left-[2vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                        </View>
                    </ImageBackground>
                    {/* chunk dua */}
                    <ImageBackground className="h-[100vh]" source={map}>
                        <View className=" w-full h-full relative">
                            <View className="absolute top-[2vh] left-[2vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[11vh] left-[13vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[11vh] left-[29vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[23vh] left-[41vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[35vh] left-[33vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[36vh] left-[15vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[46vh] left-[5vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[55vh] left-[15vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[55vh] left-[30vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[65vh] left-[39vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[76vh] left-[30vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[77vh] left-[15vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                            <View className="absolute top-[88vh] left-[2vh]">
                                <LevelButton onPress={levelPressed} warnaTepi={'#9B968B'} warnaDalam={'#F5E9B8'} isiDalam={<MaterialIcons name="lock" size={24} color="#9B968B" />} />
                            </View>
                        </View>
                    </ImageBackground>
                </ScrollView>
                <MainMenuNavigation menuSekarang={0} navigation={navigation} />
            </View>
        </Layout>
    );
}

export default MapTask;


