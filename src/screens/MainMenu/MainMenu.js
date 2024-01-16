import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import MainMenuNavigation from '../../components/MainMenuNavigation/MainMenuNavigation';
import KeteranganUser from '../../components/KeteranganUser/KeteranganUser';
import CardTask from '../../components/CardTask/CardTask';

import fox1 from '../../../assets/MainMenu/fox1.png';
import fox2 from '../../../assets/MainMenu/fox2.png';
import fox3 from '../../../assets/MainMenu/fox3.png';
import fox4 from '../../../assets/MainMenu/fox4.png';


function generateTask(navigation) {
    const tasks = [];

    const judul = [];
    judul[0] = "Litera Rookie";
    judul[1] = "Voyager";
    judul[2] = "Luminary";
    judul[3] = "Master Mind";

    const isi = [];
    isi[0] = "Mulailah perjalanan literasimu dengan membaca kata-kata sederhana dan memahami ide dari paragraf pendek.";
    isi[1] = "Gali lebih dalam skill baca dan pemahamanmu. Cari gagasan utama, susun jawaban lebih detail.";
    isi[2] = "Menyusuri literasi lebih dalam! Hadapi teks kompleks, analisis sudut pandang, dan latih kemampuanmu di tingkat ini.";
    isi[3] = "Jadi MasterMind literasi! Taklukkan teks sulit, tafsirkan makna simbolis, dan tunjukkan pemikiranmu secara kreatif.";


    const fox = [];
    fox[0] = fox1;
    fox[1] = fox2;
    fox[2] = fox3;
    fox[3] = fox4;


    for (let i = 0; i < 4; i++) {
        if (i % 2 == 0) {
            tasks.push(<CardTask navigation={navigation} warnaTextDesc='#8B340D' warnaTextButton='#FCC99F' warnaBgButton='#F37704' warnaBg='#FCC99F' isi={isi[i]} gambar={fox[i]} judul={judul[i]} key={i} />);
        } else {
            tasks.push(<CardTask navigation={navigation} warnaTextDesc='#FFFFFF' warnaTextButton='#8B340D' warnaBgButton='#FFD4B8' warnaBg='#F37704' isi={isi[i]} gambar={fox[i]} judul={judul[i]} key={i} />);
        }
    }
    return tasks;
}

const MainMenu = ({ navigation }) => {
    return (
        <View className="bg-cream" style={{ flex: 1 }}>
            <KeteranganUser />
            <ScrollView>
                {generateTask(navigation)}
            </ScrollView>
            <MainMenuNavigation menuSekarang={0} navigation={navigation} />
        </View>
    );
}

export default MainMenu;
