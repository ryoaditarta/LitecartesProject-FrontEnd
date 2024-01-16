import React, { useState } from 'react';
import { View, Text, ScrollView, Animated, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton/CustomButton';

import NextAndPrevButton from '../../components/NextAndPrevButton/NextAndPrevButton';
import PilihanJawaban from '../../components/PilihanJawaban/PilihanJawaban';

import foxImage from '../../../assets/TestPretest/foxImage.png';

const TesPretest = ({ navigation }) => {
    let jmlSoal = 4;
    let opacity = new Animated.Value(0);
    const [progress, setProgress] = useState(100 / jmlSoal);
    const [selectedButton, setSelectedButton] = useState(null);
    const [fontsLoaded] = useFonts({
        'NunitoReg': require('../../../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
        'NunitoSemiBold': require('../../../assets/fonts/Nunito/static/Nunito-SemiBold.ttf'),
        'NunitoBold': require('../../../assets/fonts/Nunito/static/Nunito-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const animate = easing => {
        opacity.setValue(0);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1200,
            easing,
            useNativeDriver: true,
        }).start();
    };


    const nextClicked = () => {
        if (progress >= 0 && progress < 100) {
            setProgress(progress + (100 / (jmlSoal)));
            jawaban[progress / (100 / progress) - 1] = selectedButton;
            setSelectedButton(null);
        } else {
            alert('Anda Yakin Ingin Selesai?')
            for (let i = 0; i < 4; i++) console.log(jawaban[i]);
            navigation.navigate('YaySelesaiPretest');
        }
    }

    const prevClicked = () => {
        if (progress > 100 / jmlSoal) {
            setProgress(progress - (100 / (jmlSoal)));
            jawaban[progress / (100 / progress) - 1] = selectedButton;
            setSelectedButton(null);
        } else {
            alert("Pergi ke halaman sebelumnya");
        }
    }

    const judul = [];
    judul[0] = "Artificial Intelligence (AI)";
    judul[1] = "Hallyu Wave: Fenomena K-Pop";
    judul[2] = "Artificial Intelligence (AI)";
    judul[3] = "Hallyu Wave: Fenomena K-Pop";

    const teks = [];
    teks[0] = "Artificial Intelligence (AI) menjadi semakin terdepan dalam dunia teknologi. Kemampuannya untuk mengenali pola, belajar dari pengalaman, dan membuat keputusan semakin kompleks, memperluas penggunaannya dari industri hingga ke kehidupan sehari-hari. Dari asisten virtual yang bisa merespon pertanyaan kita hingga mobil otonom yang dapat mengemudi sendiri, kehadiran AI telah mengubah cara kita berinteraksi dengan teknologi. Tidak hanya dalam hal kemudahan, AI juga menjadi kunci utama di bidang riset dan inovasi. Penggunaannya dalam pemrosesan bahasa alami, visi komputer, dan bahkan di bidang kesehatan memberikan dampak positif yang signifikan. Meskipun memberikan ban";
    teks[1] = "Hallyu, atau lebih dikenal sebagai gelombang budaya Korea, telah merajalela di seluruh dunia dengan fenomena K-Pop sebagai puncaknya. Musik, fashion, dan budaya pop Korea telah menciptakan dampak besar terutama di kalangan generasi muda. Grup musik seperti BTS, BLACKPINK, dan EXO bukan hanya menjadi idola di Korea, tetapi juga menaklukkan hati penggemar di seluruh penjuru dunia. Gelombang Hallyu tidak hanya mencakup musik, tetapi juga menyentuh berbagai aspek kehidupan, termasuk film, drama televisi, dan gaya hidup sehari-hari. Pengaruh K - Pop tidak hanya terbatas pada musik dan tarian yang energetik.Budaya fanatisme yang kuat, termasuk istilah seperti \"stan\" dan";
    teks[2] = "Artificial Intelligence (AI) menjadi semakin terdepan dalam dunia teknologi. Kemampuannya untuk mengenali pola, belajar dari pengalaman, dan membuat keputusan semakin kompleks, memperluas penggunaannya dari industri hingga ke kehidupan sehari-hari. Dari asisten virtual yang bisa merespon pertanyaan kita hingga mobil otonom yang dapat mengemudi sendiri, kehadiran AI telah mengubah cara kita berinteraksi dengan teknologi. Tidak hanya dalam hal kemudahan, AI juga menjadi kunci utama di bidang riset dan inovasi.Penggunaannya dalam pemrosesan bahasa alami, visi komputer, dan bahkan di bidang kesehatan memberikan dampak positif yang ";
    teks[3] = "Hallyu, atau lebih dikenal sebagai gelombang budaya Korea, telah merajalela di seluruh dunia dengan fenomena K-Pop sebagai puncaknya. Musik, fashion, dan budaya pop Korea telah menciptakan dampak besar terutama di kalangan generasi muda. Grup musik seperti BTS, BLACKPINK, dan EXO bukan hanya menjadi idola di Korea, tetapi juga menaklukkan hati penggemar di seluruh penjuru dunia. Gelombang Hallyu tidak hanya mencakup musik, tetapi juga menyentuh berbagai aspek kehidupan, termasuk film, drama televisi, dan gaya hidup sehari-hari. Pengaruh K - Pop tidak hanya terbatas pada musik dan tarian yang energetik.Budaya fanatisme yang kuat, termasuk istilah seperti \"stan\" dan";

    let jawaban = [];
    jawaban[0] = null;
    jawaban[1] = null;
    jawaban[2] = null;
    jawaban[3] = null;

    const pilihanPressed = (buttonIndex) => {
        setSelectedButton((prevSelected) => {
            // Toggle the selected state for the pressed button
            if (prevSelected === buttonIndex) {
                // If the same button is pressed again, unselect it
                return null;
            } else {
                // If a different button is pressed, select it
                return buttonIndex;
            }
        });
    };


    return (
        <View className="flex-1 bg-cream items-center py-5">
            <View className="flex-row mt-12 my-10">
                <NextAndPrevButton onPress={prevClicked} jenisFont='NunitoBold' text={<AntDesign name="left" size={24} color="white" />} bgColor='#662500' warnaFont='white' sizeX='20' />
                <View className="mx-2" style={{ height: 40, borderWidth: 2, borderColor: '#F37704', borderStyle: 'dashed', borderRadius: 30, width: '70%' }}>
                    <View className="bg-litecartesOrange h-full" style={{ width: `${progress}%`, borderColor: '#662500', borderRadius: 30 }}>

                    </View>
                </View>
                <Text className="text-2xl text-buttonColor" style={{ fontFamily: 'NunitoBold' }}>{progress / (100 / jawaban.length)}/{jawaban.length}</Text>
            </View>
            <View className="flex-row justify-center items-center w-[45vh] bg-litecartesOrange mb-10" style={{ borderRadius: 50, height: '25%' }}>
                <View className="">
                    <Image className="" style={{height: 150, width: 150}} source={foxImage} />
                </View>
                <Text className="text-white text-base text-center" style={{width: 200, fontFamily: 'NunitoSemiBold'}}> Bagaimana tingkat kenyamanan kamu dalam memahami teks bacaan sehari-hari?</Text>
            </View>
            <ScrollView className="px-3 py-5 flex-col gap-5 w-full">
                <View>
                    <PilihanJawaban
                        onPress={() => pilihanPressed(0)}
                        text='Pemula, tapi Semangat!'
                        bgColor={selectedButton === 0 || jawaban[progress / (100 / jmlSoal)] != null ? '#8B340D' : '#F9BD85'}
                        sizeY='20'
                        sizeX='30'
                        jenisFont='NunitoReg'
                        warnaFont={selectedButton === 0 ? 'white' : 'black'}
                    />
                </View>
                <View>
                    <PilihanJawaban
                        onPress={() => pilihanPressed(1)}
                        text='Oke lah, cukup nyaman'
                        bgColor={selectedButton === 1 || jawaban[progress / (100 / jmlSoal)] != null ? '#8B340D' : '#F9BD85'}
                        sizeY='20'
                        sizeX='30'
                        jenisFont='NunitoReg'
                        warnaFont={selectedButton === 1 ? 'white' : 'black'}
                    />
                </View>
                <View>
                    <PilihanJawaban
                        onPress={() => pilihanPressed(2)}
                        text='Sudah bisa, sih'
                        bgColor={selectedButton === 2 || jawaban[progress / (100 / jmlSoal)] != null ? '#8B340D' : '#F9BD85'}
                        sizeY='20'
                        sizeX='30'
                        jenisFont='NunitoReg'
                        warnaFont={selectedButton === 2 ? 'white' : 'black'}
                    />
                </View>
                <View className="">
                    <PilihanJawaban
                        onPress={() => pilihanPressed(3)}
                        text='Ahli banget, nih!'
                        bgColor={selectedButton === 3 || jawaban[progress / (100 / jmlSoal)] != null ? '#8B340D' : '#F9BD85'}
                        sizeY='20'
                        sizeX='30'
                        jenisFont='NunitoReg'
                        warnaFont={selectedButton === 3 ? 'white' : 'black'}
                    />
                </View>
            </ScrollView>
            <CustomButton onPress={nextClicked} text="Yuk Lanjutkan" sizeX='90%' sizeY='10' jenisFont='NunitoBold' warnaFont='#FFD4B8' bgColor='#610502' />

        </View>
    );
}

export default TesPretest;

